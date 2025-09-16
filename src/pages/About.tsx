import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Target, Users, Trophy, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-surface-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold">About AshCam Cutting Solutions</h1>
            <p className="text-xl text-muted-foreground">
              Delivering precision cutting solutions with unwavering commitment to quality and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Founded with a vision to provide the industry's finest cutting tools
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                AshCam Cutting Solutions Ltd. began as a specialized provider of high-quality saw blades 
                and cutting tools for industrial applications. With years of experience in the industry, 
                we understand the critical importance of precision, reliability, and performance in 
                professional cutting operations.
              </p>
              <p>
                Our commitment to excellence has made us a trusted partner for businesses across various 
                sectors, from woodworking and construction to manufacturing and engineering. We pride 
                ourselves on delivering solutions that not only meet but exceed our customers' expectations.
              </p>
              <p>
                Today, we continue to expand our product range while maintaining the same dedication to 
                quality that has defined our company from the beginning. Every product we offer is 
                carefully selected and tested to ensure it meets our rigorous standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Precision",
                description: "We deliver cutting tools engineered for exact specifications and consistent performance in demanding applications."
              },
              {
                icon: Users,
                title: "Customer Focus",
                description: "Our customers' success is our priority. We provide expert guidance and support throughout your project lifecycle."
              },
              {
                icon: Trophy,
                title: "Excellence",
                description: "We maintain the highest standards in product quality, service delivery, and professional expertise."
              }
            ].map((value, index) => (
              <Card key={index} className="border border-border hover-lift">
                <CardContent className="p-8 text-center space-y-4">
                  <value.icon className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To be the leading provider of precision cutting solutions, empowering our customers 
              with the highest quality tools and expert support needed to achieve exceptional 
              results in their projects and operations.
            </p>
            <Button asChild variant="hero" size="lg" className="group">
              <Link to="/products">
                Explore Our Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Ready to Work With Us?</h2>
            <p className="text-xl opacity-90">
              Get in touch to discuss your cutting tool requirements and discover how we can help your business succeed.
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;