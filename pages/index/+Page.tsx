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

export default function Page() {
  return (
    <main id="main-content">
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
    </main>
  );
}
