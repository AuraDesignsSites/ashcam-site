import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, X, Play } from "lucide-react";
import Layout from "@/components/Layout";
import LazyImage from "@/components/LazyImage";
import { GallerySeo } from "@/lib/seo";
import { useState } from "react";
import sixAndHalfBlade from "@/assets/diamond-blade-6.5-inch.png";
import sevenAndQuarterBlade from "@/assets/diamond-blade-7.25-inch.png";
import fourteenInchBlade from "@/assets/diamond-blade-14-inch.png";
import stockPhoto1 from "@/assets/stock-photo1.png";
import stockPhoto2 from "@/assets/stock-photo2.jpg";
import stockPhoto3 from "@/assets/stock-photo3.jpg";
import stockPhoto4 from "@/assets/stock-photo4.png";
import stockPhoto5 from "@/assets/stock-photo5.jpg";
import stockPhoto6 from "@/assets/stock-photo6.jpg";
import stockBlade1 from "@/assets/stock-blade1.png";
import stockBlade2 from "@/assets/stock-blade2.jpeg";
import stockVideo1 from "@/assets/stock-video1.mov";
import stockVideo2 from "@/assets/stock-video2.mov";


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ title: string; image: string } | null>(null);
  const [video1Playing, setVideo1Playing] = useState(false);
  const [video2Playing, setVideo2Playing] = useState(false);

  // Product gallery images - showcasing the actual T.C.T cutting blades
  const productImages = [
    {
      title: "Professional Work Environment",
      description: "Our team working with precision T.C.T cutting blades in Toronto construction environments",
      category: "Work Environment",
      image: stockPhoto1
    },
    {
      title: "Industrial Cutting Operations",
      description: "Heavy-duty cutting operations using our high-performance T.C.T blades for steel and concrete",
      category: "Industrial Operations",
      image: stockPhoto2
    },
    {
      title: "High-Quality Results",
      description: "Clean, precise cuts achieved with our professional-grade T.C.T cutting tools",
      category: "Quality Results",
      image: stockPhoto3
    },
    {
      title: "Concrete Cutting Excellence",
      description: "Specialized concrete cutting applications across Toronto construction sites",
      category: "Concrete Cutting",
      image: stockPhoto4
    },
    {
      title: "Advanced Cutting Technology",
      description: "State-of-the-art T.C.T blade technology for maximum efficiency and durability",
      category: "Technology",
      image: stockPhoto5
    },
    {
      title: "Precision Engineering",
      description: "Engineered for precision cutting across metals, aluminum, and wood applications",
      category: "Engineering",
      image: stockPhoto6
    },
    {
      title: "6½ Inch T.C.T Blade",
      description: "Compact 6½ inch T.C.T blade perfect for detailed cutting work and tight spaces",
      category: "Product Showcase",
      image: sixAndHalfBlade
    },
    {
      title: "7¼ Inch T.C.T Blade", 
      description: "Versatile 7¼ inch T.C.T blade ideal for general construction and renovation projects",
      category: "Product Showcase",
      image: sevenAndQuarterBlade
    },
    {
      title: "14 Inch T.C.T Blade",
      description: "Heavy-duty 14 inch T.C.T blade for large-scale industrial cutting operations",
      category: "Product Showcase",
      image: fourteenInchBlade
    },
    {
      title: "Professional T.C.T Blade Collection",
      description: "Complete range of T.C.T cutting blades for all construction and industrial needs",
      category: "Product Collection",
      image: stockBlade1
    },
    {
      title: "High-Quality Cutting Blade",
      description: "Premium T.C.T blade construction ensuring long-lasting performance and clean cuts",
      category: "Quality Focus",
      image: stockBlade2
    }
  ];

  // Remove categorization to maintain clean 3x3 grid

  return (
    <Layout>
      <GallerySeo />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-surface-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold">AshCam Cutting Solutions Gallery</h1>
            <p className="text-xl text-muted-foreground">
              Explore our premium T.C.T cutting blades in detail. See the quality, precision, and performance that sets AshCam apart across <Link to="/service-areas" className="text-primary hover:underline">Toronto & GTA</Link>.
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

      {/* Video Section */}
      <section className="py-20 bg-warm-off-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">See Our Tools in Action</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Watch our T.C.T cutting blades perform in real-world applications. Experience the precision and quality that sets AshCam Cutting Solutions apart.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative group">
              <video
                src={stockVideo1}
                className="w-full h-96 rounded-lg shadow-lg object-cover"
                controls
                preload="metadata"
                poster=""
                width={800}
                height={384}
                aria-label="T.C.T cutting blade demonstration video"
                onPlay={() => setVideo1Playing(true)}
                onPause={() => setVideo1Playing(false)}
                onEnded={() => setVideo1Playing(false)}
              >
                Your browser does not support the video tag.
              </video>
              {!video1Playing && (
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    const video = e.currentTarget.parentElement?.querySelector('video') as HTMLVideoElement;
                    if (video) {
                      video.play();
                    }
                  }}
                >
                  <div className="bg-black/50 rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative group">
              <video
                src={stockVideo2}
                className="w-full h-96 rounded-lg shadow-lg object-cover"
                controls
                preload="metadata"
                poster=""
                width={800}
                height={384}
                aria-label="Professional cutting tools demonstration video"
                onPlay={() => setVideo2Playing(true)}
                onPause={() => setVideo2Playing(false)}
                onEnded={() => setVideo2Playing(false)}
              >
                Your browser does not support the video tag.
              </video>
              {!video2Playing && (
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    const video = e.currentTarget.parentElement?.querySelector('video') as HTMLVideoElement;
                    if (video) {
                      video.play();
                    }
                  }}
                >
                  <div className="bg-black/50 rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our T.C.T Cutting Blades in Action</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive collection of T.C.T cutting blades through real-world applications, 
              product showcases, and quality results across Toronto construction sites and industrial operations.
            </p>
          </div>
          
          {/* Clean 3x3 Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productImages.map((product, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg border border-border hover-lift cursor-pointer bg-background"
                onClick={() => {
                  setSelectedImage(product);
                }}
              >
                <LazyImage 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 group-hover:scale-105 transition-transform duration-300"
                  placeholder="Loading image..."
                  width={400}
                  height={256}
                />
                <div className="p-4">
                  <h4 className="font-semibold mb-2 text-foreground">{product.title}</h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white">Ready to Order?</h2>
            <p className="text-xl text-white/90">
              Contact us for expert advice, detailed specifications, and competitive pricing on our T.C.T cutting blades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">Get Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
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
          onClick={() => {
            setSelectedImage(null);
          }}
        >
          <div className="relative max-w-7xl max-h-full">
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
              width={800}
              height={600}
            />
            <>
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
            </>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;