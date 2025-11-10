import { useEffect, useState, useRef } from 'react';
import type { ReactNode } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function ImageModal({ isOpen, onClose, children }: ImageModalProps) {
  const [scale, setScale] = useState(2.5); // Default 250%
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (!isOpen) return;

      e.preventDefault();
      const delta = e.deltaY * -0.002; // More sensitive for larger range
      setScale((prev) => Math.min(Math.max(1, prev + delta), 8)); // 100% to 800%
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('wheel', handleWheel, { passive: false });
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('wheel', handleWheel);
      document.body.style.overflow = 'unset';
      setScale(2.5); // Reset to default 250% when closing
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div className="modal-zoom-indicator">
          滚动缩放 {Math.round(scale * 100)}%
        </div>
        <div className="modal-body" ref={contentRef}>
          <div style={{ transform: `scale(${scale})`, transition: 'transform 0.1s' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
