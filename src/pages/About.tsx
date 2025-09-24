import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Globe, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary">About Daily Pi Mart</Badge>
          <h1 className="text-4xl font-bold mb-6">Pioneering the Future of Digital Commerce</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Daily Pi Mart is the world's first marketplace exclusively powered by Pi Network, 
            revolutionizing how people buy and sell in the digital economy.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To democratize digital commerce by making Pi cryptocurrency accessible to everyone, 
                creating a sustainable ecosystem where individuals can participate in the future economy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-primary" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To become the leading global marketplace for Pi transactions, fostering innovation 
                and financial inclusion through blockchain technology.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Community First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We prioritize our community's needs and feedback in every decision we make.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Constantly pushing boundaries to create the best Pi commerce experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Making digital commerce accessible to users worldwide, regardless of location.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Company Stats */}
        <Card className="bg-gradient-pi text-white">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-white/80">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold">5K+</div>
                <div className="text-white/80">Products Sold</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100+</div>
                <div className="text-white/80">Merchants</div>
              </div>
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-white/80">Countries</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}