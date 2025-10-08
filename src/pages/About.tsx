import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Target, Users, Trophy, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { AboutSeo } from "@/lib/seo";
import { getLastUpdatedDate, formatLastUpdated } from "@/lib/utils";

const About = () => {
  return <Layout>
      <AboutSeo />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-surface-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold">About AshCam Cutting Solutions</h1>
            <p className="text-xl text-muted-foreground">
              Delivering precision cutting solutions across Toronto and the GTA with unwavering commitment to quality and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* About AshCam Cutting Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12">
              <div className="text-center space-y-6 mb-8">
                <h2 className="text-4xl font-bold text-primary">Our Company Story</h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
              </div>
              
              <div className="prose prose-lg max-w-none text-center space-y-6">
                <p className="text-lg leading-relaxed text-foreground">
                  Since 1964, AshCam Cutting Solutions Limited has been Toronto's premier supplier of premium-quality T.C.T (Tungsten Carbide Tipped) cutting blades and industrial cutting tools. With over 60 years of experience, we've established ourselves as the trusted partner for construction companies, contractors, and industrial operations across the Greater Toronto Area.
                </p>
                <p className="text-lg leading-relaxed text-foreground">
                  Our deep expertise spans concrete cutting, metal fabrication, woodworking, and specialized industrial applications. We understand the unique challenges of Toronto's construction seasons and provide solutions that deliver consistent performance in our demanding climate, from winter concrete work to summer high-volume projects.
                </p>
                <p className="text-lg leading-relaxed text-foreground">
                  We pride ourselves on delivering solutions that not only meet but exceed our customers' expectations, sourcing only the best materials and testing every product to meet North American standards. Our commitment to local service and expert knowledge has made us the go-to choice for cutting tools across Toronto and the GTA.
                </p>
              </div>
              
              {/* Expertise Areas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                <div className="bg-background/50 p-4 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-primary mb-2">Concrete Cutting</h3>
                  <p className="text-sm text-muted-foreground">Specialized expertise in concrete sawing, demolition, and precision cutting for Toronto construction projects.</p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-primary mb-2">Metal Fabrication</h3>
                  <p className="text-sm text-muted-foreground">High-performance T.C.T blades for steel, aluminum, and metal cutting applications across the GTA.</p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-primary mb-2">Industrial Solutions</h3>
                  <p className="text-sm text-muted-foreground">Custom cutting solutions for large-scale industrial operations and specialized manufacturing needs.</p>
                </div>
                <div className="bg-background/50 p-4 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-primary mb-2">Local Expertise</h3>
                  <p className="text-sm text-muted-foreground">Deep understanding of Toronto construction seasons, regulations, and project timelines.</p>
                </div>
              </div>
              
              {/* Last Updated */}
              <div className="text-center mt-8 pt-6 border-t border-primary/20">
                <p className="text-sm text-muted-foreground">{formatLastUpdated(getLastUpdatedDate())}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-warm-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
            icon: Target,
            title: "Precision",
            description: "We deliver cutting tools engineered for exact specifications and consistent performance in demanding applications."
          }, {
            icon: Users,
            title: "Customer Focus",
            description: "Our customers' success is our priority. We provide expert guidance and support throughout your project lifecycle."
          }, {
            icon: Trophy,
            title: "Excellence",
            description: "We maintain the highest standards in product quality, service delivery, and professional expertise."
          }].map((value, index) => <Card key={index} className="border border-border hover-lift">
                <CardContent className="p-8 text-center space-y-4">
                  <value.icon className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To bring high-quality cutting solutions to Canadians at affordable prices while maintaining 
              unwavering reliability. We believe that professional-grade cutting tools should be accessible 
              to every contractor, craftsman, and business owner across <Link to="/service-areas" className="text-primary hover:underline">Toronto and the GTA</Link>, without compromising on 
              quality or performance.
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
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white">Ready to Work With Us?</h2>
            <p className="text-xl text-white/90">
              Get in touch to discuss your cutting tool requirements and discover how we can help your business succeed.
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
};
export default About;