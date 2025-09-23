import { useParams, Navigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Plus, Minus, ShoppingCart, Star, Shield, Truck, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { PiBrowserAlert } from '@/components/PiBrowserAlert';
import { getProductBySlug } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { useToast } from '@/hooks/use-toast';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartStore();
  const { toast } = useToast();

  if (!slug) return <Navigate to="/browse" replace />;

  const product = getProductBySlug(slug);
  if (!product) return <Navigate to="/404" replace />;

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity}x ${product.title} added to your cart.`,
    });
  };

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PiBrowserAlert />

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/browse">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Browse
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden rounded-lg bg-muted">
            <img
              src={product.images[0] || '/placeholder.svg'}
              alt={product.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="pi-badge mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary">{product.pricePi}</span>
                <span className="text-xl text-muted-foreground">π</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Price in Pi cryptocurrency
              </p>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              {product.stock > 0 ? (
                <>
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-sm text-success font-medium">
                    {product.stock} in stock
                  </span>
                </>
              ) : (
                <>
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <span className="text-sm text-destructive font-medium">
                    Out of stock
                  </span>
                </>
              )}
            </div>

            {/* Quantity and Add to Cart */}
            {product.stock > 0 && (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Quantity</label>
                  <div className="flex items-center border rounded-md w-fit">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={decreaseQuantity}
                      disabled={quantity <= 1}
                      className="rounded-r-none"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <div className="px-4 py-2 min-w-12 text-center border-x">
                      {quantity}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={increaseQuantity}
                      disabled={quantity >= product.stock}
                      className="rounded-l-none"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className="w-full pi-button-primary"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
              </div>
            )}

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="h-4 w-4" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <RefreshCw className="h-4 w-4" />
                <span>Easy Returns</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="h-4 w-4" />
                <span>Quality Assured</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="pi-card">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2 flex items-center">
                <Shield className="mr-2 h-4 w-4 text-primary" />
                Secure Payments
              </h3>
              <p className="text-sm text-muted-foreground">
                All payments are secured by Pi Network's blockchain technology.
              </p>
            </CardContent>
          </Card>

          <Card className="pi-card">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2 flex items-center">
                <Truck className="mr-2 h-4 w-4 text-primary" />
                Fast Shipping
              </h3>
              <p className="text-sm text-muted-foreground">
                Free shipping on orders over 100π. Express delivery available.
              </p>
            </CardContent>
          </Card>

          <Card className="pi-card">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2 flex items-center">
                <RefreshCw className="mr-2 h-4 w-4 text-primary" />
                Easy Returns
              </h3>
              <p className="text-sm text-muted-foreground">
                30-day return policy. No questions asked if you're not satisfied.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}