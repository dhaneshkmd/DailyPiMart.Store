'use client';
import { useEffect, useState, useCallback } from 'react';
import { piAPI } from '@/lib/pi-api';

declare global {
  interface Window {
    Pi?: {
      authenticate: (scopes: string[], onIncompletePaymentFound?: Function) => Promise<{
        accessToken: string;
        user: {
          uid: string;
          username: string;
        };
      }>;
      createPayment: (paymentData: {
        amount: number;
        memo: string;
        metadata: Record<string, any>;
      }, callbacks: {
        onReadyForServerApproval: (paymentId: string) => void;
        onReadyForServerCompletion: (paymentId: string, txid: string) => void;
        onCancel: (paymentId: string) => void;
        onError: (error: any, payment: any) => void;
      }) => Promise<void>;
    };
  }
}

export interface PiUser {
  uid: string;
  username: string;
  accessToken: string;
}

export function usePiSDK() {
  const [isReady, setIsReady] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [user, setUser] = useState<PiUser | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isLoadingSession, setIsLoadingSession] = useState(true);

  // Check if Pi SDK is available and initialized
  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 30; // 15 seconds max to account for initialization
    
    const checkPiSDK = () => {
      attempts++;
      console.log(`Pi SDK check attempt ${attempts}:`, {
        window_Pi: !!window?.Pi,
        authenticate: !!window?.Pi?.authenticate,
        createPayment: !!window?.Pi?.createPayment,
        userAgent: navigator.userAgent
      });
      
      const piAvailable = !!(window?.Pi?.authenticate && window?.Pi?.createPayment);
      
      if (piAvailable) {
        console.log('Pi SDK is ready and initialized!');
        setIsReady(true);
        setIsChecking(false);
        return;
      }
      
      if (attempts >= maxAttempts) {
        console.log('Pi SDK check timeout - Pi SDK not available or not initialized');
        console.log('Make sure you are running in Pi Browser or have configured sandbox mode properly');
        setIsChecking(false);
        return;
      }
      
      setTimeout(checkPiSDK, 500);
    };
    
    // Wait a bit for SDK initialization before checking
    setTimeout(checkPiSDK, 1000);
  }, []);

  const authenticate = useCallback(async () => {
    if (!isReady || !window.Pi) {
      throw new Error('Pi SDK not available or not initialized');
    }

    setIsAuthenticating(true);
    
    try {
      console.log('Attempting Pi authentication with scopes: [username, payments]');
      
      // Handle incomplete payments as per Pi Network documentation
      const authResult = await window.Pi.authenticate(
        ['username', 'payments'], 
        async (payment: any) => {
          console.log('Incomplete payment found during authentication:', payment);
          
          // According to Pi Network docs, we should handle incomplete payments
          // by checking their status and completing them if possible
          if (payment && payment.identifier) {
            try {
              const paymentStatus = await piAPI.getPayment(payment.identifier);
              console.log('Incomplete payment status:', paymentStatus);
              
              // If payment is ready for completion, complete it
              if (paymentStatus.status.transaction_verified && 
                  !paymentStatus.status.developer_completed &&
                  paymentStatus.transaction?.txid) {
                await piAPI.completePayment(payment.identifier, paymentStatus.transaction.txid);
                console.log('Incomplete payment completed:', payment.identifier);
              }
            } catch (error) {
              console.error('Failed to handle incomplete payment:', error);
            }
          }
        }
      );
      
      console.log('Pi authentication successful:', authResult);
      
      // Verify the user with our backend (calls Pi Network's /me endpoint)
      try {
        const verifiedUser = await piAPI.verifyUser(authResult.accessToken);
        console.log('User verified with Pi Network:', verifiedUser);
      } catch (error) {
        console.error('Failed to verify user with Pi Network:', error);
        // Continue with authentication even if verification fails for now
        // In production, you might want to handle this differently
      }
      
      const piUser: PiUser = {
        uid: authResult.user.uid,
        username: authResult.user.username,
        accessToken: authResult.accessToken,
      };
      
      setUser(piUser);
      
      // Store session
      localStorage.setItem('pi_user', JSON.stringify(piUser));
      
      return piUser;
    } catch (error) {
      console.error('Pi authentication failed:', error);
      throw error;
    } finally {
      setIsAuthenticating(false);
    }
  }, [isReady]);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('pi_user');
  }, []);

  const createPayment = useCallback(async (
    paymentData: {
      amount: number;
      memo: string;
      metadata: Record<string, any>;
    },
    callbacks: {
      onReadyForServerApproval: (paymentId: string) => Promise<void>;
      onReadyForServerCompletion: (paymentId: string, txid: string) => Promise<void>;
      onCancel?: (paymentId: string) => void;
      onError?: (error: any, payment: any) => void;
    }
  ) => {
    if (!isReady || !window.Pi) {
      throw new Error('Pi SDK not available or not initialized');
    }

    // Check if we're actually in Pi Browser
    const isPiBrowser = navigator.userAgent.includes('PiBrowser') || 
                        window.location.protocol === 'pi:';
    
    if (!isPiBrowser) {
      console.warn('Not running in Pi Browser. User agent:', navigator.userAgent);
      console.warn('Payment may fail. Please test in actual Pi Browser app.');
    }

    console.log('Creating Pi payment:', {
      ...paymentData,
      isPiBrowser,
      userAgent: navigator.userAgent,
      protocol: window.location.protocol
    });

    try {
      return await window.Pi.createPayment(paymentData, {
      onReadyForServerApproval: async (paymentId: string) => {
        console.log('Payment ready for server approval:', paymentId);
        await callbacks.onReadyForServerApproval(paymentId);
      },
      onReadyForServerCompletion: async (paymentId: string, txid: string) => {
        console.log('Payment ready for server completion:', { paymentId, txid });
        await callbacks.onReadyForServerCompletion(paymentId, txid);
      },
      onCancel: (paymentId: string) => {
        console.log('Payment cancelled:', paymentId);
        callbacks.onCancel?.(paymentId);
      },
      onError: (error: any, payment: any) => {
        console.error('Payment error:', error, payment);
        callbacks.onError?.(error, payment);
      },
    });
    } catch (error: any) {
      console.error('Failed to create payment:', {
        error,
        message: error?.message,
        stack: error?.stack,
        userAgent: navigator.userAgent
      });
      throw error;
    }
  }, [isReady]);

  // Restore session on mount - MUST happen synchronously before any renders
  useEffect(() => {
    console.log('Checking for stored Pi session...');
    const stored = localStorage.getItem('pi_user');
    
    if (stored) {
      try {
        const parsedUser = JSON.parse(stored);
        console.log('Restored Pi session for user:', parsedUser.username);
        setUser(parsedUser);
      } catch (error) {
        console.error('Failed to restore Pi session:', error);
        localStorage.removeItem('pi_user');
      }
    } else {
      console.log('No stored Pi session found');
    }
    
    setIsLoadingSession(false);
  }, []);

  return {
    isReady,
    isChecking,
    isLoadingSession,
    user,
    isAuthenticated: !!user,
    isAuthenticating,
    authenticate,
    logout,
    createPayment,
  };
}