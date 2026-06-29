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
            <span className="text-yellow-400 font-bold">Py</span> Python
          </div>
          <div className="absolute -right-4 top-28 bg-dev-surface border border-slate-700 px-3 py-2 rounded-xl flex items-center gap-2 shadow-xl z-20 animate-float-fast glass-panel">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span> Active
          </div>
          <div className="absolute left-10 -bottom-5 bg-dev-surface border border-slate-700 px-3 py-2 rounded-xl items-center gap-2 shadow-xl z-20 animate-float-slow glass-panel hidden md:flex" style={{ animationDelay: '1s' }}>
            <span className="text-blue-500 font-bold">SQL</span> BigQuery
          </div>

          {/* IDE Window */}
          <div className="tilt-card bg-[#0b1221] rounded-2xl border border-slate-700 shadow-[0_20px_50px_-15px_rgba(14,165,233,0.2)] overflow-hidden relative z-10 glow-card">
            <div className="flex items-center justify-between px-4 py-3 bg-[#111827] border-b border-slate-800">
              <div className="flex gap-2.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="text-xs text-slate-400 font-mono">etl_pipeline.py</div>
              <div className="w-12"></div>
            </div>
            <div className="p-6 font-mono text-sm md:text-[15px] leading-8 overflow-x-auto text-[#abb2bf]">
              <div className="flex hover:bg-white/[0.02] px-2 -mx-2 rounded"><span className="text-slate-600 w-8 select-none">1</span> <div><span className="text-purple-400">import</span> pandas <span className="text-purple-400">as</span> pd</div></div>
              <div className="flex hover:bg-white/[0.02] px-2 -mx-2 rounded"><span className="text-slate-600 w-8 select-none">2</span> <div><span className="text-purple-400">from</span> data_warehouse <span className="text-purple-400">import</span> BigQuery</div></div>
              <div className="flex hover:bg-white/[0.02] px-2 -mx-2 rounded"><span className="text-slate-600 w-8 select-none">3</span> <div></div></div>
              <div className="flex hover:bg-white/[0.02] px-2 -mx-2 rounded"><span className="text-slate-600 w-8 select-none">4</span> <div><span className="text-purple-400">class</span> <span className="text-yellow-300">DataEngineer</span>:</div></div>
              <div className="flex hover:bg-white/[0.02] px-2 -mx-2 rounded"><span className="text-slate-600 w-8 select-none">5</span> <div>&nbsp;&nbsp;<span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(<span className="text-red-400">self</span>):</div></div>
              <div className="flex hover:bg-white/[0.02] px-2 -mx-2 rounded"><span className="text-slate-600 w-8 select-none">6</span> <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">self</span>.name = <span className="text-emerald-400">"Duc Phat"</span></div></div>
              <div className="flex hover:bg-white/[0.02] px-2 -mx-2 rounded"><span className="text-slate-600 w-8 select-none">7</span> <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">self</span>.role = <span className="text-emerald-400">"Data Engineer & Analyst"</span></div></div>
              <div className="flex hover:bg-white/[0.02] px-2 -mx-2 rounded"><span className="text-slate-600 w-8 select-none">8</span> <div></div></div>
              <div className="flex hover:bg-white/[0.02] px-2 -mx-2 rounded"><span className="text-slate-600 w-8 select-none">9</span> <div>&nbsp;&nbsp;<span className="text-purple-400">def</span> <span className="text-blue-400">process_data</span>(<span className="text-red-400">self</span>, source_data):</div></div>
              <div className="flex hover:bg-white/[0.02] px-2 -mx-2 rounded"><span className="text-slate-600 w-8 select-none">10</span><div>&nbsp;&nbsp;&nbsp;&nbsp;df = pd.<span className="text-blue-400">clean</span>(source_data) <span className="text-slate-500"># ✨</span></div></div>
              <div className="flex hover:bg-white/[0.02] px-2 -mx-2 rounded"><span className="text-slate-600 w-8 select-none">11</span><div>&nbsp;&nbsp;&nbsp;&nbsp;BigQuery.<span className="text-blue-400">load</span>(df, dest=<span className="text-emerald-400">"analytics_db"</span>)</div></div>
              <div className="flex hover:bg-white/[0.02] px-2 -mx-2 rounded"><span className="text-slate-600 w-8 select-none">12</span><div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-emerald-400">"Insights ready! 🚀"</span></div></div>
              <div className="flex hover:bg-white/[0.02] px-2 -mx-2 rounded"><span className="text-slate-600 w-8 select-none">13</span><div></div></div>
              <div className="flex hover:bg-white/[0.02] px-2 -mx-2 rounded"><span className="text-slate-600 w-8 select-none">14</span><div>phat = <span className="text-yellow-300">DataEngineer</span>()</div></div>
              <div className="flex hover:bg-white/[0.02] px-2 -mx-2 rounded"><span className="text-slate-600 w-8 select-none">15</span><div>phat.<span className="text-blue-400">process_data</span>(raw_data)</div></div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-dev-primary/10 blur-[80px] -z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
