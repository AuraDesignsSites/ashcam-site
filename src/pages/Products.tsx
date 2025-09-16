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
      name: "Circular Saw Blades",
      category: "Wood Cutting",
      description: "High-performance circular saw blades for precision woodworking applications.",
      sizes: ["184mm", "190mm", "216mm", "250mm", "300mm"],
      features: ["Carbide Tips", "Anti-Vibration", "Precision Ground"],
      price: "From £25"
    },
    {
      name: "Metal Cutting Blades",
      category: "Metal Working",
      description: "Specialized blades designed for cutting various metals with clean, precise cuts.",
      sizes: ["180mm", "200mm", "230mm", "255mm", "305mm"],
      features: ["HSS Construction", "Heat Resistant", "Long Lasting"],
      price: "From £35"
    },
    {
      name: "Diamond Blades",
      category: "Masonry",
      description: "Professional diamond blades for cutting concrete, stone, and masonry materials.",
      sizes: ["115mm", "125mm", "180mm", "230mm", "350mm"],
      features: ["Diamond Segments", "Wet/Dry Use", "Superior Life"],
      price: "From £45"
    },
    {
      name: "Multi-Purpose Blades",
      category: "Universal",
      description: "Versatile blades suitable for cutting multiple materials in various applications.",
      sizes: ["165mm", "184mm", "190mm", "216mm", "250mm"],
      features: ["Multi-Material", "Flexible Use", "Cost Effective"],
      price: "From £30"
    },
    {
      name: "Fine Finish Blades",
      category: "Precision",
      description: "Ultra-fine tooth blades for smooth, splinter-free cuts in delicate materials.",
      sizes: ["160mm", "184mm", "216mm", "250mm", "300mm"],
      features: ["Fine Teeth", "Smooth Cut", "Minimal Waste"],
      price: "From £40"
    },
    {
      name: "Heavy Duty Blades",
      category: "Industrial",
      description: "Robust blades engineered for demanding industrial cutting applications.",
      sizes: ["250mm", "300mm", "350mm", "400mm", "450mm"],
      features: ["Reinforced Core", "High Durability", "Professional Grade"],
      price: "From £60"
    }
  ];

  const categoryColors: Record<string, string> = {
    "Wood Cutting": "bg-amber-100 text-amber-800",
    "Metal Working": "bg-slate-100 text-slate-800",
    "Masonry": "bg-orange-100 text-orange-800",
    "Universal": "bg-green-100 text-green-800",
    "Precision": "bg-blue-100 text-blue-800",
    "Industrial": "bg-red-100 text-red-800"
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
                Comprehensive range of professional cutting tools engineered for precision, 
                performance, and durability across all applications.
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
              Professional cutting solutions for every application and industry requirement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="border border-border hover-lift group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <Badge className={categoryColors[product.category] || "bg-gray-100 text-gray-800"}>
                      {product.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">{product.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Available Sizes:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.sizes.map((size, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {size}
                        </Badge>
                      ))}
                    </div>
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
                    <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Get Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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
              <Button asChild variant="ghost" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
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