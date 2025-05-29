
import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import Register from "@/components/Register";
import Downloads from "@/components/Downloads";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Gallery />
      <Downloads />
      <Register />
      <Footer />
    </div>
  );
};

export default Index;
