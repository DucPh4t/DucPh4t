

const Skills = () => {
  return (
    <section id="skills" className="py-24 border-t border-slate-800/50">
      <div className="reveal">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-mono"><span className="text-dev-primary">02.</span> <span className="text-slate-400">~/</span>Tech_Stack</h2>
          <div className="h-[1px] bg-slate-800 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Backend Architecture Card */}
          <div className="glass-panel rounded-2xl p-8 glow-card overflow-hidden group hover:bg-[#152033] transition-colors duration-300 border border-slate-700/50">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-transparent text-blue-400 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20 shadow-inner group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-5 tracking-wide">Data Engineering</h3>
            <div className="flex flex-wrap gap-2.5">
              <span className="px-3 py-1.5 bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono rounded-md hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default shadow-sm">Python</span>
              <span className="px-3 py-1.5 bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono rounded-md hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default shadow-sm">SQL</span>
              <span className="px-3 py-1.5 bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono rounded-md hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default shadow-sm">Apache Spark</span>
              <span className="px-3 py-1.5 bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono rounded-md hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default shadow-sm">Airflow / dbt</span>
            </div>
          </div>

          {/* Infrastructure Card */}
          <div className="glass-panel rounded-2xl p-8 glow-card overflow-hidden group hover:bg-[#152033] transition-colors duration-300 border border-slate-700/50">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-dev-primary/10 rounded-full blur-3xl group-hover:bg-dev-primary/20 transition-all duration-500"></div>
            <div className="w-14 h-14 bg-gradient-to-br from-dev-primary/20 to-transparent text-dev-primary rounded-xl flex items-center justify-center mb-6 border border-dev-primary/20 shadow-inner group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-5 tracking-wide">Infrastructure & Cloud</h3>
            <div className="flex flex-wrap gap-2.5">
              <span className="px-3 py-1.5 bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono rounded-md hover:border-dev-primary hover:text-dev-primary transition-colors cursor-default shadow-sm">AWS / GCP</span>
              <span className="px-3 py-1.5 bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono rounded-md hover:border-dev-primary hover:text-dev-primary transition-colors cursor-default shadow-sm">BigQuery</span>
              <span className="px-3 py-1.5 bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono rounded-md hover:border-dev-primary hover:text-dev-primary transition-colors cursor-default shadow-sm">Snowflake</span>
              <span className="px-3 py-1.5 bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono rounded-md hover:border-dev-primary hover:text-dev-primary transition-colors cursor-default shadow-sm">Docker / Kafka</span>
            </div>
          </div>

          {/* Frontend Card */}
          <div className="glass-panel rounded-2xl p-8 glow-card overflow-hidden group hover:bg-[#152033] transition-colors duration-300 border border-slate-700/50">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-500"></div>
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-transparent text-emerald-400 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/20 shadow-inner group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-5 tracking-wide">Analytics & BI</h3>
            <div className="flex flex-wrap gap-2.5">
              <span className="px-3 py-1.5 bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono rounded-md hover:border-emerald-400 hover:text-emerald-400 transition-colors cursor-default shadow-sm">Tableau</span>
              <span className="px-3 py-1.5 bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono rounded-md hover:border-emerald-400 hover:text-emerald-400 transition-colors cursor-default shadow-sm">Power BI</span>
              <span className="px-3 py-1.5 bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono rounded-md hover:border-emerald-400 hover:text-emerald-400 transition-colors cursor-default shadow-sm">Pandas</span>
              <span className="px-3 py-1.5 bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono rounded-md hover:border-emerald-400 hover:text-emerald-400 transition-colors cursor-default shadow-sm">Metabase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
