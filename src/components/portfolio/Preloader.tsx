import { useEffect, useState } from 'react';

const BOOT_LOGS = [
  "$ ssh guest@ducphat.dev -p 22",
  "Connecting to ducphat.dev (104.21.78.12) port 22...",
  "Connection established. Local port: 52402.",
  "SSH-2.0-OpenSSH_9.0p1 Debian-1ubuntu0.3",
  "Exchange key... ECDSA-SHA256 [OK]",
  "Initializing secure tunnel... [SUCCESS] (12ms)",
  "guest@ducphat.dev's password: ••••••••••••",
  "Access Granted. Initializing tty terminal session...",
  "--------------------------------------------------",
  "  Welcome to DucPhat_OS v2.0.26 (GNU/Linux)",
  "--------------------------------------------------",
  "System Load: 0.12 | Network: Connected | Ping: 12ms",
  "Loading modules: [Hero, About, Stack, Projects]...",
  "Connection complete. Redirecting to GUI..."
];

const Preloader = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [showCursorLine, setShowCursorLine] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  useEffect(() => {
    let currentLogIndex = 0;
    
    // Function to add logs one by one
    const addLog = () => {
      if (currentLogIndex < BOOT_LOGS.length) {
        setLogs(prev => [...prev, BOOT_LOGS[currentLogIndex]]);
        
        // Simulating realistic pauses:
        // - Typing the initial ssh command takes longer
        // - Entering the password takes a realistic moment
        // - Establishing key exchange takes a short delay
        let nextDelay = 120;
        if (currentLogIndex === 0) nextDelay = 800;      // Typing command
        else if (currentLogIndex === 5) nextDelay = 600; // Entering password
        else if (currentLogIndex === 6) nextDelay = 700; // Access granted animation delay
        else if (currentLogIndex === 10) nextDelay = 500; // Loading components delay
        
        currentLogIndex++;
        setTimeout(addLog, nextDelay + Math.random() * 80);
      } else {
        // All logs loaded, show cursor
        setTimeout(() => setShowCursorLine(true), 200);
        
        // Hide preloader after a short delay
        setTimeout(() => {
          setIsHidden(true);
          // Unmount entirely after transition finishes (600ms matching CSS)
          setTimeout(() => setIsUnmounted(true), 600);
        }, 1200);
      }
    };

    // Start boot sequence
    const timeout = setTimeout(addLog, 400);

    return () => clearTimeout(timeout);
  }, []);

  if (isUnmounted) return null;

  const renderLog = (log: string) => {
    if (log.startsWith("$")) {
      return (
        <div>
          <span className="text-dev-primary font-bold">$</span> <span className="text-white font-medium">{log.substring(2)}</span>
        </div>
      );
    }
    if (log.includes("Access Granted")) {
      return (
        <div className="text-emerald-400 font-semibold">{log}</div>
      );
    }
    if (log.includes("[OK]") || log.includes("[SUCCESS]")) {
      return (
        <div>
          {log.split(/(\[OK\]|\[SUCCESS\])/).map((part, i) => {
            if (part === "[OK]" || part === "[SUCCESS]") {
              return <span key={i} className="text-emerald-400 font-bold">{part}</span>;
            }
            return <span key={i}>{part}</span>;
          })}
        </div>
      );
    }
    if (log.startsWith("---") || log.includes("Welcome to")) {
      return <div className="text-dev-primary font-bold">{log}</div>;
    }
    return <div>{log}</div>;
  };

  return (
    <div id="preloader" className={isHidden ? 'preloader-hidden' : ''}>
      <div className="max-w-3xl mx-auto w-full">
        <div className="mb-6 text-dev-primary text-xl font-bold border-b border-slate-800 pb-2 inline-block font-mono">
          DucPhat_OS v2.0.26
        </div>
        
        <div id="boot-logs" className="text-xs sm:text-sm md:text-base space-y-1.5 text-slate-400 font-mono">
          {logs.map((log, index) => (
            <div key={index}>{renderLog(log)}</div>
          ))}
        </div>
        
        <div 
          id="boot-cursor-line" 
          className={`mt-4 flex items-center font-mono transition-opacity duration-300 ${showCursorLine ? 'opacity-100' : 'opacity-0'}`}
        >
          <span className="text-white font-bold">guest@ducphat:~$</span>
          <span className="w-2.5 h-5 bg-slate-300 ml-2 animate-blink inline-block"></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
