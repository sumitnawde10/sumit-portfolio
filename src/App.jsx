import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, X, Download, Printer, Github, ExternalLink 
} from 'lucide-react'; 
import Starfield from './components/Starfield';
import DeveloperBackground from './components/DeveloperBackground';
import { Mail, Linkedin } from 'lucide-react'; // Ensure these are in your imports
import SidebarStarfield from './components/SidebarStarfield'; // Adjust path if needed
// 10 Indian Language Greetings
const greetings = [
  "Hello", "नमस्ते", "नमस्कार", "ನಮಸ್ಕಾರ", "வணக்கம்", 
  "নমস্কার", "নমস্তে", "నమస్కారం", "നമస్కారం", "ਸਤਿ ਸ੍ਰੀ ਅকাল"
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

const projects = [
  {
    title: "Synapse Home",
    description: "An AI-powered energy management system using ML to forecast supply/demand and optimize household energy efficiency through a real-time decision engine.",
    image: "/synapse-home.png", 
    github: "https://github.com/sumitnawde10/SynapseHome",
    link: "https://www.linkedin.com/in/sumitnawde/details/projects/"
  },
  {
    title: "NeoPaathshaala",
    description: "Full-stack AI assistant for educators that generates multi-grade lesson kits and stories from voice/text prompts, reducing prep time from hours to seconds.",
    image: "/neo-paathshaala.png",
    github: "https://github.com/Anuj3937/NeoPaathshala",
    link: "https://www.linkedin.com/in/sumitnawde/details/projects/"
  },
  {
    title: "X'board",
    description: "An intelligent Flask-based platform that automatically transforms raw Excel/CSV data into professional, insight-rich dashboards with automated cleaning and visualization.",
    image: "/xboard.png",
    github: "https://github.com/sumitnawde10/Xboard",
    link: "https://www.linkedin.com/in/sumitnawde/details/projects/"
  },
  {
    title: "SportMatrix",
    description: "ML-driven sports analytics platform that ranks football players using the TOPSIS algorithm and predicts optimal team formations based on performance data.",
    image: "/sport-matrix.png",
    github: "https://github.com/sumitnawde10/SportMatrix",
    link: "https://www.linkedin.com/in/sumitnawde/details/projects/"
  },
  {
    title: "ExploreEcho",
    description: "Flask-based travel recommendation system providing personalized destination suggestions based on user budget and seasonal preferences with real-time filtering.",
    image: "/explore-echo.png",
    github: "https://github.com/sumitnawde10/ExploreEcho",
    link: "https://www.linkedin.com/in/sumitnawde/details/projects/"
  },
  {
    title: "MEDcare",
    description: "A first-aid assistance web app providing instant medical guidance and step-by-step visual instructions for emergencies like CPR, burns, and heart attacks.",
    image: "/medcare.png",
    github: "https://github.com/sumitnawde10/MedCare",
    link: "https://www.linkedin.com/in/sumitnawde/details/projects/"
  }
];

const certificates = [
  { title: "AWS Academy Graduate - Cloud Architecting", issuedBy: "Amazon Web Services (AWS)" },
  { title: "Data Analytics Job Simulation", issuedBy: "Deloitte Australia" },
  { title: "AWS Cloud Practitioner Essentials", issuedBy: "edX Verified" },
  { title: "Career Essentials in Business Analysis", issuedBy: "Microsoft and LinkedIn" },
  { title: "Career Essentials in Data Analysis", issuedBy: "Microsoft and LinkedIn" },
  { title: "Advance Excel with AI", issuedBy: "Office Master" },
  { title: "Analyzing and Visualizing Data with Power BI", issuedBy: "edX Verified" },
  { title: "Software Engineering Job Simulation", issuedBy: "Goldman Sachs" }
];

const honors = [
  { title: "Finalist", event: "Google Cloud Agentic AI Hackathon (2025)", detail: "Developed NeoPaathshaala" },
  { title: "4th Place", event: "RAIT Technovate Project Competition (2025)", detail: "SportMatrix AI System" },
  { title: "District Player", event: "Thane Division (2022)", detail: "Football, TT, Volleyball, Relay" },
  { title: "Volunteer", event: "RAIT TechFest 2024", detail: "Successful Event Execution" }
];

function App() {
  const [index, setIndex] = useState(0);
  const [isDiving, setIsDiving] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const resumeUrl = "/SumitNawde_Resume.pdf"; 

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Language rotation logic - Faster 1s interval
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 1000); 
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
              <iframe 
                src={`${resumeUrl}#view=FitH`} 
                className="w-full h-full border-none"
                title="Sumit Nawde Resume"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {isDiving && (
        <>
          {/* 1. Background stars fixed to sides */}
          <SidebarStarfield />

          {/* 2. Your Header Navigation */}
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

          {/* 3. Main Content Wrapper - THIS MUST BE HERE */}
          <main className="relative z-10 pt-4 px-6 max-w-6xl mx-auto text-black">
            {/* ... Your Sections 01 to 07 go here ... */}
          </main>
        </>
      )} {/* <--- THIS CLOSES THE isDiving BLOCK */}

      <main className="relative z-10 pt-4 px-6 max-w-6xl mx-auto text-black"> 
        
        {/* ABOUT SECTION */}
        <section id="about" className="relative py-20 flex flex-col md:flex-row gap-12 items-start overflow-hidden">
          <DeveloperBackground />
          <img 
            src="/dev-boy.png" 
            alt="Developer Illustration" 
            className="absolute right-0 top-10 h-full w-auto opacity-40 pointer-events-none z-0 translate-x-12 object-contain"
          />
          <div className="flex-1 relative z-10">
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
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-6">
              I am a <strong>Computer Engineering</strong> student at Ramrao Adik Institute of Technology, Navi Mumbai
              with Proficient in FullStack Software Development. I am an AI and Data Science Enthusiastic Developer creating FullStack applications with trending skills and technologies like Machine Learning, Data Analysis and Visualization.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-10">
               With all this Learning, I have practically worked on various Projects such as <strong> NeoPaathshala, sportMatrix, SynapseHome</strong> and many more, Which Lead to contribution in Hackathons and Software Project Competitions and now I&apos;m looking for to contribute in the Industry with opportunities of Internship and Full-Time role.
            </p>
            <button 
              onClick={() => setShowResume(true)}
              className="group flex items-center gap-4 px-10 py-5 border-2 border-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-500 bg-white/80 backdrop-blur-sm"
            >
              <FileText size={20} className="group-hover:text-[#00BFFF]" />
              Explore My Resume
            </button>
          </div>
        </section>
         
        {/* EDUCATION SECTION */}
        <section id="education" className="pt-2 py-9 max-w-6xl mx-auto scroll-mt-24">
          <motion.h2 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-sm font-mono text-[#00BFFF] mb-10 uppercase tracking-[0.3em]"
          >
            / 02 Education
          </motion.h2>
          <div className="flex flex-col gap-6">
            {[
              { title: "B.Tech in Computer Engineering", school: "Ramrao Adik Institute of Technology, D.Y. Patil University", grade: "8.65 CGPA", year: "2022 — PRESENT" },
              { title: "Higher Secondary (12th)", school: "Pace Jr. Science College, Thane", grade: "61.33%", year: "2021 — 2022" },
              { title: "Secondary School (10th)", school: "Lok Kalyan Public School, Kalyan", grade: "83.40%", year: "2019 — 2020" }
            ].map((edu, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#00BFFF] text-black rounded-2xl p-8 shadow-lg flex flex-col md:flex-row justify-between items-center transition-transform hover:scale-[1.01]"
              >
                <div>
                  <h3 className="text-xl md:text-xl font-bold mb-2 tracking-tighter">{edu.title}</h3>
                  <p className="text-lg font-medium opacity-80">{edu.school}</p>
                </div>
                <div className="text-right mt-6 md:mt-0 w-full md:w-auto border-t md:border-t-0 md:border-l border-black/10 pt-4 md:pt-0 md:pl-12">
                  <span className="text-3xl md:text-4xl font-black block leading-none">{edu.grade}</span>
                  <p className="text-xs uppercase tracking-widest font-bold mt-2 opacity-60">{edu.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="pt-18 py-9 bg-white overflow-hidden scroll-mt-24">
          <div className="max-w-6xl mx-auto mb-12">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-sm font-mono text-[#00BFFF] uppercase tracking-[0.3em]"
            >
              / 03 Projects
            </motion.h2>
          </div>
          <div className="flex relative w-full overflow-hidden">
            <motion.div 
              className="flex whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }} 
              whileHover={{ transition: { duration: 0 }, x: undefined }} 
              style={{ display: 'flex' }}
              transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            >
              {[...projects, ...projects].map((project, idx) => (
                <div key={idx} className="inline-block px-4 w-[350px] md:w-[450px]">
                  <div className="bg-white/5 border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden backdrop-blur-sm">
                    <div className="overflow-hidden rounded-2xl h-48 mb-6 bg-gray-50">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#00BFFF] mb-3 whitespace-normal">{project.title}</h3>
                    <p className="text-black whitespace-normal text-sm leading-relaxed mb-6">{project.description}</p>
                    <div className="flex gap-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-black hover:bg-black hover:text-white transition-colors duration-300 relative z-20"><Github size={18} /></a>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-[#00BFFF] text-[#00BFFF] hover:bg-[#00BFFF] hover:text-white transition-colors duration-300 relative z-20"><ExternalLink size={18} /></a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CERTIFICATES SECTION */}
        <section id="certificates" className="pt-18.5 py-9 max-w-6xl mx-auto scroll-mt-24">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-sm font-mono text-[#00BFFF] mb-12 uppercase tracking-[0.3em]"
          >
            / 04 Licenses & Certifications
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificates.map((cert, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.02, borderColor: '#00BFFF' }}
                className="bg-black border border-white/10 p-5 rounded-2xl transition-all duration-300 group shadow-xl"
              >
                <h3 className="text-[#00BFFF] text-xl md:text-lg font-bold mb-2 tracking-tight leading-tight">{cert.title}</h3>
                <p className="text-white/60 font-mono text-[10px] uppercase tracking-widest">Issued by: {cert.issuedBy}</p>
              </motion.div>
            ))}
          </div>
        </section>
        {/* SKILLS SECTION */}
<section id="skills" className="pt-18 py-9 max-w-6xl mx-auto scroll-mt-24">
  <motion.h2 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    className="text-sm font-mono text-[#00BFFF] mb-16 uppercase tracking-[0.3em]"
  >
    / 05 Technical Skills
  </motion.h2>

  {/* Main Grid for the 6 Major Bubbles */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
    
    {[
      {
        category: "Languages",
        skills: ["Python", "C++", "SQL"]
      },
      {
        category: "Web Development",
        skills: ["HTML", "CSS", "JS", "Flask", "Django", "React.js", "Tailwind"]
      },
      {
        category: "Data Engineering",
        skills: ["Analysis", "Processing", "Visuals", "Warehousing", "R"]
      },
      {
        category: "Machine Learning",
        skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Algorithms"]
      },
      {
        category: "Core CS",
        skills: ["DSA", "DBMS", "OS", "Networking", "System Design"]
      },
      {
        category: "Cloud & Tools",
        skills: ["AWS", "Git", "OpenPyXL", "Chart.js", "Power BI", "Tableau"]
      }
    ].map((group, groupIdx) => (
      <motion.div
        key={groupIdx}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        /* Made the main bubble smaller (min-h-[280px] and w-full max-w-[340px]) */
        className="relative w-full max-w-[280px] min-h-[200px] flex flex-col items-center justify-center rounded-[60px] bg-black/5 border border-black/5 backdrop-blur-sm p-6 group overflow-visible"
      >
        {/* Major Bubble Label */}
        <h3 className="absolute top-8 text-[9px] font-mono uppercase tracking-[0.4em] text-blue-400 group-hover:text-[#00BFFF] transition-colors">
          {group.category}
        </h3>

        {/* Small Skills Bubbles inside the Major Bubble */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {group.skills.map((skill, skillIdx) => (
            <motion.div
              key={skillIdx}
              drag
              dragConstraints={{ left: -15, right: 15, top: -15, bottom: 15 }}
              /* Smoother float animation with subtle values */
              animate={{ 
                y: [0, -8, 0],
                x: [0, 4, 0]
              }}
              transition={{ 
                duration: 4 + (skillIdx % 3), // Varied but longer durations for smoothness
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              whileHover={{ 
                scale: 1.15, 
                backgroundColor: "#00BFFF", 
                color: "#000000",
                zIndex: 10 
              }}
              className="px-3 py-1.5 rounded-full border border-black/5 bg-white/10 backdrop-blur-md shadow-sm cursor-grab active:cursor-grabbing flex items-center justify-center transition-colors duration-500"
            >
              <span className="text-[10px] font-bold whitespace-nowrap">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
</section>
       {/* HONORS SECTION */}
<section id="honors" className="pt-18 py-9 max-w-6xl mx-auto scroll-mt-24">
  <div className="max-w-6xl mx-auto  mb-12">
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="text-xs font-mono text-[#00BFFF] uppercase tracking-[0.3em]"
    >
      / 06 Honors & Achievements
    </motion.h2>
  </div>

  {/* Left-to-Right Marquee */}
  <div className="flex relative w-full overflow-hidden">
    <motion.div 
      className="flex whitespace-nowrap"
      animate={{ x: ["-50%", "0%"] }} // Left-to-Right direction
      whileHover={{ transition: { duration: 0 }, x: undefined }} 
      transition={{ 
        duration: 50, 
        repeat: Infinity, 
        ease: "linear" 
      }}
    >
      {[...honors, ...honors].map((honor, idx) => (
        <div key={idx} className="inline-block px-4">
          {/* Badge Shape (Pill Shape) */}
          <div className="bg-[#00BFFF] text-white px-8 py-4 rounded-full border border-[#00BFFF]/30 flex flex-col items-center justify-center min-w-[300px] shadow-lg hover:border-[#00BFFF] transition-all duration-500 backdrop-blur-sm">
            <span className="text-black font-bold text-sm tracking-tighter">
              {honor.title}
            </span>
            <h3 className="text-white text-xs font-medium mt-1">
              {honor.event}
            </h3>
            <p className="text-white-500 text-[9px] uppercase tracking-widest mt-1">
              {honor.detail}
            </p>
          </div>
        </div>
      ))}
    </motion.div>
  </div>
</section>

{/* CONNECT SECTION */}
<section
  id="connect"
  className="pt-18 py-9 max-w-6xl mx-auto scroll-mt-24"
>
  <motion.h2
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    className="text-xs font-mono text-[#00BFFF] mb-12 uppercase tracking-[0.3em]"
  >
    / 07 Connect
  </motion.h2>

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="bg-black/5 border border-black/10 backdrop-blur-xl rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row justify-between items-center shadow-xl"
  >
    {/* Left Side: Text Only */}
    <div className="space-y-6 w-full md:w-1/2">
      <div>
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-mono mb-1">
          Email Me
        </p>
        <p className="text-xl md:text-2xl font-bold text-black hover:text-[#00BFFF] transition-colors">
          sumitnawde2004@gmail.com
        </p>
      </div>

      <div>
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-mono mb-1">
          Call Me
        </p>
        <p className="text-xl md:text-2xl font-bold text-black hover:text-[#00BFFF] transition-colors">
          +91 7977297789
        </p>
      </div>

      <div>
        <p className="text-[10px] uppercase tracking-widest text-gray-400 font-mono mb-1">
          Location
        </p>
        <p className="text-xl md:text-2xl font-bold text-black hover:text-[#00BFFF] transition-colors">
          Mumbai, Maharashtra
        </p>
      </div>
    </div>

    {/* Right Side: Social Buttons (Mail FIXED) */}
    <div className="mt-12 md:mt-0 flex gap-6">
      {[
        {
          icon: <Linkedin size={28} />,
          link: "https://linkedin.com/in/sumitnawde",
        },
        {
          icon: <Github size={28} />,
          link: "https://github.com/sumitnawde10",
        },
        {
          icon: <Mail size={28} />,
          link: "https://mail.google.com/mail/?view=cm&fs=1&to=sumitnawde2004@gmail.com",
        },
      ].map((social, i) => (
        <motion.a
          key={i}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.1,
            backgroundColor: "#00BFFF",
            color: "#000000",
          }}
          className="w-16 h-16 md:w-20 md:h-20 bg-black text-white rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer"
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  </motion.div>


  {/* Signature Line */}
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    className="mt-12 text-center"
  >
    <div className="w-12 h-[1px] bg-[#00BFFF] mx-auto mb-4"></div>
    <p className="text-[#00BFFF] font-mono text-[10px] uppercase tracking-[0.5em]">
      Let&apos;s Connect
    </p>
  </motion.div>
</section>
      </main>
    </div>
  );
}

export default App;