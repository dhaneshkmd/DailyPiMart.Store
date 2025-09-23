import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Lock, CreditCard, ShoppingBag, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { PiBrowserAlert } from '@/components/PiBrowserAlert';
import { PiPayButton } from '@/components/PiPayButton';
import { useCartStore } from '@/store/cartStore';
import { usePiSDK } from '@/hooks/usePiSDK';
import { useToast } from '@/hooks/use-toast';

export default function Checkout() {
  const { items, getTotalPrice, getTotalItems, clearCart } = useCartStore();
  const { isAuthenticated, user } = usePiSDK();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  // Redirect if not authenticated or cart is empty
  if (!isAuthenticated) {
    return <Navigate to="/cart" replace />;
  }

  if (items.length === 0) {
    return <Navigate to="/browse" replace />;
  }

  const orderId = `DPM-${Date.now()}`;

  const handlePaymentSuccess = (paymentId: string, txid: string) => {
    setIsProcessing(false);
    clearCart();
    
    toast({
      title: "Order Completed!",
      description: "Your order has been successfully processed.",
    });

    // In a real app, you'd create the order record here
    console.log('Order completed:', { orderId, paymentId, txid, items });
    
    navigate('/orders', { replace: true });
  };

  const handlePaymentError = (error: any) => {
    setIsProcessing(false);
    console.error('Payment failed:', error);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PiBrowserAlert />

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Checkout</h1>
          <p className="text-muted-foreground">
            Review your order and complete payment with Pi
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Review */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Info */}
            <Card className="pi-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-success" />
                  Customer Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-accent/50 p-4 rounded-lg">
                  <p className="font-medium">Signed in as: {user?.username}</p>
                  <p className="text-sm text-muted-foreground">Pi User ID: {user?.uid}</p>
                </div>
              </CardContent>
            </Card>

            {/* Order Items */}
            <Card className="pi-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Order Items ({totalItems})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-4 p-4 bg-accent/30 rounded-lg">
                    <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.product.images[0] || '/placeholder.svg'}
                        alt={item.product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-medium">{item.product.title}</h4>
                      <Badge variant="secondary" className="pi-badge mt-1">
                        {item.product.category}
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-baseline gap-1">
                        <span className="font-bold text-primary">
                          {(item.product.pricePi * item.quantity).toFixed(2)}
                        </span>
                        <span className="text-sm text-muted-foreground">π</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {item.product.pricePi}π each
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Payment Summary */}
          <div className="lg:col-span-1">
            <Card className="pi-card sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Payment Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Price Breakdown */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal ({totalItems} items)</span>
                    <span>{totalPrice.toFixed(2)}π</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className="text-success">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Pi Network Fee</span>
                    <span className="text-success">Free</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-xl">
                    <span>Total</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-primary">{totalPrice.toFixed(2)}</span>
                      <span className="text-sm text-muted-foreground">π</span>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="space-y-3">
                  <h4 className="font-medium">Payment Method</h4>
                  <div className="p-3 bg-gradient-pi rounded-lg text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold">π</span>
                        </div>
                        <span className="font-medium">Pi Network</span>
                      </div>
                      <Lock className="h-4 w-4" />
                    </div>
                    <p className="text-xs text-white/80 mt-1">
                      Secure blockchain payment
                    </p>
                  </div>
                </div>

                {/* Pay Button */}
                <div className="space-y-3">
                  <PiPayButton
                    amount={totalPrice}
                    orderId={orderId}
                    memo={`Daily Pi Mart Order - ${totalItems} items`}
                    onSuccess={handlePaymentSuccess}
                    onError={handlePaymentError}
                    className="w-full"
                  >
                    Complete Order ({totalPrice.toFixed(2)}π)
                  </PiPayButton>

                  <p className="text-xs text-center text-muted-foreground">
                    By completing this order, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>

                {/* Security Notice */}
                <div className="p-3 bg-success/10 border border-success/20 rounded-md">
                  <div className="flex items-start gap-2">
                    <Lock className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-success">Secure Payment</p>
                      <p className="text-xs text-success/80">
                        Your payment is protected by Pi Network's blockchain security
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}