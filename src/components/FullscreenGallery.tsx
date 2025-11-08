import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react'; // Assuming you have lucide-react or similar icons

interface FullscreenGalleryProps {
  images: { url: string }[];
  isOpen: boolean;
  onClose: () => void;
  initialImageIndex: number;
}

const FullscreenGallery: React.FC<FullscreenGalleryProps> = ({
  images,
  isOpen,
  onClose,
  initialImageIndex,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(initialImageIndex);

  useEffect(() => {
    // Update current index if initialImageIndex changes while open
    if (isOpen) {
      setCurrentIndex(initialImageIndex);
    }
  }, [initialImageIndex, isOpen]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      goToNext();
    } else if (event.key === 'ArrowLeft') {
      goToPrevious();
    } else if (event.key === 'Escape') {
      onClose();
    }
  }, [goToNext, goToPrevious, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling background
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = ''; // Restore scrolling
      window.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl z-50 p-2 rounded-full hover:bg-gray-700 transition-colors"
        aria-label="Close gallery"
      >
        <X size={32} />
      </button>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl z-50 p-2 rounded-full hover:bg-gray-700 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft size={48} />
      </button>

      {/* Image Display */}
      <div className="relative flex items-center justify-center h-full w-full max-w-screen-xl max-h-full">
        <img
          src={currentImage.url}
          alt={`Car image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl z-50 p-2 rounded-full hover:bg-gray-700 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight size={48} />
      </button>
    </div>
  );
};

export default FullscreenGallery;
