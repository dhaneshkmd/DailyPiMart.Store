import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { usePiSDK } from '@/hooks/usePiSDK';
import { useToast } from '@/hooks/use-toast';
import { piAPI } from '@/lib/pi-api';
import { Loader2, Zap } from 'lucide-react';

interface PiPayButtonProps {
  amount: number;
  orderId: string;
  memo?: string;
  onSuccess?: (paymentId: string, txid: string) => void;
  onError?: (error: any) => void;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export function PiPayButton({
  amount,
  orderId,
  memo,
  onSuccess,
  onError,
  children,
  className,
  disabled = false,
}: PiPayButtonProps) {
  const { isReady, isAuthenticated, createPayment } = usePiSDK();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    if (!isReady) {
      toast({
        title: "Pi Browser Required",
        description: "Please open this app in Pi Browser to pay with Pi.",
        variant: "destructive",
      });
      return;
    }

    if (!isAuthenticated) {
      toast({
        title: "Sign In Required",
        description: "Please sign in with Pi to make payments.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    try {
      await createPayment(
        {
          amount,
          memo: memo || `Daily Pi Mart Order ${orderId}`,
          metadata: { orderId, source: 'daily-pi-mart' },
        },
        {
          onReadyForServerApproval: async (paymentId: string) => {
            toast({
              title: "Processing Payment",
              description: "Your payment is being processed...",
            });
            
            try {
              // Approve payment with Pi Network via our backend
              await piAPI.approvePayment(paymentId);
              console.log('Payment approved:', paymentId);
            } catch (error) {
              console.error('Failed to approve payment:', error);
              toast({
                title: "Approval Failed",
                description: "Failed to approve payment. Please try again.",
                variant: "destructive",
              });
              setIsProcessing(false);
            }
          },
          
          onReadyForServerCompletion: async (paymentId: string, txid: string) => {
            try {
              // Complete payment with Pi Network via our backend
              await piAPI.completePayment(paymentId, txid);
              
              toast({
                title: "Payment Successful!",
                description: `Your order has been completed. Transaction: ${txid.substring(0, 8)}...`,
              });
              
              console.log('Payment completed:', { paymentId, txid });
              onSuccess?.(paymentId, txid);
              setIsProcessing(false);
            } catch (error) {
              console.error('Failed to complete payment:', error);
              toast({
                title: "Completion Failed",
                description: "Failed to complete payment verification. Please contact support.",
                variant: "destructive",
              });
              setIsProcessing(false);
            }
          },
          
          onCancel: (paymentId: string) => {
            console.log('Payment cancelled by user:', paymentId);
            toast({
              title: "Payment Cancelled",
              description: "Your payment was cancelled.",
              variant: "destructive",
            });
            onError?.({ message: 'Payment cancelled by user' });
            setIsProcessing(false);
          },
          
          onError: (error: any) => {
            toast({
              title: "Payment Failed",
              description: "Unable to process your payment. Please try again.",
              variant: "destructive",
            });
            onError?.(error);
            setIsProcessing(false);
          },
        }
      );
    } catch (error) {
      toast({
        title: "Payment Error",
        description: "Unable to initiate payment. Please try again.",
        variant: "destructive",
      });
      setIsProcessing(false);
    }
  };

  const isDisabled = disabled || !isReady || !isAuthenticated || isProcessing;

  return (
    <Button
      onClick={handlePayment}
      disabled={isDisabled}
      className={className}
      variant="default"
      size="lg"
    >
      {isProcessing ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          <Zap className="mr-2 h-4 w-4" />
          {children || `Pay ${amount} π`}
        </>
      )}
    </Button>
  );
}