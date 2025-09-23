import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Page404() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto">
          {/* 404 Visual */}
          <div className="mb-8">
            <div className="text-8xl font-bold bg-gradient-pi bg-clip-text text-transparent mb-4">
              404
            </div>
            <div className="w-20 h-20 bg-gradient-pi rounded-full flex items-center justify-center mx-auto mb-4 opacity-20">
              <span className="text-3xl text-white">π</span>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
            <p className="text-muted-foreground mb-6">
              Sorry, we couldn't find the page you're looking for. 
              It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="pi-button-primary">
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Go Home
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link to="/browse">
                  <Search className="mr-2 h-4 w-4" />
                  Browse Products
                </Link>
              </Button>
            </div>

            <Button
              variant="ghost"
              onClick={() => window.history.back()}
              className="text-muted-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>

          {/* Help Text */}
          <div className="mt-12 p-4 bg-accent/30 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Need help? Visit our{' '}
              <Link to="/" className="text-primary hover:underline">
                homepage
              </Link>{' '}
              or browse our{' '}
              <Link to="/browse" className="text-primary hover:underline">
                product catalog
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}