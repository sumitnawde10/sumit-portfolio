import { useMemo } from 'react';
import { motion } from 'framer-motion';

const SidebarStarfield = () => {
  const stars = useMemo(() => {
    return [...Array(50)].map((_, i) => ({
      id: i,
      // Randomly assign to left (0-10%) or right (90-100%)
      x: Math.random() > 0.5 ? Math.random() * 10 : 90 + Math.random() * 10,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white">
      
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: 0.1 }}
          animate={{ 
            opacity: [0.1, 0.8, 0.1],
            scale: [1, 1.5, 1] 
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-black"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: '0 0 10px #00BFFF',
          }}
        />
      ))}
    </div>
  );
};

export default SidebarStarfield;