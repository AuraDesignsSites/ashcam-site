import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-surface-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with our cutting solutions experts. We're here to help with your project requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+44 123 456 7890"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your cutting tool requirements, project details, or any questions you have..."
                        rows={6}
                      />
                    </div>
                    
                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Our team of cutting specialists is ready to assist you with expert advice, 
                  product recommendations, and competitive quotes.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+44 123 456 7890",
                    subtitle: "Mon-Fri, 8:00 AM - 6:00 PM"
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "info@ashcamcutting.co.uk",
                    subtitle: "We respond within 24 hours"
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    content: "123 Industrial Estate, Manchester, M1 2AB, United Kingdom",
                    subtitle: "Visits by appointment"
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    content: "Monday - Friday: 8:00 AM - 6:00 PM",
                    subtitle: "Saturday: 9:00 AM - 2:00 PM"
                  }
                ].map((item, index) => (
                  <Card key={index} className="border border-border hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <item.icon className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          <p className="text-foreground mb-1">{item.content}</p>
                          <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-primary">Emergency Service</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Need urgent cutting tools for critical projects? We offer expedited service for emergency requirements.
                  </p>
                  <p className="text-sm font-medium">
                    Emergency Hotline: +44 123 456 7899
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-surface-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit Our Location</h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of Manchester's industrial district for easy access.
            </p>
          </div>
          
          <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
            <div className="text-center space-y-2">
              <MapPin className="h-8 w-8 text-primary mx-auto" />
              <p className="text-muted-foreground">Interactive map coming soon</p>
              <p className="text-sm text-muted-foreground">
                123 Industrial Estate, Manchester, M1 2AB
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;