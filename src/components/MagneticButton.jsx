import { useRef, useEffect, useState } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

export default function MagneticButton({ children, className = '', onClick }) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const mousePos = useMousePosition();

  useEffect(() => {
    const handleMouseMove = () => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;

      const distX = mousePos.x - buttonCenterX;
      const distY = mousePos.y - buttonCenterY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      if (distance < 150) {
        // Magnetic pull strength
        const pullX = (distX / distance) * 20;
        const pullY = (distY / distance) * 20;

        setPosition({
          x: -pullX,
          y: -pullY,
        });
      } else {
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mousePos]);

  return (
    <button
      ref={buttonRef}
      className={className}
      onClick={onClick}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {children}
    </button>
  );
}
