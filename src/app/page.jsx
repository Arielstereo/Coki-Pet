import Accesories from "@/components/Accesories";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import Brand from "@/components/Brand";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <Brand />
      <Products />
      <Accesories />
      <Footer />
    </div>
  );
}
