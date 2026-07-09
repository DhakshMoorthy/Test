import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCTA from "@/components/layout/MobileCTA";
import InstagramTab from "@/components/layout/InstagramTab";
import LoadingScreen from "@/components/layout/LoadingScreen";
import SplitHero from "@/components/sections/SplitHero";
import WhyWrightfully from "@/components/sections/WhyWrightfully";
import Programs from "@/components/sections/Programs";
import Transformations from "@/components/sections/Transformations";
import Coach from "@/components/sections/Coach";
import Method from "@/components/sections/Method";
import Gallery from "@/components/sections/Gallery";
import Nutrition from "@/components/sections/Nutrition";
import Retreat from "@/components/sections/Retreat";
import Shop from "@/components/sections/Shop";
import InstagramFeed from "@/components/sections/InstagramFeed";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <main className="pb-20 lg:pb-0">
        <SplitHero />
        <WhyWrightfully />
        <Programs />
        <Transformations />
        <Coach />
        <Method />
        <Gallery />
        <Nutrition />
        <Retreat />
        <Shop />
        <InstagramFeed />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <InstagramTab />
      <MobileCTA />
    </>
  );
}
