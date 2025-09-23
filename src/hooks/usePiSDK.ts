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

  // Check if Pi SDK is available
  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 20; // 10 seconds max
    
    const checkPiSDK = () => {
      attempts++;
      const piAvailable = !!(window?.Pi?.authenticate && window?.Pi?.createPayment);
      
      if (piAvailable) {
        setIsReady(true);
        setIsChecking(false);
        return;
      }
      
      if (attempts >= maxAttempts) {
        setIsChecking(false);
        return;
      }
      
      setTimeout(checkPiSDK, 500);
    };
    
    checkPiSDK();
  }, []);

  const authenticate = useCallback(async () => {
    if (!isReady || !window.Pi) {
      throw new Error('Pi SDK not available');
    }

    setIsAuthenticating(true);
    
    try {
      const authResult = await window.Pi.authenticate(['username', 'payments']);
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
      throw new Error('Pi SDK not available');
    }

    return window.Pi.createPayment(paymentData, {
      onReadyForServerApproval: callbacks.onReadyForServerApproval,
      onReadyForServerCompletion: callbacks.onReadyForServerCompletion,
      onCancelled: callbacks.onCancelled || (() => {}),
      onError: callbacks.onError || (() => {}),
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