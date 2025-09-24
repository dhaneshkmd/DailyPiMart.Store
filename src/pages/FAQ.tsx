import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageCircle, HelpCircle, Shield, CreditCard } from 'lucide-react';

export default function FAQ() {
  const faqSections = [
    {
      title: "Getting Started",
      icon: HelpCircle,
      faqs: [
        {
          question: "What is Daily Pi Mart?",
          answer: "Daily Pi Mart is the world's first marketplace exclusively powered by Pi Network cryptocurrency. It allows users to buy and sell products using Pi coins in a secure, decentralized environment."
        },
        {
          question: "How do I create an account?",
          answer: "Simply visit our platform and connect your Pi Network account through the Pi Browser. Your Pi wallet will be automatically linked, and you can start shopping immediately."
        },
        {
          question: "Do I need Pi coins to shop?",
          answer: "Yes, all transactions on Daily Pi Mart are conducted using Pi cryptocurrency. Make sure you have sufficient Pi balance in your Pi Network wallet before making a purchase."
        }
      ]
    },
    {
      title: "Payments & Security",
      icon: Shield,
      faqs: [
        {
          question: "How secure are Pi payments?",
          answer: "Pi Network uses advanced cryptographic security and consensus mechanisms to ensure all transactions are secure and immutable. Your payments are protected by blockchain technology."
        },
        {
          question: "Can I get a refund?",
          answer: "Refund policies vary by merchant. Most digital products have a 7-day refund window, while physical products follow standard return policies. Check the product page for specific terms."
        },
        {
          question: "How long do transactions take?",
          answer: "Pi transactions are typically processed within seconds to a few minutes, depending on network congestion and transaction complexity."
        }
      ]
    },
    {
      title: "Selling & Merchants",
      icon: CreditCard,
      faqs: [
        {
          question: "How can I become a merchant?",
          answer: "Apply through our merchant portal by providing business details, product information, and Pi Network verification. Our team will review your application within 5-7 business days."
        },
        {
          question: "What fees do merchants pay?",
          answer: "We charge a competitive 2.5% transaction fee for successful sales. There are no listing fees or monthly charges - you only pay when you earn."
        },
        {
          question: "How do I receive payments?",
          answer: "Pi payments are automatically transferred to your connected Pi Network wallet upon successful transaction completion and verification."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary">Help Center</Badge>
          <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about Daily Pi Mart, Pi payments, and our marketplace.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8 mb-12">
          {faqSections.map((section, sectionIndex) => (
            <Card key={sectionIndex}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <section.icon className="h-4 w-4 text-primary" />
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {section.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${sectionIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Support */}
        <Card className="bg-gradient-pi text-white text-center">
          <CardContent className="p-8">
            <MessageCircle className="h-12 w-12 mx-auto mb-4 text-white/80" />
            <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-white/90 mb-6">
              Can't find what you're looking for? Our support team is here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Contact Support
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Live Chat
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}