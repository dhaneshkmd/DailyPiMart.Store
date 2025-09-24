import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary">Privacy</Badge>
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: December 2024
          </p>
        </div>

        <Card>
          <CardContent className="p-8 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Daily Pi Mart ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our marketplace platform.
              </p>
            </section>

            <Separator />

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                <li>Pi Network account information and wallet address</li>
                <li>Profile information (name, email, location)</li>
                <li>Purchase and transaction history</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2">Usage Information</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Device information (browser, OS, device type)</li>
                <li>Usage patterns and preferences</li>
                <li>IP address and location data</li>
                <li>Cookies and similar technologies</li>
              </ul>
            </section>

            <Separator />

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use your information to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Process transactions and payments via Pi Network</li>
                <li>Provide customer support and service</li>
                <li>Improve our platform and user experience</li>
                <li>Prevent fraud and ensure security</li>
                <li>Send important updates and notifications</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <Separator />

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-bold mb-4">4. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Pi Network:</strong> For payment processing and wallet integration</li>
                <li><strong>Merchants:</strong> Order details necessary for fulfillment</li>
                <li><strong>Service Providers:</strong> Third parties who assist our operations</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect rights</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We never sell your personal information to third parties.
              </p>
            </section>

            <Separator />

            {/* Pi Network Integration */}
            <section>
              <h2 className="text-2xl font-bold mb-4">5. Pi Network Integration</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our platform integrates with Pi Network for authentication and payments. Pi Network's privacy practices are governed by their own privacy policy. We only access the minimum information necessary for transactions and account verification.
              </p>
            </section>

            <Separator />

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement industry-standard security measures including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security audits and monitoring</li>
                <li>Access controls and authentication systems</li>
                <li>Secure data storage and backup procedures</li>
              </ul>
            </section>

            <Separator />

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Export your data in a portable format</li>
              </ul>
            </section>

            <Separator />

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold mb-4">8. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <Separator />

            {/* International Transfers */}
            <section>
              <h2 className="text-2xl font-bold mb-4">9. International Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during international transfers.
              </p>
            </section>

            <Separator />

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-bold mb-4">10. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date. We'll notify you of significant changes via email or platform notification.
              </p>
            </section>

            <Separator />

            {/* Contact Us */}
            <section>
              <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy-related questions or to exercise your rights, contact us at privacy@dailypimart.com or through our support portal.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}