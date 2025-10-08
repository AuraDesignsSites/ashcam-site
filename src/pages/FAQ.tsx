import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp, ArrowRight, Phone, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import { FAQSeo } from "@/lib/seo";
import { getLastUpdatedDate, formatLastUpdated } from "@/lib/utils";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const faqs = [
    {
      category: "Products & Services",
      questions: [
        {
          question: "What types of cutting blades does AshCam Cutting Solutions offer?",
          answer: "AshCam Cutting Solutions specializes in T.C.T (Tungsten Carbide Tipped) cutting blades for metals, aluminum, wood, concrete, masonry, and tile applications. We offer blades in 6½, 7¼, and 14 inch sizes, each designed for specific cutting applications and optimized for performance in Toronto's construction environment."
        },
        {
          question: "Are your cutting blades suitable for industrial applications?",
          answer: "Yes, our T.C.T cutting blades are engineered for both small contractors and large-scale industrial operations, meeting the highest industry standards for precision and durability. We serve manufacturing facilities, construction companies, and industrial operations across the GTA with specialized cutting solutions."
        },
        {
          question: "Do you offer custom cutting solutions?",
          answer: "Absolutely! We provide custom T.C.T blade solutions for specialized applications. Our team works with you to understand your specific cutting requirements and delivers tailored solutions that meet your exact specifications and performance needs."
        },
        {
          question: "What makes T.C.T blades different from regular cutting blades?",
          answer: "T.C.T (Tungsten Carbide Tipped) blades feature tungsten carbide tips welded to the blade teeth, providing superior hardness, wear resistance, and cutting performance. This makes them ideal for cutting hard materials like steel, concrete, and masonry while maintaining sharpness much longer than standard blades."
        }
      ]
    },
    {
      category: "Delivery & Service Areas",
      questions: [
        {
          question: "Do you deliver cutting tools across the GTA?",
          answer: "Yes, we provide fast delivery across Toronto and the Greater Toronto Area, including Vaughan, Markham, Richmond Hill, Mississauga, Brampton, and surrounding communities. Our local delivery service ensures you get the cutting tools you need when you need them."
        },
        {
          question: "What are your delivery times?",
          answer: "We offer same-day delivery for orders placed before 2 PM on weekdays, and next-day delivery for orders placed after 2 PM. Weekend delivery is available for urgent projects. Contact us for specific delivery scheduling based on your location and requirements."
        },
        {
          question: "Do you offer emergency delivery services?",
          answer: "Yes, we understand that construction projects can't wait. We offer emergency delivery services for urgent cutting tool needs across the GTA. Contact us directly at +1-647-519-2734 for emergency delivery arrangements."
        }
      ]
    },
    {
      category: "Business & Operations",
      questions: [
        {
          question: "What are your business hours?",
          answer: "We're open 7 days a week from 7:00 AM to 10:00 PM to support your project timelines across the GTA. This extended schedule ensures we're available when you need us, whether it's early morning project starts or late evening emergency needs."
        },
        {
          question: "Can I get a custom quote for specific cutting requirements?",
          answer: "Absolutely! Contact us at +1-647-519-2734 or AshCam1964@yahoo.com for expert advice and competitive quotes on all your cutting tool needs. We provide detailed quotes based on your specific requirements, quantities, and project timelines."
        },
        {
          question: "Do you offer bulk pricing for large orders?",
          answer: "Yes, we offer competitive bulk pricing for large orders and ongoing supply agreements. Contact our team to discuss volume discounts and custom pricing arrangements for your business needs."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, check, credit card, and bank transfer payments. For large orders and ongoing business relationships, we can arrange credit terms and invoicing to suit your business needs."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "Do you provide technical support for cutting applications?",
          answer: "Yes, our experienced team provides technical support and guidance for cutting applications. We can help you select the right blade for your specific material and application, troubleshoot cutting issues, and provide recommendations for optimal performance."
        },
        {
          question: "What should I consider when choosing a cutting blade?",
          answer: "Key factors include the material you're cutting, blade size compatibility with your saw, tooth count for the desired cut quality, and the specific application requirements. Our team can guide you through these considerations to ensure you get the best blade for your needs."
        },
        {
          question: "How do I maintain my T.C.T cutting blades?",
          answer: "Proper maintenance includes keeping blades clean, storing them properly, using appropriate cutting speeds, and avoiding overheating. We provide detailed maintenance guidelines with every purchase and are available to answer specific maintenance questions."
        }
      ]
    },
    {
      category: "Toronto-Specific",
      questions: [
        {
          question: "How do Toronto's seasons affect cutting blade performance?",
          answer: "Toronto's climate presents unique challenges for cutting operations. Winter conditions can affect blade performance with cold materials, while summer heat can impact cutting efficiency. We provide seasonal recommendations and specialized solutions for Toronto's construction environment."
        },
        {
          question: "Do you understand Toronto construction regulations?",
          answer: "Yes, our team has deep knowledge of Toronto construction regulations and safety requirements. We can provide guidance on compliance and recommend cutting solutions that meet local safety standards and regulatory requirements."
        },
        {
          question: "What about Toronto construction project timelines?",
          answer: "We understand the fast-paced nature of Toronto construction projects and the importance of meeting tight deadlines. Our flexible delivery schedules and emergency services are designed to support your project timelines and keep your work on schedule."
        }
      ]
    }
  ];

  return (
    <Layout>
      <FAQSeo />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-surface-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get answers to common questions about our T.C.T cutting blades, delivery services, 
              and expert support across Toronto and the GTA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Still Have Questions?
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/products">View Our Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold mb-6 text-primary">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openItems.has(globalIndex);
                    
                    return (
                      <Card key={faqIndex} className="border border-border">
                        <CardHeader 
                          className="cursor-pointer hover:bg-muted/50 transition-colors"
                          onClick={() => toggleItem(globalIndex)}
                        >
                          <CardTitle className="flex items-center justify-between text-left">
                            <span className="text-lg">{faq.question}</span>
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-primary" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-primary" />
                            )}
                          </CardTitle>
                        </CardHeader>
                        {isOpen && (
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </CardContent>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-warm-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our expert team is here to help with any questions about T.C.T cutting blades, 
              delivery, or technical support across Toronto and the GTA.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 p-4 bg-background rounded-lg">
                <Phone className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="font-semibold">Call Us</p>
                  <p className="text-sm text-muted-foreground">+1-647-519-2734</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 bg-background rounded-lg">
                <Mail className="h-5 w-5 text-primary" />
                <div className="text-left">
                  <p className="font-semibold">Email Us</p>
                  <p className="text-sm text-muted-foreground">AshCam1964@yahoo.com</p>
                </div>
              </div>
            </div>
            <Button asChild size="lg">
              <Link to="/contact">Get Expert Advice</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">{formatLastUpdated(getLastUpdatedDate())}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
