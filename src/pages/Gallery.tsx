import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

const Gallery = () => {
  // Mock gallery data - in a real application, these would be actual project images
  const projects = [
    {
      title: "Precision Woodworking Project",
      category: "Woodworking",
      description: "High-precision cuts for custom furniture manufacturing using our premium circular saw blades.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop&crop=center",
      tools: ["184mm Circular Blade", "Fine Finish Blade"]
    },
    {
      title: "Industrial Metal Fabrication",
      category: "Metalwork",
      description: "Heavy-duty metal cutting for industrial construction applications.",
      image: "https://images.unsplash.com/photo-1565843708714-1d20842d9d78?w=600&h=400&fit=crop&crop=center",
      tools: ["Metal Cutting Blade", "HSS Construction"]
    },
    {
      title: "Concrete & Masonry Work",
      category: "Construction",
      description: "Professional masonry cutting using diamond blades for clean, precise results.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&crop=center",
      tools: ["Diamond Blade", "230mm Size"]
    },
    {
      title: "Custom Cabinetry Project",
      category: "Woodworking",
      description: "Intricate cabinet work requiring multiple cutting techniques and blade types.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center",
      tools: ["Multi-Purpose Blade", "Fine Finish Blade"]
    },
    {
      title: "Structural Steel Cutting",
      category: "Industrial",
      description: "Large-scale structural steel cutting for commercial construction projects.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&crop=center",
      tools: ["Heavy Duty Blade", "450mm Size"]
    },
    {
      title: "Artistic Metalwork",
      category: "Artistic",
      description: "Detailed artistic metalwork requiring precision and clean finish cuts.",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop&crop=center",
      tools: ["Precision Blade", "Fine Finish"]
    }
  ];

  const categoryColors: Record<string, string> = {
    "Woodworking": "bg-amber-100 text-amber-800",
    "Metalwork": "bg-slate-100 text-slate-800",
    "Construction": "bg-orange-100 text-orange-800",
    "Industrial": "bg-red-100 text-red-800",
    "Artistic": "bg-purple-100 text-purple-800"
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-surface-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold">Project Gallery</h1>
            <p className="text-xl text-muted-foreground">
              Showcasing the quality and precision achieved with our cutting tools across various applications and industries.
            </p>
            <Button asChild variant="hero" size="lg" className="group">
              <Link to="/products">
                View Our Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-world applications demonstrating the performance and versatility of our cutting solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border border-border hover-lift group overflow-hidden">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Badge 
                    className={`absolute top-3 left-3 ${categoryColors[project.category] || "bg-gray-100 text-gray-800"}`}
                  >
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div>
                    <h4 className="font-medium mb-2 text-sm">Tools Used:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tools.map((tool, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <ExternalLink className="h-3 w-3 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-surface-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <blockquote className="text-2xl font-medium text-foreground">
              "AshCam's cutting tools have consistently delivered the precision and reliability we need for our most demanding projects. Their expertise and product quality are unmatched in the industry."
            </blockquote>
            <div className="space-y-2">
              <p className="font-semibold">Sarah Mitchell</p>
              <p className="text-muted-foreground">Senior Project Manager, Precision Manufacturing Ltd.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Start Your Next Project</h2>
            <p className="text-xl opacity-90">
              Ready to achieve similar results? Contact us to discuss your cutting requirements and get expert recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/products">Browse Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;