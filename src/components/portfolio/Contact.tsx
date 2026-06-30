import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [logs, setLogs] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus('sending');
    setLogs([
      "$ ./send_message.sh",
      "Compiling input variables...",
      `Name: "${name}"`,
      `Email: "${email}"`,
      "Connecting to Web3Forms API..."
    ]);

    // Simulating compiler delay
    await new Promise(resolve => setTimeout(resolve, 800));

    try {
      // Reads from VITE_WEB3FORMS_ACCESS_KEY in .env file, falls back to placeholder
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey, 
          name: name,
          email: email,
          message: message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setLogs(prev => [
          ...prev,
          "Establishing handshake... [OK]",
          "Transferring payload... [OK]",
          "Response code: 200 (Success)",
          "[SUCCESS] Message sent! I will get back to you soon."
        ]);
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error(result.message || "Failed to send");
      }
    } catch (err: any) {
      setLogs(prev => [
        ...prev,
        "Establishing handshake... [FAILED]",
        `[ERROR] ${err.message || 'Unknown network error'}`,
        "Please try again or check your access key configuration."
      ]);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-800/50 mb-20">
      <div className="reveal max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-mono mb-4">
            <span className="text-dev-primary">04.</span> <span className="text-slate-400">~/</span>Init_Connection
          </h2>
          <p className="text-slate-400 font-mono text-sm">Have a question or want to work together? Run the script below.</p>
        </div>
        
        {/* Code-like Contact Form */}
        <div className="glass-panel rounded-xl border border-slate-700 shadow-2xl overflow-hidden">
          <div className="bg-[#161f33] px-4 py-3 border-b border-slate-700 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="text-xs text-slate-400 font-mono">send_message.sh</div>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 font-mono text-sm space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-dev-primary flex items-center gap-2">
                <span className="text-green-400">$</span> const name = 
              </label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={status === 'sending'}
                placeholder="'Enter your name'" 
                className="bg-dev-bg border border-slate-700 text-white p-3 rounded focus:outline-none focus:border-dev-primary focus:ring-1 focus:ring-dev-primary transition-all placeholder:text-slate-600" 
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-dev-primary flex items-center gap-2">
                <span className="text-green-400">$</span> const email = 
              </label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === 'sending'}
                placeholder="'Enter your email'" 
                className="bg-dev-bg border border-slate-700 text-white p-3 rounded focus:outline-none focus:border-dev-primary focus:ring-1 focus:ring-dev-primary transition-all placeholder:text-slate-600" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-dev-primary flex items-center gap-2">
                <span className="text-green-400">$</span> const message = 
              </label>
              <textarea 
                rows={4} 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                disabled={status === 'sending'}
                placeholder="'Type your message here...'" 
                className="bg-dev-bg border border-slate-700 text-white p-3 rounded focus:outline-none focus:border-dev-primary focus:ring-1 focus:ring-dev-primary transition-all placeholder:text-slate-600 resize-none"
              />
            </div>

            {/* Terminal log panel during sending or success */}
            {status !== 'idle' && (
              <div className="p-4 bg-[#05080f] rounded-lg border border-slate-800 font-mono text-xs text-slate-400 space-y-1.5 overflow-x-auto">
                {logs.map((log, i) => (
                  <div key={i} className={
                    log.startsWith("$") ? "text-dev-primary font-bold" :
                    log.includes("[OK]") || log.includes("[SUCCESS]") ? "text-emerald-400 font-semibold" :
                    log.includes("[ERROR]") || log.includes("[FAILED]") ? "text-red-400 font-semibold" : ""
                  }>
                    {log}
                  </div>
                ))}
              </div>
            )}

            <div className="pt-4 flex items-center justify-between border-t border-slate-800">
              <span className="text-slate-500 text-xs">
                status: {status === 'idle' ? 'ready to compile' : status === 'sending' ? 'compiling & sending...' : status}
              </span>
              <button 
                type="submit" 
                disabled={status === 'sending' || !name || !email || !message}
                className="px-6 py-2 bg-dev-primary hover:bg-dev-secondary disabled:bg-slate-800 disabled:text-slate-500 disabled:border-slate-700 text-white rounded font-medium transition-all shadow-[0_0_10px_rgba(14,165,233,0.3)] flex items-center gap-2"
              >
                {status === 'sending' ? 'Running...' : 'Run Script'} 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7-7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
