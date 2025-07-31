'use client';

import { useEffect } from 'react';

export default function ZoomBlocker() {
  useEffect(() => {
    const preventZoomScroll = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    const preventZoomKey = (e) => {
      if (e.ctrlKey && ['=', '-', '+', '0'].includes(e.key)) {
        e.preventDefault();
      }
    };

    const preventPinch = (e) => {
      e.preventDefault();
    };

    window.addEventListener('wheel', preventZoomScroll, { passive: false });
    window.addEventListener('keydown', preventZoomKey);
    window.addEventListener('gesturestart', preventPinch);
    window.addEventListener('gesturechange', preventPinch);
    window.addEventListener('gestureend', preventPinch);

    return () => {
      window.removeEventListener('wheel', preventZoomScroll);
      window.removeEventListener('keydown', preventZoomKey);
      window.removeEventListener('gesturestart', preventPinch);
      window.removeEventListener('gesturechange', preventPinch);
      window.removeEventListener('gestureend', preventPinch);
    };
  }, []);

  return null;
}
