import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import { ContactSeo } from "@/lib/seo";
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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real application, this would send the data to a backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
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
      setErrors({});
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <ContactSeo />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-surface-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold">Contact AshCam Cutting Solutions</h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with our cutting solutions experts. We're here to help with your project requirements across <Link to="/service-areas" className="text-primary hover:underline">Toronto and the GTA</Link>. 
              Browse our <Link to="/products" className="text-primary hover:underline">T.C.T cutting blades</Link> or check our <Link to="/faq" className="text-primary hover:underline">FAQ section</Link> for quick answers.
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
                  <p className="text-muted-foreground" id="form-instructions">
                    Fill out the form below and we'll get back to you as soon as possible. 
                    Required fields are marked with an asterisk (*).
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-error" : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" className="text-sm text-destructive" role="alert">
                            {errors.name}
                          </p>
                        )}
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
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-sm text-destructive" role="alert">
                            {errors.email}
                          </p>
                        )}
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
                          placeholder="+1 647-519-2734"
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? "phone-error" : undefined}
                        />
                        {errors.phone && (
                          <p id="phone-error" className="text-sm text-destructive" role="alert">
                            {errors.phone}
                          </p>
                        )}
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
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="text-sm text-destructive" role="alert">
                          {errors.message}
                        </p>
                      )}
                    </div>
                    
                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                      aria-describedby="form-instructions"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
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
                    content: "+1 647-519-2734",
                    subtitle: "7:00 AM – 10:00 PM"
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "AshCam1964@yahoo.com",
                    subtitle: "We respond within 24 hours"
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    content: "385 Osler Street, Unit 510, Toronto, ON, M6N 0B2",
                    subtitle: "Parking available"
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    content: "7:00 AM – 10:00 PM",
                    subtitle: "Extended hours for your convenience"
                  }
                ].map((item, index) => (
                  <Card key={index} className="border border-border hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <item.icon className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          {item.title === "Email" ? (
                            <a 
                              href={`mailto:${item.content}`}
                              className="text-foreground mb-1 hover:text-primary transition-colors block"
                              aria-label={`Email us at ${item.content}`}
                            >
                              {item.content}
                            </a>
                          ) : item.title === "Phone" ? (
                            <a 
                              href={`tel:${item.content}`}
                              className="text-foreground mb-1 hover:text-primary transition-colors block"
                              aria-label={`Call us at ${item.content}`}
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-foreground mb-1">{item.content}</p>
                          )}
                          <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-warm-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit Our Location</h2>
            <p className="text-xl text-muted-foreground">
              Located in Toronto's industrial district for easy access.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.123456789!2d-79.456789!3d43.654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM5JzE1LjYiTiA3OcKwMjcnMjQuNCJX!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca&q=385+Osler+Street+Toronto+ON+M6N+0B2"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AshCam Cutting Solutions Location - 385 Osler Street, Unit 510, Toronto, ON"
              className="w-full"
            ></iframe>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">385 Osler Street, Unit 510, Toronto, ON, M6N 0B2</span>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Free parking available • Public transit nearby
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;