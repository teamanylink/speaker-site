import { useEffect, useRef, useState } from "react";

export function Sparkles({
  className,
  size = 1,
  minSize = null,
  density = 800,
  speed = 1,
  minSpeed = null,
  opacity = 1,
  opacitySpeed = 3,
  minOpacity = null,
  color = "#FFFFFF",
  background = "transparent",
}) {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / density);

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * (speed || 1),
          vy: (Math.random() - 0.5) * (speed || 1),
          size: Math.random() * (size - (minSize || size / 2.5)) + (minSize || size / 2.5),
          opacity: Math.random() * (opacity - (minOpacity || opacity / 10)) + (minOpacity || opacity / 10),
          opacityDirection: Math.random() > 0.5 ? 1 : -1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Update opacity
        particle.opacity += particle.opacityDirection * (opacitySpeed / 1000);
        if (particle.opacity <= (minOpacity || opacity / 10)) {
          particle.opacityDirection = 1;
        } else if (particle.opacity >= opacity) {
          particle.opacityDirection = -1;
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Set canvas background
    canvas.style.background = background;

    // Initialize
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [density, speed, minSpeed, size, minSize, opacity, opacitySpeed, minOpacity, color, background]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
    />
  );
}