
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Philosophy from "@/components/Philosophy";
import BloodlineGallery from "@/components/BloodlineGallery";
import Inquiry from "@/components/Inquiry";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background font-sans selection:bg-accent selection:text-primary">
      <Navbar />
      <Hero />
      <Philosophy />
      <BloodlineGallery />
      <Inquiry />
      <Footer />
    </main>
  );
};

export default Index;
