
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bulldog.jpg"
          alt="Majestic Bulldog in rustic setting"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <span className="mb-4 text-sm font-medium tracking-[0.2em] uppercase text-accent">
          Est. 2014 • North America
        </span>
        <h1 className="mb-6 max-w-4xl font-serif text-5xl leading-tight md:text-7xl lg:text-8xl">
          Ironwood <span className="text-accent italic">&</span> Ivy
        </h1>
        <p className="mb-10 max-w-lg text-lg font-light tracking-wide text-white/90">
          Guardians of the lineage. Purveyors of the finest canine companions, bred for health, temperament, and legacy.
        </p>
        <Button 
          variant="outline" 
          className="h-12 border-white px-8 text-white hover:bg-white hover:text-primary rounded-none uppercase tracking-widest transition-all duration-300"
        >
          View The Bloodline
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <ArrowDown className="h-6 w-6 opacity-70" />
      </div>
    </section>
  );
};

export default Hero;
