import Hero from "../../components/home/Hero";
import Stats from "../../components/home/Stats";
import Solutions from "../../components/home/Solutions";
import Industries from "../../components/home/Industries";
import About from "../../components/home/About";
import Contact from "../../components/home/Contact";

export default function Page() {
  return (
    <main id="main-content">
      <Hero />
      <Stats />
      <Solutions />
      <Industries />
      <About />
      <Contact />
    </main>
  );
}
