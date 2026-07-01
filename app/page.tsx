import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Founder from "@/components/Founder";
import Programs from "@/components/Programs";
import ShopMerch from "@/components/ShopMerch";
import Transformations from "@/components/Transformations";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";
import BlogPreview from "@/components/BlogPreview";
import Newsletter from "@/components/Newsletter";
import ContactBanner from "@/components/ContactBanner";
import Footer from "@/components/Footer";
import FloatingInstagramButton from "@/components/FloatingInstagramButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Founder />
        <Programs />
        <ShopMerch />
        <Transformations />
        <Testimonials />
        <InstagramFeed />
        <BlogPreview />
        <Newsletter />
        <ContactBanner />
      </main>
      <Footer />
      <FloatingInstagramButton />
    </>
  );
}
