import { Link } from 'react-router-dom';
import { ShoppingBag, Star, TrendingUp, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/ProductCard';
import { PiBrowserAlert } from '@/components/PiBrowserAlert';
import { sampleProducts, categories } from '@/data/products';

export default function Home() {
  const featuredProducts = sampleProducts.slice(0, 4);
  const popularCategories = categories.slice(1, 5); // Skip 'All'

  return (
    <div className="min-h-screen bg-background">
      {/* Pi Browser Alert */}
      <div className="container mx-auto px-4 pt-6">
        <PiBrowserAlert />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/20">
              Powered by Pi Network
            </Badge>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Daily Pi Mart
            </h1>
            
            <p className="mb-8 text-xl text-white/90 sm:text-2xl">
              The first marketplace powered by Pi cryptocurrency. Buy, sell, and trade with the future of digital money.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="pi-button-secondary">
                <Link to="/browse">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Start Shopping
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Learn About Pi
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Daily Pi Mart?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the future of e-commerce with Pi Network's revolutionary payment system
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center pi-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Instant payments with Pi Network's efficient blockchain technology
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center pi-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Secure & Safe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your transactions are protected by Pi Network's robust security
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center pi-card">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Future Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Be part of the next generation of digital commerce
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Popular Categories</h2>
            <Button variant="outline" asChild>
              <Link to="/browse">View All</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularCategories.map((category) => (
              <Link
                key={category}
                to={`/browse?category=${encodeURIComponent(category)}`}
                className="group"
              >
                <Card className="h-32 flex items-center justify-center pi-card group-hover:shadow-pi">
                  <CardContent className="text-center p-4">
                    <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {category}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Button variant="outline" asChild>
              <Link to="/browse">View All Products</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-pi">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Pi Commerce?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of users already shopping with Pi. The future of digital payments is here.
          </p>
          <Button size="lg" variant="secondary" asChild className="pi-button-secondary">
            <Link to="/browse">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Start Shopping Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}