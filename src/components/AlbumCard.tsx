
import { useState, useRef, useEffect } from 'react';
import { Album } from '@/data/albums';
import { cn } from '@/lib/utils';

interface AlbumCardProps {
  album: Album;
}

export function AlbumCard({ album }: AlbumCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle card flip
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Handle click outside to flip back
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node) && isFlipped) {
        setIsFlipped(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFlipped]);

  // Handle image load
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div 
      ref={cardRef}
      className="album-card h-full w-full select-none"
    >
      <div 
        className={cn(
          "album-card-inner relative h-full w-full",
          isFlipped && "flipped"
        )}
      >
        {/* Front of card */}
        <div className="album-card-front absolute inset-0 flex flex-col rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white overflow-hidden">
          <div 
            className={cn(
              "image-wrapper flex-1 relative bg-muted/20",
              isImageLoaded && "image-loaded"
            )}
          >
            <img
              src={album.imageUrl}
              alt={`${album.title} by ${album.artist}`}
              className="w-full h-full object-cover"
              onLoad={handleImageLoad}
            />
            {!isImageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
              </div>
            )}
          </div>
          <div className="p-4 text-left">
            <h3 className="font-medium text-lg tracking-tight truncate">{album.title}</h3>
            <p className="text-muted-foreground text-sm">{album.artist}</p>
            <div className="flex justify-between items-center mt-3">
              <span className="font-medium">${album.price.toFixed(2)}</span>
              <button
                onClick={handleFlip}
                className="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-md transition-all duration-200 hover:bg-primary/90 active:scale-95"
              >
                Details
              </button>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="album-card-back absolute inset-0 rounded-lg shadow-md bg-white overflow-hidden">
          <div className="p-5 h-full flex flex-col">
            <div className="mb-4">
              <h3 className="font-medium text-lg tracking-tight">{album.title}</h3>
              <p className="text-muted-foreground">{album.artist} • {album.year}</p>
              <p className="text-xs text-muted-foreground mt-1">{album.genre}</p>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {album.description && (
                <p className="text-sm mb-4 text-muted-foreground">{album.description}</p>
              )}
              
              <h4 className="text-sm font-medium mb-2">Tracks</h4>
              <ul className="space-y-1">
                {album.tracks.map((track) => (
                  <li key={track.number} className="text-sm flex justify-between">
                    <span>{track.number}. {track.title}</span>
                    <span className="text-muted-foreground">{track.duration}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-4 pt-3 border-t border-border">
              <button
                onClick={handleFlip}
                className="w-full py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md transition-colors hover:bg-secondary/80 active:scale-95"
              >
                Back to cover
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
