import HeroSection from "./components/HomePage";
import AboutSection from "./components/AboutSection";
import CollectionSection from "./components/CollectionSection";
import MechinerySection from "./components/MechinerySection";
import VideoSection from "./components/VideoSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CollectionSection />
      <MechinerySection />
      <VideoSection />
      <Contact />
      <Footer />
    </>
  );
}
