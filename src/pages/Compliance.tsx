import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, FileText, AlertCircle, CheckCircle, Download, Bell } from 'lucide-react';

export default function Compliance() {
  const complianceUpdates = [
    {
      date: "December 20, 2024",
      title: "Enhanced KYC Requirements for High-Value Transactions",
      type: "Regulatory Update",
      status: "Active",
      description: "New identity verification requirements for transactions exceeding 1000 Pi coins, effective January 1, 2025.",
      impact: "High"
    },
    {
      date: "November 15, 2024", 
      title: "Updated Anti-Money Laundering (AML) Policies",
      type: "Policy Update",
      status: "Active",
      description: "Strengthened AML procedures and transaction monitoring systems in compliance with international standards.",
      impact: "Medium"
    },
    {
      date: "October 30, 2024",
      title: "Data Protection Compliance - GDPR Update",
      type: "Privacy Update", 
      status: "Active",
      description: "Enhanced data protection measures and user consent mechanisms in line with GDPR requirements.",
      impact: "Medium"
    },
    {
      date: "October 1, 2024",
      title: "Merchant Verification Process Enhancement",
      type: "Platform Update",
      status: "Active", 
      description: "Upgraded merchant verification process to ensure higher security and compliance standards.",
      impact: "Low"
    }
  ];

  const regulations = [
    {
      title: "Financial Regulations",
      items: [
        "Payment Services Directive 2 (PSD2)",
        "Anti-Money Laundering (AML) Directive",
        "Know Your Customer (KYC) Requirements",
        "Financial Action Task Force (FATF) Guidelines"
      ]
    },
    {
      title: "Data Protection",
      items: [
        "General Data Protection Regulation (GDPR)",
        "California Consumer Privacy Act (CCPA)", 
        "Personal Data Protection Act (PDPA)",
        "Cross-border Data Transfer Regulations"
      ]
    },
    {
      title: "Cryptocurrency Compliance",
      items: [
        "Virtual Asset Service Provider (VASP) Licensing",
        "Digital Asset Regulatory Framework",
        "Cryptocurrency Exchange Regulations",
        "Blockchain Technology Compliance"
      ]
    }
  ];

  const complianceDocs = [
    {
      title: "Compliance Framework Overview",
      type: "PDF Document",
      size: "2.5 MB",
      lastUpdated: "December 2024"
    },
    {
      title: "AML/KYC Policy Document",
      type: "PDF Document", 
      size: "1.8 MB",
      lastUpdated: "November 2024"
    },
    {
      title: "Data Protection Impact Assessment",
      type: "PDF Document",
      size: "3.2 MB", 
      lastUpdated: "October 2024"
    },
    {
      title: "Regulatory Compliance Checklist",
      type: "PDF Document",
      size: "1.1 MB",
      lastUpdated: "December 2024"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High":
        return "text-red-600 dark:text-red-400";
      case "Medium":
        return "text-orange-600 dark:text-orange-400";
      case "Low":
        return "text-green-600 dark:text-green-400";
      default:
        return "text-gray-600 dark:text-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary">Compliance Center</Badge>
          <h1 className="text-4xl font-bold mb-6">Regulatory & Compliance Updates</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed about the latest regulatory changes, compliance requirements, 
            and policy updates affecting Daily Pi Mart operations.
          </p>
        </div>

        {/* Latest Updates */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Latest Updates</h2>
            <Button variant="outline" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Subscribe to Updates
            </Button>
          </div>
          
          <div className="space-y-6">
            {complianceUpdates.map((update, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className={getStatusColor(update.status)}>
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {update.status}
                        </Badge>
                        <Badge variant="outline">{update.type}</Badge>
                        <span className={`text-sm font-medium ${getImpactColor(update.impact)}`}>
                          {update.impact} Impact
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{update.title}</h3>
                      <p className="text-muted-foreground mb-2">{update.description}</p>
                      <span className="text-sm text-muted-foreground">{update.date}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regulatory Framework */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Regulatory Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regulations.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Compliance Documents */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Compliance Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceDocs.map((doc, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{doc.title}</h3>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>{doc.type} • {doc.size}</p>
                          <p>Updated: {doc.lastUpdated}</p>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Compliance Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-primary" />
                Report Compliance Issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you encounter any compliance-related issues or have concerns about 
                our platform's regulatory adherence, please report them immediately.
              </p>
              <Button className="w-full">
                Report Issue
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Compliance Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Need help understanding compliance requirements or have questions 
                about regulatory changes? Our compliance team is here to help.
              </p>
              <Button variant="outline" className="w-full">
                Contact Compliance Team
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}