// components/SimpleCarousel.tsx
'use client';

import { ReactNode, useRef } from 'react';

interface SimpleCarouselProps {
  children: ReactNode;
  className?: string;
}

export default function SimpleCarousel({ children, className = '' }: SimpleCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 
                 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm 
                 rounded-full w-12 h-12 flex items-center justify-center 
                 shadow-lg border border-gray-200 dark:border-gray-600
                 hover:scale-110 transition-all duration-300
                 ml-1"
      >
        ←
      </button>

      {/* Scroll Container - Reduced spacing */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto space-x-3 py-8 px-6 scrollbar-hide"        
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none'
        }}
      >
        {children}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 
                 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm 
                 rounded-full w-12 h-12 flex items-center justify-center 
                 shadow-lg border border-gray-200 dark:border-gray-600
                 hover:scale-110 transition-all duration-300
                 mr-1"
      >
        →
      </button>
    </div>
  );
}