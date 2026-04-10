import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-electric-cyan rounded-full pointer-events-none z-50 mix-blend-screen"
      style={{
        transform: "translate(-50%, -50%)",
        boxShadow: "0 0 10px 2px rgba(0, 245, 255, 0.8)",
      }}
    />
  );
};

export default CustomCursor;
