
const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-primary/10 py-12 md:py-16">
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <div className="text-center md:text-left">
          <h3 className="font-serif text-2xl font-bold text-primary">Ironwood & Ivy</h3>
          <p className="mt-2 text-sm text-muted-foreground">Est. 2014 • North America</p>
        </div>
        
        <nav className="flex gap-8">
          {["Philosophy", "Bloodline", "Puppies", "Journal"].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-sm font-medium uppercase tracking-widest text-primary/70 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="text-center md:text-right">
          <p className="text-xs text-muted-foreground">© 2024 Ironwood & Ivy.</p>
          <p className="text-xs text-muted-foreground">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
