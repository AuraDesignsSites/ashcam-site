import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ServiceAreas from "@/components/ServiceAreas";
import { ServiceAreasSeo } from "@/lib/seo";
import { serviceLd } from "@/lib/StructuredData";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock, Truck } from "lucide-react";

const ServiceAreasPage = () => {
  return (
    <Layout>
      <ServiceAreasSeo />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-surface-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              AshCam Cutting Solutions Service Areas — Toronto & GTA
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We deliver premium T.C.T cutting tools and provide expert support across Toronto, Vaughan, Markham, Richmond Hill, Mississauga, Brampton, and throughout the Greater Toronto Area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/products">
                  View Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <ServiceAreas />

      {/* Coverage Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose AshCam for Your Area?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast Local Delivery</h3>
                <p className="text-muted-foreground">
                  Quick delivery to Toronto, Vaughan, Markham, and surrounding GTA communities.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
                <p className="text-muted-foreground">
                  Deep knowledge of Toronto construction projects and local cutting requirements.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Extended Hours</h3>
                <p className="text-muted-foreground">
                  Available 7 AM to 10 PM to support your project timelines across the GTA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Contact us today for a quote or technical advice. We serve all areas across Toronto and the GTA.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceAreasPage;
