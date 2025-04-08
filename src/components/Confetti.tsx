
import React, { useEffect, useState } from 'react';

interface ConfettiProps {
  isActive: boolean;
}

const Confetti: React.FC<ConfettiProps> = ({ isActive }) => {
  const [confetti, setConfetti] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (isActive) {
      const colors = ['#0050C8', '#E6F0FF', '#4CAF50', '#FFD700', '#FF5252'];
      const newConfetti: JSX.Element[] = [];
      
      for (let i = 0; i < 100; i++) {
        const left = `${Math.random() * 100}%`;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const animationDuration = `${3 + Math.random() * 2}s`;
        const animationDelay = `${Math.random() * 0.5}s`;
        
        newConfetti.push(
          <div
            key={i}
            className="confetti"
            style={{
              left,
              top: '-10px',
              backgroundColor: color,
              animationDuration,
              animationDelay,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
            }}
          />
        );
      }
      
      setConfetti(newConfetti);
      
      // Remove confetti after animation finishes
      const timer = setTimeout(() => {
        setConfetti([]);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  if (!isActive) return null;
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {confetti}
    </div>
  );
};

export default Confetti;
