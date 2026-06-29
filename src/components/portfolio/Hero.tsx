import { useState, useEffect } from 'react';

const PHRASES = ["Data Pipelines", "Machine Learning Models", "Cloud-native Systems", "ETL Architectures"];

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = PHRASES[phraseIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    
    const timeout = setTimeout(() => {
      if (!isDeleting && typedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      } else {
        setTypedText(currentPhrase.substring(0, typedText.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, phraseIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-32 pb-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Info */}
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for data projects
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight glitch-hover">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-dev-primary to-cyan-300">Phát</span> 
            <span className="inline-block hover:animate-[spin_1s_ease-in-out] origin-bottom-right cursor-default transition-transform ml-2">👋</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-300 mb-6 flex items-center h-10">
            <span className="text-white mr-2">I build</span>
            <span id="typing-text" className="text-dev-primary font-mono bg-dev-primary/10 px-2 rounded border border-dev-primary/20">{typedText}</span>
            <span className="w-0.5 h-6 bg-dev-primary animate-blink ml-1"></span>
          </h2>

          <p className="text-dev-text leading-relaxed mb-10 max-w-xl text-lg">
            Data Engineer & Analyst specializing in building robust data pipelines, scalable ETL architectures, and delivering actionable business intelligence.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a href="#projects" className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-dev-primary hover:from-blue-500 hover:to-dev-secondary text-white font-medium rounded-xl transition-all shadow-lg shadow-dev-primary/20 text-sm">
              View my work
            </a>
            <a href="#contact" className="px-7 py-3.5 border border-slate-700 hover:bg-slate-800 hover:border-slate-500 text-white font-medium rounded-xl transition-all flex items-center gap-2 text-sm">
              Let's Talk <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7-7m7-7H3"></path></svg>
            </a>
          </div>

          <div className="grid grid-cols-4 gap-4 border-t border-slate-800/50 pt-8">
            <div><div className="text-2xl font-bold text-white">3+</div><div className="text-xs text-slate-500 mt-1">Years Exp.</div></div>
            <div><div className="text-2xl font-bold text-white">10+</div><div className="text-xs text-slate-500 mt-1">Pipelines</div></div>
            <div><div className="text-2xl font-bold text-white">5+</div><div className="text-xs text-slate-500 mt-1">Databases</div></div>
            <div><div className="text-2xl font-bold text-white">100%</div><div className="text-xs text-slate-500 mt-1">Data Quality</div></div>
          </div>
        </div>

        {/* Editor */}
        <div className="relative w-full max-w-lg mx-auto lg:max-w-none reveal tilt-wrapper" style={{ transitionDelay: '0.2s' }}>
          {/* Floating Tech Badges */}
          <div className="absolute -left-6 top-12 bg-dev-surface border border-slate-700 px-3 py-2 rounded-xl items-center gap-2 shadow-xl z-20 animate-float-slow glass-panel hidden md:flex">
            <span className="text-cyan-400 font-bold">Go</span> Golang
          </div>
          <div className="absolute -right-4 top-28 bg-dev-surface border border-slate-700 px-3 py-2 rounded-xl flex items-center gap-2 shadow-xl z-20 animate-float-fast glass-panel">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span> Active
          </div>
          <div className="absolute left-10 -bottom-5 bg-dev-surface border border-slate-700 px-3 py-2 rounded-xl items-center gap-2 shadow-xl z-20 animate-float-slow glass-panel hidden md:flex" style={{ animationDelay: '1s' }}>
            <span className="text-blue-500 font-bold">SQL</span> BigQuery
          </div>

          {/* IDE Window */}
          <div className="tilt-card bg-[#1e1e1e] rounded-2xl border border-slate-700/60 shadow-[0_30px_60px_-15px_rgba(14,165,233,0.3)] overflow-hidden relative z-10 group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            {/* Mac OS Header */}
            <div className="flex items-center px-4 py-3 bg-[#252526] border-b border-[#333333]">
                <div className="flex gap-2 w-16">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]"></div>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="bg-[#333333] px-4 py-1 rounded-md text-xs text-[#cccccc] font-mono border border-[#444444] flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l-12 12h5v12h14v-12h5z"/></svg>
                        main.go
                    </div>
                </div>
                <div className="w-16"></div>
            </div>
            
            {/* Code Content (VS Code Dark Theme Syntax) */}
            <div className="p-6 font-mono text-sm md:text-[14px] leading-7 overflow-x-auto text-[#d4d4d4] selection:bg-[#264f78]">
                <div className="flex hover:bg-white/[0.04] px-2 -mx-2 rounded"><span className="text-[#858585] w-8 select-none text-right pr-4">1</span> <div><span className="text-code-keyword">package</span> main</div></div>
                <div className="flex hover:bg-white/[0.04] px-2 -mx-2 rounded"><span className="text-[#858585] w-8 select-none text-right pr-4">2</span> <div></div></div>
                <div className="flex hover:bg-white/[0.04] px-2 -mx-2 rounded"><span className="text-[#858585] w-8 select-none text-right pr-4">3</span> <div><span className="text-code-comment">// Architecting scalable systems 🚀</span></div></div>
                <div className="flex hover:bg-white/[0.04] px-2 -mx-2 rounded"><span className="text-[#858585] w-8 select-none text-right pr-4">4</span> <div><span className="text-code-keyword">type</span> <span className="text-[#4ec9b0]">Developer</span> <span className="text-code-keyword">struct</span> {'{'}</div></div>
                <div className="flex hover:bg-white/[0.04] px-2 -mx-2 rounded"><span className="text-[#858585] w-8 select-none text-right pr-4">5</span> <div>&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#4ec9b0]">string</span></div></div>
                <div className="flex hover:bg-white/[0.04] px-2 -mx-2 rounded"><span className="text-[#858585] w-8 select-none text-right pr-4">6</span> <div>&nbsp;&nbsp;Focus&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#4ec9b0]">string</span></div></div>
                <div className="flex hover:bg-white/[0.04] px-2 -mx-2 rounded"><span className="text-[#858585] w-8 select-none text-right pr-4">7</span> <div>&nbsp;&nbsp;Coffee&nbsp;&nbsp;&nbsp;<span className="text-[#4ec9b0]">bool</span></div></div>
                <div className="flex hover:bg-white/[0.04] px-2 -mx-2 rounded"><span className="text-[#858585] w-8 select-none text-right pr-4">8</span> <div>{'}'}</div></div>
                <div className="flex hover:bg-white/[0.04] px-2 -mx-2 rounded"><span className="text-[#858585] w-8 select-none text-right pr-4">9</span> <div></div></div>
                <div className="flex hover:bg-white/[0.04] px-2 -mx-2 rounded"><span className="text-[#858585] w-8 select-none text-right pr-4">10</span><div><span className="text-code-keyword">func</span> <span className="text-code-type">main</span>() {'{'}</div></div>
                <div className="flex hover:bg-white/[0.04] px-2 -mx-2 rounded"><span className="text-[#858585] w-8 select-none text-right pr-4">11</span><div>&nbsp;&nbsp;me := <span className="text-[#4ec9b0]">Developer</span>{'{'}</div></div>
                <div className="flex hover:bg-white/[0.04] px-2 -mx-2 rounded"><span className="text-[#858585] w-8 select-none text-right pr-4">12</span><div>&nbsp;&nbsp;&nbsp;&nbsp;Name:&nbsp;&nbsp;<span className="text-code-string">"Duc Phat"</span>,</div></div>
                <div className="flex hover:bg-white/[0.04] px-2 -mx-2 rounded"><span className="text-[#858585] w-8 select-none text-right pr-4">13</span><div>&nbsp;&nbsp;&nbsp;&nbsp;Focus:&nbsp;<span className="text-code-string">"Distributed Systems"</span>,</div></div>
                <div className="flex hover:bg-white/[0.04] px-2 -mx-2 rounded"><span className="text-[#858585] w-8 select-none text-right pr-4">14</span><div>&nbsp;&nbsp;&nbsp;&nbsp;Coffee: <span className="text-[#569cd6]">true</span>,</div></div>
                <div className="flex hover:bg-white/[0.04] px-2 -mx-2 rounded"><span className="text-[#858585] w-8 select-none text-right pr-4">15</span><div>&nbsp;&nbsp;{'}'}</div></div>
                <div className="flex hover:bg-white/[0.04] px-2 -mx-2 rounded"><span className="text-[#858585] w-8 select-none text-right pr-4">16</span><div>&nbsp;&nbsp;me.<span className="text-code-type">Build</span>(<span className="text-code-string">"Awesome APIs"</span>)<span className="animate-blink font-bold text-white">_</span></div></div>
                <div className="flex hover:bg-white/[0.04] px-2 -mx-2 rounded"><span className="text-[#858585] w-8 select-none text-right pr-4">17</span><div>{'}'}</div></div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-dev-primary/10 blur-[80px] -z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
