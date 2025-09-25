'use client';
import { useEffect, useState, useCallback } from 'react';

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
        onCancelled: (paymentId: string) => void;
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
        (payment: any) => {
          console.log('Incomplete payment found:', payment);
          // Handle incomplete payment if needed
        }
      );
      
      console.log('Pi authentication successful:', authResult);
      
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
      onCancelled?: (paymentId: string) => void;
      onError?: (error: any, payment: any) => void;
    }
  ) => {
    if (!isReady || !window.Pi) {
      throw new Error('Pi SDK not available or not initialized');
    }

    console.log('Creating Pi payment:', paymentData);

    return window.Pi.createPayment(paymentData, {
      onReadyForServerApproval: async (paymentId: string) => {
        console.log('Payment ready for server approval:', paymentId);
        await callbacks.onReadyForServerApproval(paymentId);
      },
      onReadyForServerCompletion: async (paymentId: string, txid: string) => {
        console.log('Payment ready for server completion:', { paymentId, txid });
        await callbacks.onReadyForServerCompletion(paymentId, txid);
      },
      onCancelled: (paymentId: string) => {
        console.log('Payment cancelled:', paymentId);
        callbacks.onCancelled?.(paymentId);
      },
      onError: (error: any, payment: any) => {
        console.error('Payment error:', error, payment);
        callbacks.onError?.(error, payment);
      },
    });
  }, [isReady]);

  // Restore session on mount
  useEffect(() => {
    const stored = localStorage.getItem('pi_user');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch (error) {
        localStorage.removeItem('pi_user');
      }
    }
  }, []);

  return {
    isReady,
    isChecking,
    user,
    isAuthenticated: !!user,
    isAuthenticating,
    authenticate,
    logout,
    createPayment,
  };
}