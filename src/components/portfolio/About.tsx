

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
            
            {/* Git commit style timeline */}
            <div className="mt-8 space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-dev-primary bg-dev-bg z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)] glass-panel p-4 rounded-xl">
                  <div className="text-dev-primary font-mono text-xs mb-1">commit: 2023 - Present</div>
                  <div className="text-white font-semibold">Data Engineer</div>
                  <div className="text-sm mt-2 text-slate-400">Designing and maintaining scalable ETL pipelines, optimizing Data Warehouse architecture.</div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-slate-600 bg-dev-bg z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)] border border-slate-800/50 bg-dev-surface/30 p-4 rounded-xl">
                  <div className="text-slate-500 font-mono text-xs mb-1">commit: 2021 - 2023</div>
                  <div className="text-slate-300 font-semibold">Data Analyst</div>
                  <div className="text-sm mt-2 text-slate-400">Created BI dashboards and performed statistical analysis to drive business strategies.</div>
                </div>
              </div>

            </div>
          </div>
          
          {/* Terminal CLI Visual */}
          <div className="md:col-span-5 bg-dev-surface rounded-xl border border-slate-700 overflow-hidden shadow-2xl glow-card">
            <div className="bg-[#161f33] px-4 py-3 border-b border-slate-700 flex items-center gap-2">
              <span className="text-slate-400 text-xs font-mono">bash -- sys_info</span>
            </div>
            <div className="p-6 font-mono text-sm text-slate-300 leading-loose">
              <div className="mb-4">
                <span className="text-emerald-400">guest@ducphat</span>:<span className="text-blue-400">~</span>$ curl -X GET api.ducphat.dev/me
                <br />
                <span className="text-slate-400">{'{'}</span>
                <br />
                &nbsp;&nbsp;<span className="text-cyan-300">"status"</span>: <span className="text-emerald-400">"☕️ Converting coffee to code"</span>,
                <br />
                &nbsp;&nbsp;<span className="text-cyan-300">"location"</span>: <span className="text-emerald-400">"Earth, Solar System"</span>,
                <br />
                &nbsp;&nbsp;<span className="text-cyan-300">"passions"</span>: <span className="text-slate-300">[</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">"System Architecture"</span>,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">"Performance Optimization"</span>,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">"Clean Code"</span>
                <br />
                &nbsp;&nbsp;<span className="text-slate-300">]</span>,
                <br />
                &nbsp;&nbsp;<span className="text-cyan-300">"ping"</span>: <span className="text-emerald-400">"12ms"</span>
                <br />
                <span className="text-slate-400">{'}'}</span>
              </div>
              <div>
                <span className="text-emerald-400">guest@ducphat</span>:<span className="text-blue-400">~</span>$ <span className="animate-blink bg-slate-400 text-transparent">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
