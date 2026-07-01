import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import FeatureStrip from "@/components/FeatureStrip";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <ProductGrid />
      <FeatureStrip />
      <WhyUs />
      <About />
      <Testimonials />
      <OrderSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
