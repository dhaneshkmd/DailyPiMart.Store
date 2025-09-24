import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Who We Are */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Who We Are</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/story" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-muted-foreground hover:text-primary transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/better-together" className="text-muted-foreground hover:text-primary transition-colors">
                  Let's Do Better Together
                </Link>
              </li>
              <li>
                <Link to="/store-locator" className="text-muted-foreground hover:text-primary transition-colors">
                  Store Locator
                </Link>
              </li>
            </ul>
          </div>

          {/* Shopping Online */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Shopping Online</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/terms-of-services" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Services
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Customer Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/corporate-portal" className="text-muted-foreground hover:text-primary transition-colors">
                  Corporate Portal
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="text-muted-foreground hover:text-primary transition-colors">
                  Regulatory & Compliance Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Email Subscription */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Stay Connected</h3>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="flex-1"
                />
                <Button className="px-6">OK</Button>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">Country/Region</span>
                <span className="flex items-center gap-1">
                  🇦🇪 <span className="text-foreground">UAE</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p>&copy; 2024 Daily Pi Mart. All rights reserved.</p>
            <span className="text-primary font-medium">Powered by Pi Network</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/terms-of-services" className="hover:text-primary transition-colors">
              Terms of Services
            </Link>
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}