import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import About from "@/components/About";
import Services from "@/components/Services";
import Call from "@/components/Call";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import BasicSlider from "@/components/Hero2";
import Products from "@/components/Products";
import Functionality from "@/components/Functionality";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="main">
        <Featured />
        <About />
        <Products/>
        <Functionality/>
+        <Call />
        <Features />
        <Pricing />
        {/* <Testimonials /> */}
        <Faq />
      </main>
    </>
  );
}
