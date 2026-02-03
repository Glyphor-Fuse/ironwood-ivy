
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/95 backdrop-blur-md py-4 border-primary/10 text-primary"
          : "bg-transparent py-6 border-transparent text-white"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="font-serif text-2xl font-bold tracking-tight">
          I&I
        </div>

        <nav className="hidden md:flex gap-8">
          {["Philosophy", "Bloodline", "Available", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs font-bold uppercase tracking-[0.15em] hover:opacity-70 transition-opacity"
            >
              {item}
            </a>
          ))}
        </nav>

        <Button 
            variant="outline" 
            className={cn(
                "hidden md:inline-flex rounded-none uppercase tracking-widest text-xs h-10 px-6",
                isScrolled ? "border-primary text-primary hover:bg-primary hover:text-white" : "border-white text-white hover:bg-white hover:text-primary"
            )}
        >
            Inquire
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
