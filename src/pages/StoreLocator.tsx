import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Phone, Globe, Search } from 'lucide-react';
import { useState } from 'react';

export default function StoreLocator() {
  const [searchLocation, setSearchLocation] = useState('');

  const physicalStores = [
    {
      name: "Daily Pi Mart - Dubai Mall",
      address: "Dubai Mall, Downtown Dubai, UAE",
      city: "Dubai",
      country: "UAE",
      phone: "+971 4 123 4567",
      hours: "10:00 AM - 10:00 PM",
      type: "Flagship Store",
      services: ["Pi Payments", "Product Demos", "Customer Support", "Pi Education"]
    },
    {
      name: "Daily Pi Mart - Mall of Emirates", 
      address: "Mall of Emirates, Al Barsha, Dubai, UAE",
      city: "Dubai", 
      country: "UAE",
      phone: "+971 4 234 5678",
      hours: "10:00 AM - 12:00 AM",
      type: "Store",
      services: ["Pi Payments", "Product Pickup", "Returns"]
    },
    {
      name: "Daily Pi Mart - Abu Dhabi",
      address: "Marina Mall, Abu Dhabi, UAE", 
      city: "Abu Dhabi",
      country: "UAE",
      phone: "+971 2 345 6789",
      hours: "10:00 AM - 10:00 PM", 
      type: "Store",
      services: ["Pi Payments", "Customer Support", "Product Demos"]
    }
  ];

  const onlinePresence = [
    {
      platform: "Daily Pi Mart Website",
      url: "dailypimart.com",
      description: "Main marketplace platform with full Pi Network integration",
      availability: "Global"
    },
    {
      platform: "Pi Browser App",
      url: "Available in Pi Browser",
      description: "Native Pi Browser application for seamless Pi payments",
      availability: "Worldwide"
    },
    {
      platform: "Mobile Web",
      url: "m.dailypimart.com", 
      description: "Mobile-optimized shopping experience",
      availability: "Global"
    }
  ];

  const partnerLocations = [
    {
      type: "Pi Network Meetups",
      description: "Find Daily Pi Mart representatives at local Pi Network community events",
      coverage: "50+ cities worldwide"
    },
    {
      type: "Tech Conferences",
      description: "Visit our booth at major blockchain and cryptocurrency conferences",
      coverage: "Major tech hubs globally"
    },
    {
      type: "University Partnerships",
      description: "Educational workshops and presentations at partner universities",
      coverage: "25+ universities"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary">Find Us</Badge>
          <h1 className="text-4xl font-bold mb-6">Store Locator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find Daily Pi Mart physical locations, online platforms, and partner events near you.
          </p>
        </div>

        {/* Search */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Enter your location (city, country, or postal code)"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full"
                />
              </div>
              <Button className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                Find Stores
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Physical Stores */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Physical Locations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {physicalStores.map((store, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{store.name}</CardTitle>
                      <Badge variant="outline" className="mt-1">{store.type}</Badge>
                    </div>
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <span className="text-muted-foreground">{store.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{store.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{store.hours}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Services Available:</h4>
                    <div className="flex flex-wrap gap-1">
                      {store.services.map((service, serviceIndex) => (
                        <Badge key={serviceIndex} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Online Platforms */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Online Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {onlinePresence.map((platform, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Globe className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">{platform.platform}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-muted-foreground text-sm mb-2">{platform.description}</p>
                    <Badge variant="outline">{platform.availability}</Badge>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">URL: </span>
                    <span className="font-mono text-primary">{platform.url}</span>
                  </div>
                  <Button className="w-full">
                    Visit Platform
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partner Locations & Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Find Us At Events</h2>
          <div className="space-y-6">
            {partnerLocations.map((location, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{location.type}</h3>
                      <p className="text-muted-foreground mb-2">{location.description}</p>
                      <Badge variant="outline">{location.coverage}</Badge>
                    </div>
                    <Button variant="outline">
                      View Schedule
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact for New Locations */}
        <Card className="bg-gradient-pi text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Don't See a Location Near You?</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              We're expanding globally! Let us know where you'd like to see Daily Pi Mart 
              next, or inquire about partnership opportunities in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Request New Location
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Partnership Inquiry
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}