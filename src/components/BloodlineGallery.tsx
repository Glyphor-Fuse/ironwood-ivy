
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const dogs = [
  {
    name: "Sir Barnaby",
    title: "The Patriarch",
    image: "/images/sire-1.jpg",
    stats: ["OFA Hips: Good", "Elbows: Normal", "HUmp: Clear"],
    lineage: "Ironwood Prime x Ivy Rose",
  },
  {
    name: "Lady Clementine",
    title: "Matriarch",
    image: "/images/dam-1.jpg",
    stats: ["OFA Hips: Excellent", "Heart: Normal", "Cystinuria: Clear"],
    lineage: "Royal Oak Duke x Duchess of York",
  },
  {
    name: "Duke Wellington",
    title: "Junior Sire",
    image: "/images/sire-2.jpg",
    stats: ["OFA Prelims: Good", "Eyes: Clear", "Trachea: Normal"],
    lineage: "Sir Barnaby x Lady Beatrice",
  },
  {
    name: "Duchess Eloise",
    title: "Future Hope",
    image: "/images/dam-2.jpg",
    stats: ["Genetic Panel: Clear", "Patellas: Normal", "Thyroid: Normal"],
    lineage: "Import UK x Ironwood Star",
  },
];

const BloodlineGallery = () => {
  return (
    <section className="w-full bg-secondary/5 py-24">
      <div className="container mx-auto mb-12 px-6">
        <h2 className="font-serif text-4xl text-primary md:text-5xl">
          Meet the Bloodline
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Hover over a portrait to reveal the technical health certifications and pedigree data that define our standard of excellence.
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="hide-scrollbar flex w-full gap-6 overflow-x-auto px-6 pb-12 pt-4 md:px-12">
        {dogs.map((dog, index) => (
          <div
            key={index}
            className="group relative h-[500px] w-[350px] flex-shrink-0 cursor-pointer overflow-hidden border border-primary/20 bg-background transition-all duration-500 hover:border-primary"
          >
            {/* Image Layer */}
            <div className="absolute inset-0 h-full w-full transition-all duration-700 group-hover:scale-110 group-hover:opacity-40">
              <img
                src={dog.image}
                alt={dog.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/80" />
            </div>

            {/* Default Label (Bottom Left) */}
            <div className="absolute bottom-0 left-0 w-full bg-background/90 p-6 backdrop-blur-sm transition-transform duration-500 group-hover:translate-y-full">
              <p className="font-serif text-2xl text-primary">{dog.name}</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {dog.title}
              </p>
            </div>

            {/* Hover Content (Centered) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <h3 className="mb-2 font-serif text-3xl text-white">{dog.name}</h3>
              <p className="mb-6 text-sm font-medium uppercase tracking-widest text-accent">
                {dog.lineage}
              </p>
              
              <div className="flex flex-wrap justify-center gap-2">
                {dog.stats.map((stat, i) => (
                  <Badge 
                    key={i} 
                    variant="outline" 
                    className="border-accent text-accent bg-transparent rounded-none px-3 py-1"
                  >
                    {stat}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BloodlineGallery;
