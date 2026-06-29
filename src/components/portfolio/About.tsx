

const About = () => {
  return (
    <section id="about" className="py-24 border-t border-slate-800/50">
      <div className="reveal">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-mono"><span className="text-dev-primary">01.</span> <span className="text-slate-400">~/</span>About</h2>
          <div className="h-[1px] bg-slate-800 flex-1"></div>
        </div>
        
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Text & Git History */}
          <div className="md:col-span-7 space-y-8 text-dev-text text-lg leading-relaxed">
            <p>
              I am a data professional passionate about turning raw information into actionable insights. My journey evolved from analyzing datasets to architecting end-to-end data pipelines that empower business decisions at scale.
            </p>
            
            {/* Git commit style timeline (Optimized CSS) */}
            <div className="mt-12 relative before:absolute before:inset-0 before:ml-[11px] md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-dev-primary before:via-slate-700 before:to-transparent">
              
              {/* Timeline Item 1 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-8">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-dev-bg bg-dev-primary z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(14,165,233,0.6)]"></div>
                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] glass-panel p-5 rounded-xl border-dev-primary/30 transition-transform duration-300 hover:-translate-y-1">
                  <div className="text-dev-primary font-mono text-xs mb-1.5 font-semibold">commit: 2023 - Present</div>
                  <div className="text-white font-bold text-lg">Data Engineer</div>
                  <div className="text-[15px] mt-2 text-slate-400 leading-snug">Designing and maintaining scalable ETL pipelines, optimizing Data Warehouse architecture.</div>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-dev-bg bg-slate-600 z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors group-hover:bg-slate-400"></div>
                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] border border-slate-800/80 bg-dev-surface/50 p-5 rounded-xl transition-transform duration-300 hover:-translate-y-1">
                  <div className="text-slate-500 font-mono text-xs mb-1.5">commit: 2021 - 2023</div>
                  <div className="text-slate-300 font-bold text-lg">Data Analyst</div>
                  <div className="text-[15px] mt-2 text-slate-400 leading-snug">Created BI dashboards and performed statistical analysis to drive business strategies.</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Terminal CLI Visual */}
          <div className="md:col-span-5 tilt-wrapper">
            <div className="tilt-card bg-black rounded-xl border border-slate-700/80 overflow-hidden shadow-2xl glow-card">
                <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-700 flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <span className="text-slate-400 text-xs font-mono">bash -- sys_info</span>
                    <div className="w-12"></div>
                </div>
                <div className="p-6 font-mono text-[13px] sm:text-sm text-slate-300 leading-relaxed overflow-x-auto">
                    <div className="mb-4">
                        <span className="text-emerald-400 font-bold">guest@ducphat</span>:<span className="text-blue-400 font-bold">~</span>$ curl -X GET api.ducphat.dev/me
                        <br />
                        <span className="text-yellow-300">{'{'}</span>
                        <br />
                        &nbsp;&nbsp;<span className="text-code-function">"status"</span>: <span className="text-code-string">"☕️ Converting coffee to code"</span>,
                        <br />
                        &nbsp;&nbsp;<span className="text-code-function">"location"</span>: <span className="text-code-string">"Earth, Solar System"</span>,
                        <br />
                        &nbsp;&nbsp;<span className="text-code-function">"passions"</span>: <span className="text-purple-400">[</span>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-code-string">"System Architecture"</span>,
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-code-string">"Performance Optimization"</span>,
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-code-string">"Clean Code"</span>
                        <br />
                        &nbsp;&nbsp;<span className="text-purple-400">]</span>,
                        <br />
                        &nbsp;&nbsp;<span className="text-code-function">"ping"</span>: <span className="text-orange-400">"12ms"</span>
                        <br />
                        <span className="text-yellow-300">{'}'}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-emerald-400 font-bold">guest@ducphat</span>:<span className="text-blue-400 font-bold">~</span>$ <span className="w-2 h-4 bg-slate-400 animate-blink ml-1 inline-block"></span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
