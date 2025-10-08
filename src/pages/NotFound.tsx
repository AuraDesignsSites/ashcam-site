import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Seo } from "@/lib/seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <Seo
        title="Page Not Found — AshCam Cutting Solutions"
        description="The page you're looking for doesn't exist. Return to AshCam Cutting Solutions for premium T.C.T cutting tools across Toronto & GTA."
        canonical="/404"
        noindex={true}
      />
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:text-primary/80">
            Return to Home
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
