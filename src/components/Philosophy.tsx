
import { Separator } from "@/components/ui/separator";

const Philosophy = () => {
  return (
    <section className="w-full bg-background py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-primary/60">
                The Philosophy
              </span>
              <h2 className="font-serif text-4xl text-primary md:text-5xl lg:text-6xl">
                Breeding as an Art Form
              </h2>
            </div>
            <Separator className="bg-primary/20" />
            <div className="space-y-6 text-justify text-lg leading-relaxed text-muted-foreground font-sans">
              <p>
                At Ironwood & Ivy, we do not simply breed dogs; we curate a legacy. 
                Every pairing is a calculated decision, balanced on the razor's edge of 
                genetic diversity and phenotypic excellence. We believe that the 
                modern Bulldog should be as robust as it is regal.
              </p>
              <p>
                Our program is strictly organic, favoring natural rearing methods 
                paired with cutting-edge veterinary science. We raise our companions 
                on raw diets and open pastures, ensuring that when they leave our 
                care, they are prepared for a lifetime of adventure.
              </p>
            </div>
            <div className="pt-4">
              <span className="font-serif text-xl italic text-primary">
                — Eleanor Vance, Founder
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden border border-primary/10">
            <img
              src="/images/breeder-philosophy.jpg"
              alt="Breeder walking with dogs in a field"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
