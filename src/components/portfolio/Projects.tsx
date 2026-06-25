import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 border-t border-slate-800/50">
      <div className="reveal">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-mono"><span className="text-dev-primary">03.</span> <span className="text-slate-400">~/</span>Builds</h2>
          <div className="h-[1px] bg-slate-800 flex-1"></div>
        </div>

        <div className="space-y-32">
          {/* Project 1 */}
          <div className="relative grid lg:grid-cols-12 gap-8 items-center reveal">
            <div className="lg:col-span-7 relative group z-10">
              <div className="rounded-xl overflow-hidden border border-slate-700 bg-dev-surface shadow-2xl glow-card">
                <div className="bg-[#161f33] px-4 py-2 border-b border-slate-700 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  <div className="mx-auto text-[10px] text-slate-500 font-mono bg-slate-800/50 px-4 py-1 rounded-md">airflow/dags/pipeline</div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-dev-primary/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-500"></div>
                  <img src="https://placehold.co/800x500/111827/0ea5e9?text=Real-time+Data+Pipeline" alt="Project 1" className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 lg:text-right relative z-20">
              <div className="inline-flex items-center gap-2 px-2 py-1 rounded border border-green-500/20 bg-green-500/10 text-green-400 text-[10px] font-mono mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Production
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 hover:text-dev-primary transition-colors cursor-pointer">Real-time Data Pipeline</h3>
              <div className="glass-panel p-6 rounded-xl shadow-xl text-slate-300 text-sm leading-relaxed mb-6 lg:-ml-12 border border-slate-700/50 backdrop-blur-xl relative">
                Designed and deployed a scalable ETL pipeline processing over 5 million streaming events per day. Utilized Kafka for ingestion and Spark for real-time transformations before loading into BigQuery.
              </div>
              <ul className="flex flex-wrap lg:justify-end gap-3 font-mono text-xs text-slate-400 mb-6">
                <li className="text-dev-primary">Python</li>
                <li className="text-dev-primary">Kafka</li>
                <li className="text-dev-primary">Spark</li>
                <li className="text-dev-primary">BigQuery</li>
              </ul>
              <div className="flex items-center lg:justify-end gap-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path></svg></a>
                <a href="#" className="text-slate-400 hover:text-dev-primary transition-colors" aria-label="External"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="relative grid lg:grid-cols-12 gap-8 items-center reveal">
            <div className="lg:col-span-5 relative z-20 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-2 py-1 rounded border border-blue-500/20 bg-blue-500/10 text-blue-400 text-[10px] font-mono mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Analytics
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 hover:text-dev-primary transition-colors cursor-pointer">Customer Insights Dashboard</h3>
              <div className="glass-panel p-6 rounded-xl shadow-xl text-slate-300 text-sm leading-relaxed mb-6 lg:-mr-12 border border-slate-700/50 backdrop-blur-xl relative z-30">
                Built an automated BI reporting system connecting Snowflake data warehouse to Power BI. Automated daily ELT jobs using dbt, reducing report generation time from hours to minutes.
              </div>
              <ul className="flex flex-wrap gap-3 font-mono text-xs text-slate-400 mb-6">
                <li className="text-dev-primary">dbt</li>
                <li className="text-dev-primary">Snowflake</li>
                <li className="text-dev-primary">Power BI</li>
                <li className="text-dev-primary">SQL</li>
              </ul>
              <div className="flex items-center gap-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path></svg></a>
              </div>
            </div>
            
            <div className="lg:col-span-7 relative group z-10 order-1 lg:order-2">
              <div className="rounded-xl overflow-hidden border border-slate-700 bg-black shadow-2xl glow-card p-4 h-[300px] flex flex-col">
                <div className="text-xs font-mono text-slate-500 mb-2 border-b border-slate-800 pb-2">Terminal - dbt run</div>
                <div className="font-mono text-[13px] text-green-400 leading-relaxed overflow-hidden">
                  {'>'} dbt run --select models/marts/analytics<br />
                  <span className="text-slate-400">10:15:00 | 1 of 3 START table model analytics.customer_churn... [RUN]</span><br />
                  <span className="text-slate-400">10:15:05 | 1 of 3 OK created table model analytics.customer_churn... [OK in 5.02s]</span><br />
                  <span className="text-slate-400">10:15:05 | 2 of 3 START view model analytics.sales_metrics... [RUN]</span><br />
                  <span className="text-slate-400">10:15:06 | 2 of 3 OK created view model analytics.sales_metrics... [OK in 1.15s]</span><br />
                  <span className="text-yellow-400">10:15:06 | 3 of 3 START incremental model analytics.daily_events... [RUN]</span><br />
                  <span className="text-green-400">10:15:08 | Completed successfully.</span><br />
                  <span className="animate-blink text-white">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
