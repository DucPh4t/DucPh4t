

const Contact = () => {
  return (
    <section id="contact" className="py-24 border-t border-slate-800/50 mb-20">
      <div className="reveal max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-mono mb-4"><span className="text-dev-primary">04.</span> <span className="text-slate-400">~/</span>Init_Connection</h2>
          <p className="text-slate-400">Have a question or want to work together? Run the script below.</p>
        </div>
        
        {/* Code-like Contact Form */}
        <div className="glass-panel rounded-xl border border-slate-700 shadow-2xl overflow-hidden">
          <div className="bg-[#161f33] px-4 py-3 border-b border-slate-700 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-600"></div>
              <div className="w-3 h-3 rounded-full bg-slate-600"></div>
              <div className="w-3 h-3 rounded-full bg-slate-600"></div>
            </div>
            <div className="text-xs text-slate-400 font-mono">send_message.sh</div>
          </div>
          
          <form className="p-6 font-mono text-sm space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-dev-primary flex items-center gap-2">
                <span className="text-green-400">$</span> const name = 
              </label>
              <input type="text" placeholder="'Enter your name'" className="bg-dev-bg border border-slate-700 text-white p-3 rounded focus:outline-none focus:border-dev-primary focus:ring-1 focus:ring-dev-primary transition-all placeholder:text-slate-600" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-dev-primary flex items-center gap-2">
                <span className="text-green-400">$</span> const email = 
              </label>
              <input type="email" placeholder="'Enter your email'" className="bg-dev-bg border border-slate-700 text-white p-3 rounded focus:outline-none focus:border-dev-primary focus:ring-1 focus:ring-dev-primary transition-all placeholder:text-slate-600" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-dev-primary flex items-center gap-2">
                <span className="text-green-400">$</span> const message = 
              </label>
              <textarea rows={4} placeholder="'Type your message here...'" className="bg-dev-bg border border-slate-700 text-white p-3 rounded focus:outline-none focus:border-dev-primary focus:ring-1 focus:ring-dev-primary transition-all placeholder:text-slate-600 resize-none"></textarea>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-slate-800">
              <span className="text-slate-500 text-xs">status: ready to compile</span>
              <button type="button" className="px-6 py-2 bg-dev-primary hover:bg-dev-secondary text-white rounded font-medium transition-colors shadow-[0_0_10px_rgba(14,165,233,0.3)] flex items-center gap-2">
                Run Script <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7-7m7-7H3"></path></svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
