import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, RotateCcw } from "lucide-react";
import Layout from "@/components/Layout";
import LazyImage from "@/components/LazyImage";
import { Seo } from "@/lib/seo";
import { useState } from "react";
import sawBlades from "@/assets/diamond-blade-collection.png";
import sixAndHalfBlade from "@/assets/diamond-blade-6.5-inch.png";
import sevenAndQuarterBlade from "@/assets/diamond-blade-7.25-inch.png";
import fourteenInchBlade from "@/assets/stock-photo1.png";

const Products = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const products = [
    {
      name: "Diamond Blade Cutting Disc",
      categories: ["Masonry & Concrete", "Metals", "Tile & Wood"],
      description: "High-performance 6½ inch blade engineered for cutting concrete, stone, brick, masonry, steel, rebar, copper, aluminum, brass, ceramic tile, porcelain, marble, granite, and hardwood. Perfect for concrete slabs, metal fabrication, and flooring installation. Designed for durability and precision in compact cutting applications.",
      size: "6½ inches",
      features: ["Diamond Segments", "Wet/Dry Use", "Precision Cutting"],
      price: "Starting from $35",
      image: sixAndHalfBlade
    },
    {
      name: "Diamond Blade Cutting Disc",
      categories: ["Masonry & Concrete", "Metals", "Tile & Wood"], 
      description: "High-performance 7¼ inch blade engineered for cutting concrete, stone, brick, masonry, steel, rebar, copper, aluminum, brass, ceramic tile, porcelain, marble, granite, and hardwood. Ideal for stone countertops, pipe cutting, and countertop fabrication. Designed for durability and precision in medium-duty cutting applications.",
      size: "7¼ inches",
      features: ["Diamond Segments", "Wet/Dry Use", "Precision Cutting"],
      price: "Starting from $40",
      image: sevenAndQuarterBlade
    },
    {
      name: "Diamond Blade Cutting Disc",
      categories: ["Masonry & Concrete", "Metals", "Tile & Wood"],
      description: "High-performance 14 inch blade engineered for cutting concrete, stone, brick, masonry, steel, rebar, copper, aluminum, brass, ceramic tile, porcelain, marble, granite, and hardwood. Perfect for brick walls, structural steel work, and woodworking projects. Designed for durability and precision in heavy-duty cutting applications.",
      size: "14 inches",
      features: ["Diamond Segments", "Wet/Dry Use", "Precision Cutting"],
      price: "Starting from $85",
      image: fourteenInchBlade
    }
  ];

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const categoryColors: Record<string, string> = {
    "Masonry & Concrete": "bg-orange-100 text-orange-800",
    "Metals": "bg-gray-100 text-gray-800",
    "Tile & Wood": "bg-green-100 text-green-800"
  };

  // Generate Product schema for each product
  const productSchemas = products.map(product => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "category": product.categories.join(", "),
    "brand": {
      "@type": "Brand",
      "name": "AshCam Cutting Solutions"
    },
    "offers": {
      "@type": "Offer",
      "price": product.price.replace('Starting from $', ''),
      "priceCurrency": "CAD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "AshCam Cutting Solutions Ltd"
      }
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Size",
        "value": product.size
      },
      {
        "@type": "PropertyValue", 
        "name": "Features",
        "value": product.features.join(", ")
      },
      {
        "@type": "PropertyValue",
        "name": "Categories",
        "value": product.categories.join(", ")
      }
    ]
  }));

  return (
    <Layout>
      <Seo
        title="Diamond Cutting Blades — Toronto & GTA"
        description="Professional diamond cutting blades for concrete, masonry, metal, and tile cutting across Toronto, Vaughan, Markham, Richmond Hill, Mississauga, and Brampton."
        keywords={[
          "diamond cutting blades Toronto",
          "concrete saw blades GTA", 
          "metal cutting tools Vaughan",
          "diamond blades Markham",
          "cutting discs Richmond Hill",
          "steel cutting blades",
          "aluminum cutting tools",
          "tile cutting blades"
        ]}
        canonical="/products"
        structuredData={productSchemas}
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-surface-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold">Our Products</h1>
              <p className="text-xl text-muted-foreground">
                Professional diamond cutting blades engineered for precision, 
                performance, and durability in cutting concrete, masonry, metal, and tile applications across Toronto & GTA.
              </p>
              <Button asChild variant="hero" size="lg" className="group">
                <Link to="/contact">
                  Request Custom Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <LazyImage 
                src={sawBlades} 
                alt="Professional saw blades collection — Vaughan masonry work" 
                className="w-full rounded-lg shadow-lg"
                placeholder="Loading product collection..."
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
            {products.map((product, index) => {
              const isFlipped = flippedCards.has(index);
              const hasImage = product.image !== null;
              
              return (
                <div key={index} className="flip-card h-[520px]" onClick={() => hasImage && toggleFlip(index)}>
                  <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                    {/* Front of card */}
                    <div className="flip-card-front">
                      <Card className="border border-border hover-lift group h-full flex flex-col">
                        <CardHeader className="flex-shrink-0">
                          <div className="space-y-3">
                            <CardTitle className="text-lg">{product.name}</CardTitle>
                            <div className="flex flex-wrap gap-2 justify-center">
                              {product.categories.map((category, i) => (
                                <Badge key={i} className={categoryColors[category] || "bg-muted text-muted-foreground"}>
                                  {category}
                                </Badge>
                              ))}
                            </div>
                            <p className="text-muted-foreground text-sm">{product.description}</p>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col space-y-4">
                          <div className="text-left">
                            <h4 className="font-medium mb-2">Size:</h4>
                            <Badge variant="outline" className="text-sm">
                              {product.size}
                            </Badge>
                          </div>
                          
                          <div className="flex-1 min-h-0">
                            <h4 className="font-medium mb-2">Key Features:</h4>
                            <ul className="space-y-1">
                              {product.features.map((feature, i) => (
                                <li key={i} className="flex items-center text-sm text-muted-foreground">
                                  <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex justify-between items-center pt-4 border-t mt-auto">
                            <span className="font-semibold text-primary">{product.price}</span>
                            <div className="flex gap-2">
                              {hasImage && (
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="transition-colors"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleFlip(index);
                                  }}
                                >
                                  <RotateCcw className="h-3 w-3 mr-1" />
                                  View Image
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Back of card - Image */}
                    {hasImage && (
                      <div className="flip-card-back">
                        <Card className="border border-border h-full flex flex-col">
                          <div className="relative w-full h-full bg-background rounded-lg overflow-hidden p-6 flex flex-col">
                            <div className="flex-1 flex items-center justify-center">
                              <LazyImage 
                                src={product.image} 
                                alt={`${product.name} - ${product.size}`}
                                className="max-w-full max-h-full"
                                placeholder="Loading product image..."
                              />
                            </div>
                            <div className="absolute top-4 right-4">
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="bg-background/90 backdrop-blur-sm shadow-lg transition-colors"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleFlip(index);
                                }}
                              >
                                <RotateCcw className="h-3 w-3 mr-1" />
                                Back
                              </Button>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                                <h3 className="font-semibold text-sm">{product.name}</h3>
                                <p className="text-xs text-muted-foreground">{product.size}</p>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Get Quote Button */}
          <div className="mt-12 text-center">
            <Button asChild variant="hero" size="lg" className="group">
              <Link to="/contact">
                Get Quote for Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          
          {/* More Coming Soon */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-lg px-6 py-3">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary font-medium">More products coming soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-warm-off-white">
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
      <section className="py-20 bg-warm-off-white">
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
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white">Ready to Order?</h2>
            <p className="text-xl text-white/90">
              Contact our team for expert advice, detailed specifications, and competitive pricing on all products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">Get Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
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