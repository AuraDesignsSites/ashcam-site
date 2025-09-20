import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Award, Wrench, Settings, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import LazyImage from "@/components/LazyImage";
import { HomeSeo } from "@/lib/seo";
import heroWorkshop from "@/assets/hero-workshop.jpg";
import sawBlades from "@/assets/diamond-blade-collection.png";

const Index = () => {
  return (
    <Layout>
      <HomeSeo />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background to-surface-light overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Professional
                  <span className="text-primary block">Cutting Solutions</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Leading provider of high-quality industrial cutting tools and saw blades across Toronto and the GTA. 
                  Precision, reliability, and performance you can trust.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="lg" className="group">
                  <Link to="/products">
                    View Our Products
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="industrial" size="lg">
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <LazyImage 
                  src={heroWorkshop} 
                  alt="Professional workshop with cutting tools — Toronto jobsite" 
                  className="w-full h-[400px]"
                  placeholder="Loading workshop image..."
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose AshCam?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We deliver precision cutting solutions with unmatched quality and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Assured",
                description: "All our products meet the highest industry standards with rigorous quality control."
              },
              {
                icon: Clock,
                title: "Fast Delivery",
                description: "Quick turnaround times to keep your operations running smoothly."
              },
              {
                icon: Award,
                title: "Expert Support",
                description: "Professional guidance from our experienced cutting specialists."
              }
            ].map((feature, index) => (
              <Card key={index} className="border border-border hover-lift group">
                <CardContent className="p-8 text-center">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-surface-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Premium Saw Blades</h2>
              <p className="text-lg text-muted-foreground">
                Our high-quality Japanese imported saw blades are engineered for maximum performance and durability. 
                From precision woodworking to heavy-duty industrial applications.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Wrench, text: "Multiple Sizes Available" },
                  { icon: Settings, text: "Custom Specifications" },
                  { icon: Zap, text: "High-Performance Materials" },
                  { icon: Shield, text: "Long-Lasting Durability" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <item.icon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <Button asChild variant="hero">
                <Link to="/products">Explore All Products</Link>
              </Button>
            </div>
            <div className="relative">
              <LazyImage 
                src={sawBlades} 
                alt="Collection of professional saw blades — GTA construction" 
                className="w-full rounded-lg shadow-lg"
                placeholder="Loading product collection..."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl opacity-90">
              Contact us today for expert advice and competitive quotes on all your cutting tool needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">Get a Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-primary-foreground border-2 border-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
