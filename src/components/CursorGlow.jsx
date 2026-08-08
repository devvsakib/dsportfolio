import { useEffect, useState, useContext } from 'react';
import { motion, useSpring } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';

const CursorGlow = () => {
  const { theme } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth physics springs for zero lag and fluid motion
  const cursorX = useSpring(0, { stiffness: 400, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 400, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // Detect clickable elements to scale up the glow cursor
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Disable ambient heavy glow in light theme for crisp visibility
  if (theme) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {/* Large Ambient Fluid Glow */}
      <motion.div
        className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          x: cursorX,
          y: cursorY,
          width: isHovered ? 600 : 450,
          height: isHovered ? 600 : 450,
          background: isHovered
            ? 'radial-gradient(circle, rgba(7, 197, 209, 0.12) 0%, rgba(173, 48, 250, 0.05) 50%, transparent 80%)'
            : 'radial-gradient(circle, rgba(7, 197, 209, 0.06) 0%, rgba(173, 48, 250, 0.03) 50%, transparent 80%)',
        }}
      />

      {/* Precise Cursor Ring */}
      <motion.div
        className="absolute border border-cyan-400/40 rounded-full -translate-x-1/2 -translate-y-1/2 hidden md:block"
        animate={{
          scale: isHovered ? 1.8 : 1,
          borderColor: isHovered ? 'rgba(7, 197, 209, 0.8)' : 'rgba(7, 197, 209, 0.3)',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
        style={{
          x: cursorX,
          y: cursorY,
          width: 32,
          height: 32,
        }}
      />
    </div>
  );
};

export default CursorGlow;