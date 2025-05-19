
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rules from "@/components/Rules";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Register from "@/components/Register";
import Downloads from "@/components/Downloads";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Rules />
      <Events />
      <Gallery />
      <Downloads />
      <Register />
      <Footer />
    </div>
  );
};

export default Index;
