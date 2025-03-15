
import { AlbumGrid } from '@/components/AlbumGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="container max-w-6xl px-4 sm:px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-medium tracking-tight">Vinyl Haven</h1>
          <nav className="flex gap-6">
            <a href="#" className="text-sm hover:text-primary/80 transition-colors">Home</a>
            <a href="#" className="text-sm hover:text-primary/80 transition-colors">New Releases</a>
            <a href="#" className="text-sm hover:text-primary/80 transition-colors">Genres</a>
            <a href="#" className="text-sm hover:text-primary/80 transition-colors">About</a>
          </nav>
        </div>
      </header>
      
      <main className="py-8">
        <section className="container max-w-6xl px-4 sm:px-6 mb-12 text-center">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium bg-primary/10 text-primary rounded-full">Collection</span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Discover Timeless Albums</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">Explore our handpicked selection of iconic albums that defined generations. Each album comes with detailed information and track listings.</p>
        </section>
        
        <AlbumGrid />
      </main>
      
      <footer className="bg-secondary py-8 border-t">
        <div className="container max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2023 Vinyl Haven. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
