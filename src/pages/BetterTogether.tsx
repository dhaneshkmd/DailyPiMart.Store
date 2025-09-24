import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Globe, Lightbulb, Target, Handshake } from 'lucide-react';

export default function BetterTogether() {
  const initiatives = [
    {
      icon: Users,
      title: "Community Support Program",
      description: "Helping Pi Network pioneers in developing countries access digital commerce opportunities.",
      impact: "5,000+ users supported"
    },
    {
      icon: Globe,
      title: "Environmental Sustainability",
      description: "Promoting eco-friendly practices among merchants and supporting green product categories.",
      impact: "Carbon neutral shipping"
    },
    {
      icon: Lightbulb,
      title: "Educational Initiatives",
      description: "Free workshops and resources to help people understand cryptocurrency and digital payments.",
      impact: "10,000+ people educated"
    },
    {
      icon: Handshake,
      title: "Small Business Support",
      description: "Special programs and reduced fees for small merchants and local businesses.",
      impact: "500+ small businesses"
    }
  ];

  const partnershipAreas = [
    {
      title: "NGOs & Nonprofits",
      description: "Collaborating with organizations focused on financial inclusion and digital literacy.",
      action: "Partner with us"
    },
    {
      title: "Educational Institutions", 
      description: "Working with schools and universities to teach blockchain and cryptocurrency concepts.",
      action: "Join our program"
    },
    {
      title: "Local Communities",
      description: "Supporting community-led initiatives that promote Pi Network adoption and usage.",
      action: "Get involved"
    },
    {
      title: "Tech for Good",
      description: "Partnering with organizations using technology to solve social and environmental problems.",
      action: "Collaborate"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary">Social Impact</Badge>
          <h1 className="text-4xl font-bold mb-6">Let's Do Better Together</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            At Daily Pi Mart, we believe technology should create positive change. 
            Join us in building a more inclusive, sustainable, and equitable digital economy.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-16 bg-gradient-pi text-white">
          <CardContent className="p-8 text-center">
            <Heart className="h-12 w-12 mx-auto mb-6 text-white/80" />
            <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We're committed to using our platform and resources to create positive social impact, 
              support underserved communities, and promote sustainable practices in digital commerce.
            </p>
          </CardContent>
        </Card>

        {/* Current Initiatives */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <initiative.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{initiative.title}</CardTitle>
                      <Badge variant="outline" className="mt-1">{initiative.impact}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{initiative.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership Opportunities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Partnership Opportunities</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We're looking for like-minded organizations to join us in creating positive change. 
            Here are some ways we can work together:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnershipAreas.map((area, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {area.title}
                    <Button variant="outline" size="sm">
                      {area.action}
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Get Involved */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                Individual Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">How You Can Help</h3>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Support small businesses on our platform</li>
                <li>• Choose eco-friendly products when shopping</li>
                <li>• Share knowledge about Pi Network with others</li>
                <li>• Provide feedback to help us improve accessibility</li>
              </ul>
              <Button className="w-full">Join Our Community</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                Organization Partnerships
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Partner With Us</h3>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Educational partnerships and workshops</li>
                <li>• Community outreach programs</li>
                <li>• Sustainability initiatives</li>
                <li>• Financial inclusion projects</li>
              </ul>
              <Button className="w-full">Contact Partnership Team</Button>
            </CardContent>
          </Card>
        </div>

        {/* Impact Metrics */}
        <Card className="bg-accent/50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Our Impact So Far</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">15K+</div>
                <div className="text-muted-foreground">People Educated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-muted-foreground">Small Businesses Supported</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">25</div>
                <div className="text-muted-foreground">Partner Organizations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-muted-foreground">Countries Reached</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}