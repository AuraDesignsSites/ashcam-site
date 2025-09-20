import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import sawBlades from "@/assets/saw-blades-collection.jpg";

const Products = () => {
  const products = [
    {
      name: "Diamond Blade Cutting Disc",
      category: "Masonry & Concrete",
      description: "High-performance 6½ inch blade engineered for concrete, stone, and masonry cutting. Designed for durability and precision in compact cutting applications.",
      size: "6½ inches",
      features: ["Diamond Segments", "Wet/Dry Use", "Precision Cutting"],
      price: "$35"
    },
    {
      name: "Diamond Blade Cutting Disc",
      category: "Masonry & Concrete", 
      description: "High-performance 7¼ inch blade engineered for concrete, stone, and masonry cutting. Designed for durability and precision in medium-duty cutting applications.",
      size: "7¼ inches",
      features: ["Diamond Segments", "Wet/Dry Use", "Precision Cutting"],
      price: "$40"
    },
    {
      name: "Diamond Blade Cutting Disc",
      category: "Masonry & Concrete",
      description: "High-performance 14 inch blade engineered for concrete, stone, and masonry cutting. Designed for durability and precision in heavy-duty cutting applications.",
      size: "14 inches",
      features: ["Diamond Segments", "Wet/Dry Use", "Precision Cutting"],
      price: "$85"
    }
  ];

  const categoryColors: Record<string, string> = {
    "Masonry & Concrete": "bg-orange-100 text-orange-800"
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-surface-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold">Our Products</h1>
              <p className="text-xl text-muted-foreground">
                Professional diamond cutting blades engineered for precision, 
                performance, and durability in concrete and masonry applications.
              </p>
              <Button asChild variant="hero" size="lg" className="group">
                <Link to="/contact">
                  Request Custom Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={sawBlades} 
                alt="Professional saw blades collection" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Product Range</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional cutting solutions for many applications and industry requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="border border-border hover-lift group">
                <CardHeader>
                  <div className="space-y-3">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <Badge className={categoryColors[product.category] || "bg-gray-100 text-gray-800"}>
                      {product.category}
                    </Badge>
                    <p className="text-muted-foreground text-sm">{product.description}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Size:</h4>
                    <Badge variant="outline" className="text-sm">
                      {product.size}
                    </Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="font-semibold text-primary">{product.price}</span>
                    <Button asChild variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Link to="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* More Coming Soon */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-lg px-6 py-3">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary font-medium">More products coming soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-surface-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Custom Solutions Available</h2>
            <p className="text-xl text-muted-foreground">
              Need something specific? We offer custom cutting solutions tailored to your exact requirements. 
              Our team works with you to develop the perfect tool for your application.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "Custom Sizes",
                "Special Materials", 
                "Unique Specifications"
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Discuss Custom Requirements</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from satisfied customers who trust our cutting solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mike Thompson",
                company: "Thompson Construction Ltd.",
                location: "Toronto, ON",
                rating: 5,
                review: "The 14-inch diamond blade has been a game-changer for our concrete cutting projects. Clean cuts every time and lasts much longer than other brands we've tried."
              },
              {
                name: "Sarah Chen",
                company: "Precision Masonry",
                location: "Vancouver, BC", 
                rating: 5,
                review: "Excellent quality and great customer service. The 7¼ inch blade is perfect for our stone work. Highly recommend AshCam for any masonry cutting needs."
              },
              {
                name: "David Rodriguez",
                company: "Rodriguez Renovations",
                location: "Montreal, QC",
                rating: 5,
                review: "Fast delivery and the 6½ inch blade works perfectly for tight spaces. Great value for money and the precision is exactly what we needed for our renovation projects."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border border-border hover-lift">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Rating Stars */}
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    {/* Review Text */}
                    <p className="text-muted-foreground italic">
                      "{testimonial.review}"
                    </p>
                    
                    {/* Customer Info */}
                    <div className="pt-4 border-t border-border">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Ready to Order?</h2>
            <p className="text-xl opacity-90">
              Contact our team for expert advice, detailed specifications, and competitive pricing on all products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">Get Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-primary-foreground border-2 border-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary">
                <Link to="/gallery">View Gallery</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;