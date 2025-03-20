import Accesories from "@/components/Accesories";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import Brand from "@/components/Brand";
import Hero from "@/components/Hero";
import Incentives from "@/components/Incentives";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Brand />
      <Products />
      <Incentives />
      <Accesories />
      <Footer />
    </div>
  );
}
