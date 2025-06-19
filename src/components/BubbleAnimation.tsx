'use client';

import { useEffect, useRef } from 'react';

export default function BubbleAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function createBubble() {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");

      // Random size between 20px and 80px
      const size = Math.random() * 60 + 20;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      // Random starting position
      const startPosition = Math.random() * 100;
      bubble.style.left = `${startPosition}%`;

      // Random animation duration
      const duration = Math.random() * 15 + 10;
      bubble.style.setProperty("--random-offset", Math.random() * 360 + "deg");

      // Apply the animation
      bubble.style.animation = `float ${duration}s linear infinite`;

      // Array of Tailwind color classes - Blue-ish range only
      const colors = [
        "bg-blue-200",
        "bg-blue-300",
        "bg-blue-400",
        "bg-cyan-200",
        "bg-cyan-300",
        "bg-sky-200",
        "bg-sky-300",
        "bg-indigo-200",
        "bg-indigo-300",
      ];

      // Initial color
      bubble.classList.add(colors[Math.floor(Math.random() * colors.length)]);

      // Change color every 2 seconds
      const colorInterval = setInterval(() => {
        bubble.classList.remove(...colors);
        bubble.classList.add(colors[Math.floor(Math.random() * colors.length)]);
      }, 2000);

      // Add bubble to container
      if (container) {
        container.appendChild(bubble);
      }

      // Remove bubble after animation completes
      setTimeout(() => {
        if (bubble.parentNode) {
          bubble.remove();
        }
        clearInterval(colorInterval);
      }, duration * 1000);
    }

    // Create initial set of bubbles
    for (let i = 0; i < 10; i++) {
      createBubble();
    }

    // Continue creating bubbles every 300ms
    const interval = setInterval(createBubble, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
} 