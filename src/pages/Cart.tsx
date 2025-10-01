import { Link } from 'react-router-dom';
import { ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { PiBrowserAlert } from '@/components/PiBrowserAlert';
import { useCartStore } from '@/store/cartStore';
import { usePiSDK } from '@/hooks/usePiSDK';

export default function Cart() {
  const { items, updateQuantity, removeItem, getTotalPrice, getTotalItems } = useCartStore();
  const { isAuthenticated, isLoadingSession } = usePiSDK();
  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-6">
          <PiBrowserAlert />
          
          <div className="text-center py-16">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">
              Start shopping to add items to your cart
            </p>
            <Button asChild size="lg" className="pi-button-primary">
              <Link to="/browse">
                Start Shopping
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PiBrowserAlert />

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Shopping Cart</h1>
          <p className="text-muted-foreground">
            {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.product.id} className="pi-card">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Product Image */}
                    <div className="w-full sm:w-24 h-48 sm:h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.product.images[0] || '/placeholder.svg'}
                        alt={item.product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <Link 
                            to={`/product/${item.product.slug}`}
                            className="font-semibold hover:text-primary transition-colors"
                          >
                            {item.product.title}
                          </Link>
                          <Badge variant="secondary" className="pi-badge ml-2">
                            {item.product.category}
                          </Badge>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.product.id)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {item.product.description}
                      </p>

                      <div className="flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center border rounded-md">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="rounded-r-none"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <div className="px-3 py-1 min-w-12 text-center border-x">
                            {item.quantity}
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            disabled={item.quantity >= item.product.stock}
                            className="rounded-l-none"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <div className="flex items-baseline gap-1">
                            <span className="text-lg font-bold text-primary">
                              {(item.product.pricePi * item.quantity).toFixed(2)}
                            </span>
                            <span className="text-sm text-muted-foreground">π</span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {item.product.pricePi}π each
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="pi-card sticky top-6">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal ({totalItems} items)</span>
                    <span>{totalPrice.toFixed(2)}π</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className="text-success">Free</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-primary">{totalPrice.toFixed(2)}</span>
                      <span className="text-sm text-muted-foreground">π</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {!isAuthenticated && !isLoadingSession && (
                    <div className="p-3 bg-warning/10 border border-warning/20 rounded-md">
                      <p className="text-sm text-warning-foreground">
                        Sign in with Pi to proceed to checkout
                      </p>
                    </div>
                  )}
                  
                  {isLoadingSession && (
                    <div className="p-3 bg-muted/50 border border-border rounded-md">
                      <p className="text-sm text-muted-foreground text-center">
                        Checking session...
                      </p>
                    </div>
                  )}
                  
                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full pi-button-primary"
                    disabled={!isAuthenticated || isLoadingSession}
                  >
                    <Link to="/checkout">
                      Proceed to Checkout
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  
                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <Link to="/browse">
                      Continue Shopping
                    </Link>
                  </Button>
                </div>

                {/* Pi Info */}
                <div className="p-3 bg-primary/5 border border-primary/20 rounded-md">
                  <p className="text-xs text-primary">
                    💡 Payments are processed using Pi Network's secure blockchain technology
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}