
import { useState, useEffect } from 'react';
import { AlbumCard } from '@/components/AlbumCard';
import { albums } from '@/data/albums';

export function AlbumGrid() {
  const [loading, setLoading] = useState(true);
  
  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container max-w-6xl px-4 sm:px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          // Skeleton loaders
          Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="aspect-square rounded-lg bg-muted/30 animate-pulse">
              <div className="w-full h-3/4 bg-muted/40 rounded-t-lg"></div>
              <div className="p-4 space-y-3">
                <div className="h-5 bg-muted/40 rounded-md w-4/5"></div>
                <div className="h-4 bg-muted/40 rounded-md w-3/5"></div>
                <div className="h-9 bg-muted/40 rounded-md w-full mt-4"></div>
              </div>
            </div>
          ))
        ) : (
          // Actual album cards
          albums.map((album) => (
            <div key={album.id} className="aspect-square">
              <AlbumCard album={album} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
