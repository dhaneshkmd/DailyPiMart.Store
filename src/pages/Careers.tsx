import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Zap, Heart, Mail } from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Join our team to build the future of Pi commerce with React and blockchain technologies."
    },
    {
      title: "Pi Network Integration Specialist",
      department: "Blockchain",
      location: "Dubai, UAE",
      type: "Full-time", 
      description: "Lead the integration and optimization of Pi Network payment systems."
    },
    {
      title: "Product Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Drive growth and user adoption for our Pi-powered marketplace."
    },
    {
      title: "Customer Success Manager",
      department: "Support",
      location: "Global",
      type: "Contract",
      description: "Help merchants and customers succeed on our platform."
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "Work with cutting-edge blockchain technology"
    },
    {
      icon: Users,
      title: "Global Team",
      description: "Collaborate with talented people worldwide"
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible hours and remote-first culture"
    },
    {
      icon: Mail,
      title: "Growth Opportunities",
      description: "Learn and advance in the Pi ecosystem"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary">Join Our Team</Badge>
          <h1 className="text-4xl font-bold mb-6">Shape the Future of Pi Commerce</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of the team building the world's first Pi Network marketplace. 
            Help us democratize digital commerce and create the future economy.
          </p>
        </div>

        {/* Why Join Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Daily Pi Mart?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{position.title}</CardTitle>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span>{position.department}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {position.location}
                        </span>
                        <Badge variant="outline">{position.type}</Badge>
                      </div>
                    </div>
                    <Button>Apply Now</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{position.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-pi text-white text-center">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Don't See Your Role?</h2>
            <p className="text-white/90 mb-6">
              We're always looking for exceptional talent. Send us your resume and let us know how you'd like to contribute.
            </p>
            <Button variant="secondary" size="lg">
              Send Your Resume
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}