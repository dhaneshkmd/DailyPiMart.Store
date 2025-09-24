import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Users, Rocket, Target } from 'lucide-react';

export default function Story() {
  const timeline = [
    {
      year: "2023",
      title: "The Vision",
      description: "Founded with the mission to create the first Pi Network marketplace, bridging traditional commerce with cryptocurrency."
    },
    {
      year: "2024", 
      title: "Platform Launch",
      description: "Launched Daily Pi Mart with our first merchants and pioneering Pi payment integration."
    },
    {
      year: "2024",
      title: "Growing Community",
      description: "Reached 10,000+ active users and 100+ merchants across 50+ countries worldwide."
    },
    {
      year: "2025",
      title: "The Future",
      description: "Expanding globally with advanced features, mobile apps, and enterprise solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary">Our Journey</Badge>
          <h1 className="text-4xl font-bold mb-6">The Story Behind Daily Pi Mart</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From a simple idea to revolutionize digital commerce, discover how we're building 
            the future of Pi Network marketplace together.
          </p>
        </div>

        {/* Origin Story */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Where It All Began</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In early 2023, our founders recognized the untapped potential of Pi Network's 
                  growing ecosystem. While millions of people were mining Pi, there was no 
                  practical marketplace where they could actually use their Pi coins.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We saw an opportunity to bridge this gap and create real utility for Pi 
                  cryptocurrency. Our vision was simple: build a trusted, user-friendly 
                  marketplace where Pi holders could buy and sell goods and services.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  What started as a weekend project has grown into the world's largest 
                  Pi Network marketplace, serving thousands of users globally.
                </p>
              </div>
              <div className="bg-gradient-pi rounded-lg p-8 text-white">
                <Lightbulb className="h-12 w-12 mb-4 text-white/80" />
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p className="text-white/90">
                  To democratize digital commerce by making Pi cryptocurrency 
                  accessible and practical for everyday transactions worldwide.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey So Far</h2>
          <div className="space-y-8">
            {timeline.map((milestone, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <Card className="flex-1">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{milestone.year}</Badge>
                      <CardTitle>{milestone.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What Drives Us</h2>
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
                  Every decision we make puts our community's needs and feedback at the center.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pioneering new ways to make cryptocurrency practical and accessible to everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Purpose</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Building technology that creates real value and positive impact in people's lives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Future Vision */}
        <Card className="bg-gradient-pi text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Looking Ahead</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-6">
              We're just getting started. Our roadmap includes mobile applications, 
              advanced merchant tools, global expansion, and innovative features that 
              will make Pi commerce even more powerful and accessible.
            </p>
            <p className="text-white/80 text-lg">
              Join us as we continue building the future of digital commerce, one Pi transaction at a time.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}