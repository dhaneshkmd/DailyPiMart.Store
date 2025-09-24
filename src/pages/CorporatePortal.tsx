import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, BarChart3, Users, Shield, Zap, Globe } from 'lucide-react';

export default function CorporatePortal() {
  const enterpriseFeatures = [
    {
      icon: Building2,
      title: "Enterprise Account Management",
      description: "Dedicated account managers and priority support for large-scale operations"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics & Reporting",
      description: "Comprehensive business intelligence tools and custom reporting dashboards"
    },
    {
      icon: Users,
      title: "Multi-User Management",
      description: "Role-based access controls and team collaboration features"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Advanced security protocols, audit trails, and compliance features"
    },
    {
      icon: Zap,
      title: "API Integration",
      description: "Robust APIs for seamless integration with existing business systems"
    },
    {
      icon: Globe,
      title: "Global Expansion Support",
      description: "Multi-currency, multi-language support for international operations"
    }
  ];

  const solutions = [
    {
      title: "Wholesale Operations",
      description: "Streamline B2B transactions with bulk ordering, volume discounts, and automated procurement processes.",
      benefits: ["Volume pricing", "Automated reordering", "Credit terms", "Dedicated support"]
    },
    {
      title: "Corporate Gifting",
      description: "Manage employee rewards, client gifts, and corporate events with our specialized gifting platform.",
      benefits: ["Bulk gift cards", "Custom branding", "Automated delivery", "Usage reporting"]
    },
    {
      title: "Supply Chain Integration",
      description: "Connect your existing supply chain systems with Pi Network payments for end-to-end transparency.",
      benefits: ["Real-time tracking", "Smart contracts", "Automated payments", "Audit trails"]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "Contact Sales",
      description: "Perfect for growing businesses",
      features: [
        "Up to 1,000 transactions/month",
        "Basic analytics dashboard", 
        "Email support",
        "Standard Pi integration"
      ],
      recommended: false
    },
    {
      name: "Professional", 
      price: "Contact Sales",
      description: "For established enterprises",
      features: [
        "Up to 10,000 transactions/month",
        "Advanced analytics & reporting",
        "Priority phone support",
        "API access",
        "Multi-user accounts"
      ],
      recommended: true
    },
    {
      name: "Enterprise",
      price: "Custom Pricing", 
      description: "For large-scale operations",
      features: [
        "Unlimited transactions",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 premium support",
        "White-label solutions",
        "Custom security protocols"
      ],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary">Enterprise Solutions</Badge>
          <h1 className="text-4xl font-bold mb-6">Corporate Portal</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empower your business with enterprise-grade Pi Network commerce solutions. 
            Scale your operations with our advanced tools and dedicated support.
          </p>
        </div>

        {/* Enterprise Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Enterprise Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enterprise Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Tailored Solutions</h2>
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Enterprise Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.recommended ? 'border-primary shadow-lg' : ''}`}>
                {tier.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{tier.price}</div>
                  <p className="text-muted-foreground">{tier.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={tier.recommended ? 'default' : 'outline'}>
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <Card className="mb-16 bg-accent/50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Trusted by Leading Companies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">250+</div>
                <div className="text-muted-foreground">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">1M+</div>
                <div className="text-muted-foreground">Monthly Transactions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-muted-foreground">Uptime SLA</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-muted-foreground">Premium Support</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-gradient-pi text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Business?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of enterprises already using Daily Pi Mart to revolutionize 
              their commerce operations with Pi Network technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Schedule Demo
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Contact Sales Team
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}