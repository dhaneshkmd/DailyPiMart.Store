import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function TermsOfServices() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary">Legal</Badge>
          <h1 className="text-4xl font-bold mb-6">Terms of Services</h1>
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
                Welcome to Daily Pi Mart ("we," "our," or "us"). These Terms of Services ("Terms") govern your use of our website and services. By accessing or using Daily Pi Mart, you agree to be bound by these Terms and our Privacy Policy.
              </p>
            </section>

            <Separator />

            {/* Service Description */}
            <section>
              <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Daily Pi Mart is a digital marketplace that facilitates transactions using Pi Network cryptocurrency. We provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>A platform for buying and selling goods and services</li>
                <li>Pi Network payment processing</li>
                <li>Merchant tools and analytics</li>
                <li>Customer support services</li>
              </ul>
            </section>

            <Separator />

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By using our platform, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Provide accurate and truthful information</li>
                <li>Maintain the security of your Pi Network account</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect other users' rights and privacy</li>
                <li>Not engage in fraudulent or illegal activities</li>
              </ul>
            </section>

            <Separator />

            {/* Pi Network Integration */}
            <section>
              <h2 className="text-2xl font-bold mb-4">4. Pi Network Integration</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our platform integrates with Pi Network for payment processing. You acknowledge that Pi Network transactions are subject to blockchain confirmations and network fees. We are not responsible for Pi Network's availability, performance, or transaction processing times.
              </p>
            </section>

            <Separator />

            {/* Merchant Terms */}
            <section>
              <h2 className="text-2xl font-bold mb-4">5. Merchant Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Merchants using our platform agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Provide accurate product descriptions and pricing</li>
                <li>Fulfill orders promptly and professionally</li>
                <li>Honor refund and return policies</li>
                <li>Pay applicable transaction fees (2.5% per successful transaction)</li>
                <li>Comply with all relevant consumer protection laws</li>
              </ul>
            </section>

            <Separator />

            {/* Prohibited Activities */}
            <section>
              <h2 className="text-2xl font-bold mb-4">6. Prohibited Activities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The following activities are strictly prohibited:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Selling illegal, counterfeit, or prohibited items</li>
                <li>Money laundering or other financial crimes</li>
                <li>Harassment, threats, or abusive behavior</li>
                <li>Attempting to circumvent security measures</li>
                <li>Creating multiple accounts to abuse services</li>
              </ul>
            </section>

            <Separator />

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Daily Pi Mart provides services "as is" without warranties. We are not liable for indirect, incidental, or consequential damages. Our total liability is limited to the amount of fees paid by you in the 12 months preceding the claim.
              </p>
            </section>

            <Separator />

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to suspend or terminate your account at any time for violations of these Terms or for any other reason at our discretion. You may also terminate your account by contacting our support team.
              </p>
            </section>

            <Separator />

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these Terms periodically. Changes will be posted on this page with an updated effective date. Continued use of our services after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <Separator />

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about these Terms, please contact us at legal@dailypimart.com or through our support portal.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}