import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const Gallery = () => {
  // Product gallery images - showcasing the actual diamond cutting blades
  const productImages = [
    {
      title: "6½ Inch Diamond Blade",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "7¼ Inch Diamond Blade", 
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "14 Inch Diamond Blade",
      image: "https://images.unsplash.com/photo-1565843708714-1d20842d9d78?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Diamond Blade in Action",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Professional Quality",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Concrete Cutting Results",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop&crop=center"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-surface-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold">Product Gallery</h1>
            <p className="text-xl text-muted-foreground">
              Explore our premium diamond cutting blades in detail. See the quality, precision, and performance that sets AshCam apart.
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

      {/* Product Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Diamond Cutting Blades</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              High-quality diamond cutting blades designed for concrete, stone, and masonry applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productImages.map((product, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg border border-border hover-lift">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Ready to Order?</h2>
            <p className="text-xl opacity-90">
              Contact us for expert advice, detailed specifications, and competitive pricing on our diamond cutting blades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">Get Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-primary-foreground border-2 border-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary">
                <Link to="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;