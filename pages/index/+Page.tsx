import Hero from "../../components/home/Hero";
import Metrics from "../../components/home/Metrics";
import Expertise from "../../components/home/Expertise";
import Approach from "../../components/home/Approach";
import AIJoule from "../../components/home/AIJoule";
import Delivery from "../../components/home/Delivery";
import Grow from "../../components/home/Grow";
import CFO from "../../components/home/CFO";
import Industries from "../../components/home/Industries";
import Contact from "../../components/home/Contact";
import SiteFooter from "../../components/layout/SiteFooter";

export default function Page() {
  return (
    <main id="main-content" className="kw-site">
      <Hero />
      <Expertise />
      <Metrics />
      <Approach />
      <AIJoule />
      <Delivery />
      <Grow />
      <CFO />
      <Industries />
      <Contact />
      <SiteFooter />
    </main>
  );
}
