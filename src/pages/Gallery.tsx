import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import Layout from "@/components/Layout";
import { useState } from "react";
import sixAndHalfBlade from "@/assets/diamond-blade-6.5-inch.png";
import sevenAndQuarterBlade from "@/assets/diamond-blade-7.25-inch.png";
import stockPhoto1 from "@/assets/stock-photo1.png";
import stockPhoto2 from "@/assets/stock-photo2.jpg";
import stockPhoto3 from "@/assets/stock-photo3.jpg";
import stockPhoto4 from "@/assets/stock-photo4.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ title: string; image: string } | null>(null);

  // Product gallery images - showcasing the actual diamond cutting blades
  const productImages = [
    {
      title: "14 Inch Diamond Blade",
      image: stockPhoto1
    },
    {
      title: "Diamond Blade in Action",
      image: stockPhoto2
    },
    {
      title: "Professional Quality",
      image: stockPhoto3
    },
    {
      title: "Concrete Cutting Results",
      image: stockPhoto4
    },
    {
      title: "6½ Inch Diamond Blade",
      image: sixAndHalfBlade
    },
    {
      title: "7¼ Inch Diamond Blade", 
      image: sevenAndQuarterBlade
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
              Explore our premium diamond cutting blades in detail. See the quality, precision, and performance that sets AshCam apart across Richmond Hill, Mississauga, and Brampton.
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
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg border border-border hover-lift cursor-pointer"
                onClick={() => setSelectedImage(product)}
              >
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

      {/* Full-screen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 text-center">
                <h3 className="text-white font-semibold text-lg">{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;