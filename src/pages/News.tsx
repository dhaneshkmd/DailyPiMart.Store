import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, TrendingUp, Users, Zap } from 'lucide-react';

export default function News() {
  const newsArticles = [
    {
      date: "December 15, 2024",
      category: "Platform Update",
      title: "Enhanced Security Features Now Live",
      summary: "We've implemented advanced fraud detection and improved transaction monitoring for safer Pi commerce.",
      readTime: "3 min read",
      featured: true
    },
    {
      date: "December 10, 2024", 
      category: "Milestone",
      title: "10,000 Active Users Milestone Reached",
      summary: "Daily Pi Mart community has grown to over 10,000 active users across 50+ countries worldwide.",
      readTime: "2 min read",
      featured: true
    },
    {
      date: "December 5, 2024",
      category: "New Feature",
      title: "Introducing Merchant Analytics Dashboard",
      summary: "New comprehensive analytics tools help merchants track sales, customer behavior, and optimize their stores.",
      readTime: "4 min read",
      featured: false
    },
    {
      date: "November 28, 2024",
      category: "Partnership",
      title: "Strategic Partnership with Pi Network Developers",
      summary: "Collaborating to improve Pi payment processing and enhance the overall user experience.",
      readTime: "5 min read",
      featured: false
    },
    {
      date: "November 20, 2024",
      category: "Community",
      title: "Customer Success Stories: UAE Merchants",
      summary: "Local businesses in UAE share their experience selling products on Daily Pi Mart platform.",
      readTime: "6 min read",
      featured: false
    },
    {
      date: "November 15, 2024",
      category: "Platform Update",
      title: "Mobile-Optimized Experience Launch", 
      summary: "Improved mobile interface makes shopping with Pi even easier on smartphones and tablets.",
      readTime: "3 min read",
      featured: false
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Platform Update":
        return Zap;
      case "Milestone":
        return TrendingUp;
      case "Community":
        return Users;
      default:
        return CalendarDays;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Platform Update":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Milestone":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "New Feature":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "Partnership":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      case "Community":
        return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const featuredArticles = newsArticles.filter(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary">Latest News</Badge>
          <h1 className="text-4xl font-bold mb-6">Stay Updated with Daily Pi Mart</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get the latest updates, feature announcements, and community news from the 
            world's leading Pi Network marketplace.
          </p>
        </div>

        {/* Featured Articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => {
              const CategoryIcon = getCategoryIcon(article.category);
              return (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(article.category)}>
                        <CategoryIcon className="h-3 w-3 mr-1" />
                        {article.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{article.readTime}</span>
                    </div>
                    <CardTitle className="text-xl leading-tight">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{article.summary}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {article.date}
                      </span>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Regular Articles */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All News</h2>
          <div className="space-y-6">
            {regularArticles.map((article, index) => {
              const CategoryIcon = getCategoryIcon(article.category);
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <Badge className={getCategoryColor(article.category)}>
                            <CategoryIcon className="h-3 w-3 mr-1" />
                            {article.category}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{article.readTime}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                        <p className="text-muted-foreground mb-2">{article.summary}</p>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <CalendarDays className="h-4 w-4" />
                          {article.date}
                        </span>
                      </div>
                      <Button variant="outline">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-16 bg-gradient-pi text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new features, 
              partnerships, and important updates from Daily Pi Mart.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-gray-900"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}