
import React, { useEffect, useRef, useState } from 'react';

interface AnimatedHeroBackgroundProps {
  className?: string;
  isPaused?: boolean;
}

const AnimatedHeroBackground: React.FC<AnimatedHeroBackgroundProps> = ({ 
  className,
  isPaused = false 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    // Update active state when isPaused prop changes
    setIsActive(!isPaused);
  }, [isPaused]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Call once to initialize
    resizeCanvas();

    // Add resize listener
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
    }> = [];

    // Colors for particles
    const colors = ['#9b87f5', '#d3e4fd', '#e5deff', '#ffdee2'];

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor(canvas.width * 0.05), 70);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.6 + 0.2,
        });
      }
    };

    initParticles();

    // Animation function
    const animate = () => {
      // Skip animation if paused
      if (!isActive) {
        return;
      }
      
      // Clear canvas with semi-transparent background to create trail effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        // Move particle
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Boundary check with wrapping
        if (particle.x > canvas.width) particle.x = 0;
        else if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        else if (particle.y < 0) particle.y = canvas.height;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.alpha * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });
      
      // Request next frame only if active
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    if (isActive) {
      animationRef.current = requestAnimationFrame(animate);
    }

    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive]);

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} />;
};

export default AnimatedHeroBackground;
