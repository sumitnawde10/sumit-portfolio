import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, X, Download, Printer } from 'lucide-react'; 
import Starfield from './components/Starfield';

// 10 Indian Language Greetings
const greetings = [
  "Hello", "नमस्ते", "नमस्कार", "ನಮಸ್ಕಾರ", "வணக்கம்", 
  "নমস্কার", "નમસ્તે", "నమస్కారం", "നమస్కారం", "ਸਤਿ ਸ੍ਰੀ ਅকাল"
];

const navLinks = [
  { name: "About", id: "about" },
  { name: "Education", id: "education" },
  { name: "Projects", id: "projects" },
  { name: "Certificates", id: "certificates" },
  { name: "Skills", id: "skills" },
  { name: "Honors", id: "honors" },
  { name: "Connect", id: "connect" }
];

function App() {
  const [index, setIndex] = useState(0);
  const [isDiving, setIsDiving] = useState(false);
  const [showResume, setShowResume] = useState(false);

  // Resume PDF URL - Ensure this file is in your /public folder
  const resumeUrl = "/SumitNawde_Resume.pdf"; 

  // Language rotation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${isDiving ? 'bg-white' : 'bg-black'}`}>
      
      {/* LANDING PAGE OVERLAY */}
      <AnimatePresence>
        {!isDiving && (
          <motion.div
            key="welcome"
            exit={{ y: "-100vh" }}
            transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
          >
            <Starfield />
            
            <div className="relative z-10 text-center flex flex-col items-center">
              <motion.h1
                key={greetings[index]}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="text-8xl md:text-9xl font-extrabold mb-16 tracking-tighter"
              >
                {greetings[index]}
              </motion.h1>

              <motion.button 
                onClick={() => setIsDiving(true)}
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 30px rgba(0, 191, 255, 0.8)" }}
                whileTap={{ scale: 0.9 }}
                className="px-12 py-5 bg-[#00BFFF] text-white rounded-full z-10 font-bold uppercase tracking-widest"
              >
                LET&apos;S DIVE IN
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RESUME MODAL POP-UP */}
      <AnimatePresence>
        {showResume && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white w-full max-w-5xl h-[90vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Modal Header */}
              <div className="bg-black text-white px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FileText size={20} className="text-[#00BFFF]" />
                  <span className="font-bold text-sm tracking-widest uppercase">SumitNawde_Resume.pdf</span>
                </div>
                <div className="flex items-center gap-6">
                  <button onClick={() => window.print()} title="Print Resume" className="hover:text-[#00BFFF] transition-colors">
                    <Printer size={20}/>
                  </button>
                  <a href={resumeUrl} download title="Download Resume" className="hover:text-[#00BFFF] transition-colors">
                    <Download size={20}/>
                  </a>
                  <button onClick={() => setShowResume(false)} title="Close" className="hover:text-red-500 transition-colors">
                    <X size={24}/>
                  </button>
                </div>
              </div>
              
              {/* Modal Body (PDF Viewer) */}
              <iframe 
                src={`${resumeUrl}#view=FitH`} 
                className="w-full h-full border-none"
                title="Sumit Nawde Resume"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FIXED BLACK HEADER */}
      {isDiving && (
        <motion.header 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed top-0 w-full bg-black text-white z-40 py-4 px-6 shadow-xl"
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <span className="font-bold text-xl tracking-tighter text-[#00BFFF]">SN</span>
            <nav>
              <ul className="flex gap-6 overflow-x-auto">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button 
                      onClick={() => scrollToSection(link.id)}
                      className="text-[10px] uppercase tracking-widest hover:text-[#00BFFF] transition-colors whitespace-nowrap"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </motion.header>
      )}

      {/* MAIN CONTENT AREA */}
      <main className={`pt-4 px-6 max-w-6xl mx-auto text-black ${isDiving ? 'block' : 'hidden'}`}>
        
        {/* ABOUT SECTION */}
        <section id="about" className="py-20 flex flex-col md:flex-row gap-12 items-start">
          <img 
            src="/dev-boy.png" 
            alt="Developer Illustration" 
            className="absolute right-0 h-[60%] bottom-0 w-1/2 md:w-1/3 opacity-50 pointer-events-none z-0 translate-x-10"
            />
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-sm font-mono text-[#00BFFF] mb-6 uppercase tracking-[0.3em]"
            >
              / 01 About Me
            </motion.h2>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-none">
              Sumit Mangesh Nawde
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-10">
              I am a <strong>Computer Engineering</strong> student at Ramrao Adik Institute of Technology, Navi Mumbai
              with Proficient in FullStack Software Development. I am an AI and Data Science Enthusiastic Developer creating FullStack applications with trending skills and technologies like Machine Learning, Data Analysis and Visualization.
            </p>

            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-10">
              With all this Technologies, I have practically worked on various Projects such as <strong> NeoPaathshala, sportMatrix, SynapseHome</strong> and many more. Which Lead to contribution in Hackathons and Software Project Competitions and now I&apos;m looking for to contribute in the Industry with opportunities of Internship and Full-Time role.
            </p>

            <button 
              onClick={() => setShowResume(true)}
              className="group flex items-center gap-4 px-10 py-5 border-2 border-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-500"
            >
              <FileText size={20} className="group-hover:text-[#00BFFF]" />
              Explore My Resume
            </button>
          </div>
        </section>
         
        {/* EDUCATION SECTION */}
        <section id="education" className="pt-2 py-9 max-w-6xl mx-auto scroll-mt-24">
        {/* Section Header */}
         <motion.h2 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-sm font-mono text-[#00BFFF] mb-10 uppercase tracking-[0.3em]"
         >
         / 02 Education
        </motion.h2>

  <div className="flex flex-col gap-6">
    
    {/* 1. B.TECH BOX */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-[#00BFFF] text-black rounded-2xl p-8 md:p-8 shadow-lg flex flex-col md:flex-row justify-between items-center transition-transform hover:scale-[1.01]"
    >
      <div>
        <h3 className="text-1xl md:text-2xl font-bold mb-2 tracking-tighter">B.Tech in Computer Engineering</h3>
        <p className="text-lg md:text-xl font-medium opacity-80">Ramrao Adik Institute of Technology, D.Y. Patil University</p>
      </div>
      <div className="text-right mt-6 md:mt-0 w-full md:w-auto border-t md:border-t-0 md:border-l border-black/10 pt-4 md:pt-0 md:pl-12">
        <span className="text-4xl md:text-5xl font-black block leading-none">8.65 CGPA</span>
        <p className="text-xs uppercase tracking-widest font-bold mt-2 opacity-60">2022 — PRESENT</p>
      </div>
    </motion.div>

    {/* 2. 12TH GRADE BOX */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-[#00BFFF] text-black rounded-2xl p-8 md:p-8 shadow-lg flex flex-col md:flex-row justify-between items-center transition-transform hover:scale-[1.01]"
    >
      <div>
        <h3 className="text-2xl md:text-2xl font-bold mb-2 tracking-tighter">Higher Secondary (12th)</h3>
        <p className="text-lg md:text-xl font-medium opacity-80">Pace Jr. Science College, Thane</p>
      </div>
      <div className="text-right mt-6 md:mt-0 w-full md:w-auto border-t md:border-t-0 md:border-l border-black/10 pt-4 md:pt-0 md:pl-12">
        <span className="text-4xl md:text-5xl font-black block leading-none">61.33%</span>
        <p className="text-xs uppercase tracking-widest font-bold mt-2 opacity-60">2021 — 2022</p>
      </div>
    </motion.div>

    {/* 3. 10TH GRADE BOX */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-[#00BFFF] text-black rounded-2xl p-8 md:p-8 shadow-lg flex flex-col md:flex-row justify-between items-center transition-transform hover:scale-[1.01]"
    >
      <div>
        <h3 className="text-2xl md:text-2xl font-bold mb-2 tracking-tighter">Secondary School (10th)</h3>
        <p className="text-lg md:text-xl font-medium opacity-80">Lok Kalyan Public School, Kalyan</p>
      </div>
      <div className="text-right mt-6 md:mt-0 w-full md:w-auto border-t md:border-t-0 md:border-l border-black/10 pt-4 md:pt-0 md:pl-12">
        <span className="text-4xl md:text-5xl font-black block leading-none">83.40%</span>
        <p className="text-xs uppercase tracking-widest font-bold mt-2 opacity-60">2019 — 2020</p>
      </div>
    </motion.div>

  </div>
</section>
        {/* Space for future sections */}
        <div className="h-64"></div>
      </main>
    </div>
  );
}

export default App;