

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
          <div className="glass-panel rounded-2xl p-8 glow-card relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all"></div>
            <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Data Engineering</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-sm font-mono rounded-lg">Python</span>
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-sm font-mono rounded-lg">SQL</span>
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-sm font-mono rounded-lg">Apache Spark</span>
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-sm font-mono rounded-lg">Airflow / dbt</span>
            </div>
          </div>

          {/* Infrastructure Card */}
          <div className="glass-panel rounded-2xl p-8 glow-card relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-dev-primary/10 rounded-full blur-3xl group-hover:bg-dev-primary/20 transition-all"></div>
            <div className="w-12 h-12 bg-dev-primary/10 text-dev-primary rounded-xl flex items-center justify-center mb-6 border border-dev-primary/20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Infrastructure & Cloud</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-sm font-mono rounded-lg">AWS / GCP</span>
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-sm font-mono rounded-lg">BigQuery</span>
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-sm font-mono rounded-lg">Snowflake</span>
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-sm font-mono rounded-lg">Docker / Kafka</span>
            </div>
          </div>

          {/* Frontend Card */}
          <div className="glass-panel rounded-2xl p-8 glow-card relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all"></div>
            <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/20">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Analytics & BI</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-sm font-mono rounded-lg">Tableau</span>
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-sm font-mono rounded-lg">Power BI</span>
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-sm font-mono rounded-lg">Pandas</span>
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-sm font-mono rounded-lg">Metabase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
