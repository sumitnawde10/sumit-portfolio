import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Starfield from './components/Starfield';

const greetings = [
  "Hello", "नमस्ते", "नमस्कार", "ನಮಸ್ಕಾರ", "வணக்கம்", 
  "নমস্কার", "નમસ્તે", "నమస్కారం", "നമസ്കാരം", "ਸਤਿ ਸ੍ਰੀ ਅকাল"
];

function App() {
  const [index, setIndex] = useState(0);
  const [isDiving, setIsDiving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden font-sans">
      <AnimatePresence>
        {!isDiving && (
          <motion.div
            key="welcome-screen"
            initial={{ y: 0 }}
            exit={{ y: "-100vh" }}
            transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
          >
            <Starfield />
            
            <div className="relative z-10 text-center flex flex-col items-center">
              {/* BIG GREETING */}
              <motion.h1
                key={greetings[index]}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.5 }}
                transition={{ duration: 0.5 }}
                className="text-8xl md:text-9xl font-extrabold mb-16 tracking-tighter"
              >
                {greetings[index]}
              </motion.h1>

              {/* WHITE FONT BUTTON */}
              <motion.button
                onClick={() => setIsDiving(true)} // THIS FIXES THE NAVIGATION
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 30px rgba(0, 191, 255, 0.6)" }}
                whileTap={{ scale: 0.9 }}
                className="px-12 py-5 bg-[#00BFFF] text-white font-bold rounded-full uppercase tracking-widest shadow-lg"
              >
                LET&apos;S DIVE IN
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN PORTFOLIO SECTION */}
      <main className="relative z-10 min-h-screen flex flex-col items-center pt-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isDiving ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-4xl text-left w-full"
        >
          <h2 className="text-[#00BFFF] font-mono text-xl mb-2">/ Computer Engineering</h2>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">SUMIT MANGESH NAWDE</h1>
          <p className="text-gray-400 text-xl leading-relaxed mb-8">
            Maintaining a **8.65 CGPA** [cite: 9] at Ramrao Adik Institute of Technology[cite: 7], 
            I am an AI-focused developer and **Google Cloud Hackathon Finalist**[cite: 48].
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* Project Card Example */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-2xl font-bold mb-2">NeoPaathshaala</h3>
              <p className="text-gray-400 text-sm">AI-Powered Teacher&apos;s Assistant that reduced planning time by 80%[cite: 23].</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-2xl font-bold mb-2">SynapseHome</h3>
              <p className="text-gray-400 text-sm">Full-stack AI energy management system engineered with React.js and Flask[cite: 17].</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default App;