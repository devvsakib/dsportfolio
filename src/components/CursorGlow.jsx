import { useEffect, useState, useContext } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';

const CursorGlow = () => {
  const { theme } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Physics springs for fluid movement
  const springX = useSpring(mouseX, { stiffness: 400, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

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
  }, [mouseX, mouseY]);

  const glowSize = isHovered ? 500 : 380;
  const ringSize = 32;

  // Theme-aware radial gradients
  const darkGlow = isHovered
    ? 'radial-gradient(circle, rgba(7, 197, 209, 0.12) 0%, rgba(173, 48, 250, 0.05) 50%, transparent 80%)'
    : 'radial-gradient(circle, rgba(7, 197, 209, 0.06) 0%, rgba(173, 48, 250, 0.03) 50%, transparent 80%)';

  const lightGlow = isHovered
    ? 'radial-gradient(circle, rgba(7, 197, 209, 0.05) 0%, rgba(133, 30, 237, 0.02) 50%, transparent 80%)'
    : 'radial-gradient(circle, rgba(7, 197, 209, 0.05) 0%, rgba(133, 30, 237, 0.02) 50%, transparent 80%)';

  return (
    <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
      {/* Ambient Glow Sphere */}
      <motion.div
        className="fixed top-0 left-0 rounded-full transition-[width,height] duration-300 ease-out"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          width: glowSize,
          height: glowSize,
          background: theme ? lightGlow : darkGlow,
        }}
      />

      {/* Center Focus Ring Indicator */}
      <motion.div
        className={`fixed top-0 left-0 border rounded-full hidden md:block transition-colors duration-300 ${
          theme
            ? 'border-cyan-600/50 bg-cyan-500/5'
            : 'border-cyan-400/40 bg-transparent'
        }`}
        animate={{
          scale: isHovered ? 1.8 : 1,
          borderColor: isHovered
            ? theme
              ? 'rgba(8, 145, 178, 0.8)'
              : 'rgba(7, 197, 209, 0.8)'
            : theme
            ? 'rgba(8, 145, 178, 0.4)'
            : 'rgba(7, 197, 209, 0.3)',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          width: ringSize,
          height: ringSize,
        }}
      />
    </div>
  );
};

export default CursorGlow;