import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Target, Users, Trophy, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
const About = () => {
  return <Layout>
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
                <h2 className="text-4xl font-bold text-primary">About AshCam Cutting Solutions</h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
              </div>
              
              <div className="prose prose-lg max-w-none text-center space-y-6">
                <p className="text-lg leading-relaxed text-foreground">
                  AshCam Cutting Solutions Limited is a trusted supplier of premium-quality cutting blades and tools designed for professionals in construction, woodworking, metalworking, and beyond. We focus on delivering durable, high-performance products that meet the demands of both small contractors and large-scale operations.
                </p>
                <p className="text-lg leading-relaxed text-foreground">
                  With precision, reliability, and value at the core of our business, AshCam ensures every cut is clean, efficient, and built to last. Our commitment to excellence has made us a trusted partner for businesses across various sectors, from woodworking and construction to manufacturing and engineering.
                </p>
                <p className="text-lg leading-relaxed text-foreground">
                  We pride ourselves on delivering solutions that not only meet but exceed our customers' expectations, sourcing only the best materials and testing every product to meet North American standards.
                </p>
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
              to every contractor, craftsman, and business owner across Canada, without compromising on 
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