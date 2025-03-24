import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [headerText, setHeaderText] = useState("");
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const [showParticles, setShowParticles] = useState(false);
  
  const textHeader = "Hi, I'm Kelvin Nzioka";
  const fullText = "I'm a Data Analyst and a Software Engineer";

  // Generate random particles for background effect
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    speed: Math.random() * 1 + 0.5,
  }));

  useEffect(() => {
    // Show particles with a small delay for a nice entrance
    setTimeout(() => setShowParticles(true), 300);
    
    // Header text animation
    let headerIndex = 0;
    const headerInterval = setInterval(() => {
      setHeaderText(textHeader.substring(0, headerIndex));
      headerIndex++;

      if (headerIndex > textHeader.length) {
        clearInterval(headerInterval);
      }
    }, 80);

    // Main text animation (starts after a small delay)
    let textIndex = 0;
    const textDelay = setTimeout(() => {
      const textInterval = setInterval(() => {
        setText(fullText.substring(0, textIndex));
        textIndex++;

        // Update progress bar
        setProgress((textIndex / fullText.length) * 100);

        if (textIndex > fullText.length) {
          clearInterval(textInterval);
          setTimeout(() => {
            // Fade out animation effect can be controlled via CSS
            document.getElementById("loading-container").classList.add("fade-out");
            setTimeout(onComplete, 800); // Wait for fade out animation
          }, 1000);
        }
      }, 100);

      return () => clearInterval(textInterval);
    }, 800);

    return () => {
      clearInterval(headerInterval);
      clearTimeout(textDelay);
    };
  }, [onComplete]);

  return (
    <div 
      id="loading-container"
      className="fixed inset-0 z-50 bg-gradient-to-b from-black to-gray-900 text-gray-100 
      flex flex-col items-center justify-center overflow-hidden transition-opacity duration-800"
    >
      {/* Animated background particles */}
      {showParticles && particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-blue-500 opacity-70 animate-float"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDuration: `${particle.speed * 10}s`,
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.7)'
          }}
        />
      ))}
      
      {/* Glowing profile image */}
      <div className="relative mb-8 animate-float-slow">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 blur-lg opacity-70 animate-pulse"></div>
        <img
          src="./public/pf.png"
          alt="Profile"
          className="relative w-32 h-32 rounded-full border-2 border-blue-400 object-cover shadow-lg"
        />
      </div>

      {/* Progress bar with animated glow */}
      <div className="w-[300px] h-[4px] bg-gray-800 rounded-full relative overflow-hidden mb-12">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 rounded-full"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute top-0 bottom-0 right-0 w-8 h-full bg-white opacity-30 animate-pulse-fast"></div>
        </div>
      </div>

      <div className="text-center px-6 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          {headerText}
          {headerText.length < textHeader.length && (
            <span className="animate-blink ml-1 opacity-70">|</span>
          )}
        </h1>
        
        <p className="text-gray-300 text-lg sm:text-xl mb-8">
          {text}
          {text.length < fullText.length && headerText.length === textHeader.length && (
            <span className="animate-blink ml-1 opacity-70">|</span>
          )}
        </p>

        <div className="inline-block relative">
          <span className="text-xl font-medium text-gray-200 animate-pulse-slow">Welcome to my portfolio</span>
          <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        </div>
        
        {/* Skills badges with staggered entrance */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["Data Analysis", "React", "Python", "JavaScript", "SQL"].map((skill, index) => (
            <div 
              key={skill}
              className="bg-gray-800 bg-opacity-50 px-4 py-2 rounded-full text-sm border border-gray-700 hover:border-blue-400 
              transition-all hover:scale-105 hover:bg-gray-700"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                opacity: progress > 50 ? 1 : 0,
                transform: progress > 50 ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.5s ease'
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};