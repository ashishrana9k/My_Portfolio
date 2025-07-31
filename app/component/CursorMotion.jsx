'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const tagName = e.target.tagName.toLowerCase();
      if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'img', 'button', 'a'].includes(tagName)) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      <motion.div
        className={`fixed rounded-full pointer-events-none z-[99] ${isHovering ? 'border border-white' : 'bg-white'
          }`}
        animate={{
          x: pos.x - (isHovering ? 50 : 10),
          y: pos.y - (isHovering ? 50 : 10),
          width: isHovering ? 100 : 20,
          height: isHovering ? 100 : 20,
          opacity: isHovering ? 1 : 1
        }}
        transition={{
          type: 'spring', stiffness: 500, damping: 25, mass: 1, restDelta: 0.01,
        }}
      />
    </>
  );
}
