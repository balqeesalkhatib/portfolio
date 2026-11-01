import React, { useEffect, useRef } from 'react';
import { trainingMedia } from '../../data/trainingMedia';

// Heading component with minimal title and subtitle
function Heading() {
  return (
    <div className="text-center mb-12">
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
        Training Highlights | Jordan University of Science and Technology (JUST)
      </h2>
      <p className="text-lg text-[var(--text-secondary)]">
        Center of Excellence for Innovative Projects
      </p>
    </div>
  );
}

// Auto‑play muted looping video using IntersectionObserver
function AutoPlayVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          // Autoplay blocked – retry when visible again
          console.warn('Autoplay blocked, will retry on visibility', err);
        });
      }
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            tryPlay();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(video);
    return () => {
      observer.unobserve(video);
    };
  }, []);

  const handleError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video failed to load/play:', src, e);
  };

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      onError={handleError}
      className="absolute inset-0 w-full h-full object-contain"
    />
  );
}

export function Training() {
  const images = trainingMedia.filter(m => m.type === 'image');
  const videos = trainingMedia.filter(m => m.type === 'video');

  return (
    <section id="training" className="bg-[var(--bg-primary)] py-12 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <Heading />
        {/* Images Row – 4:3 aspect ratio */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8">
          {images.map(item => (
            <div
              key={item.id}
              className="relative w-full aspect-[4/3] overflow-hidden rounded-xl"
            >
              <img
                src={item.src}
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
        {/* Videos Row – 16:9 aspect ratio */}
        <div className="flex justify-center gap-4 " >
          {videos.map(item => (
            <div
              key={item.id} 
              className="relative w-full md:w-[60%] lg:w-[60%] aspect-video overflow-hidden rounded-xl"
            >
              <AutoPlayVideo src={item.src} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
