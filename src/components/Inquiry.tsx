
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Inquiry = () => {
  return (
    <section className="w-full bg-primary py-24 text-white">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Secure Your Legacy
          </span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl">
            Begin the Inquiry
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-white/70">
            We are highly selective with our placements. Please provide detail regarding your lifestyle and experience with the breed.
          </p>
        </div>

        <form className="space-y-8 rounded-none border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-sm">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs uppercase tracking-widest text-accent">
                Full Name
              </label>
              <Input
                id="name"
                className="h-12 border-white/20 bg-transparent text-white placeholder:text-white/30 focus-visible:ring-accent rounded-none"
                placeholder="Jane Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs uppercase tracking-widest text-accent">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                className="h-12 border-white/20 bg-transparent text-white placeholder:text-white/30 focus-visible:ring-accent rounded-none"
                placeholder="jane@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-xs uppercase tracking-widest text-accent">
              Tell us about yourself
            </label>
            <Textarea
              id="message"
              className="min-h-[150px] border-white/20 bg-transparent text-white placeholder:text-white/30 focus-visible:ring-accent rounded-none"
              placeholder="Your experience with bulldogs, home environment, etc."
            />
          </div>

          <div className="flex justify-end">
            <Button
              type="button"
              className="h-14 bg-accent px-10 text-primary hover:bg-white hover:text-primary rounded-none uppercase tracking-widest font-bold"
            >
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Inquiry;
