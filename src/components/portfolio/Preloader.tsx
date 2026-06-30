import { useEffect, useState } from 'react';

const BOOT_LOGS = [
  "Initializing kernel...",
  "Loading core modules... [OK]",
  "Mounting virtual file systems... [OK]",
  "Starting network interface... [OK]",
  "Establishing secure connection... [OK]",
  "Boot sequence complete. System ready."
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
        currentLogIndex++;
        setTimeout(addLog, Math.random() * 200 + 100); // Random delay between 100-300ms
      } else {
        // All logs loaded, show cursor
        setTimeout(() => setShowCursorLine(true), 300);
        
        // Hide preloader after a short delay
        setTimeout(() => {
          setIsHidden(true);
          // Unmount entirely after transition finishes (600ms matching CSS)
          setTimeout(() => setIsUnmounted(true), 600);
        }, 1500);
      }
    };

    // Start boot sequence
    const timeout = setTimeout(addLog, 400);

    return () => clearTimeout(timeout);
  }, []);

  if (isUnmounted) return null;

  return (
    <div id="preloader" className={isHidden ? 'preloader-hidden' : ''}>
      <div className="max-w-3xl mx-auto w-full">
        <div className="mb-6 text-dev-primary text-xl font-bold border-b border-slate-800 pb-2 inline-block">
          DucPhat_OS v2.0.26
        </div>
        
        <div id="boot-logs" className="text-sm md:text-base space-y-1.5 text-emerald-500/80 font-mono">
          {logs.map((log, index) => (
            <div key={index}>{log}</div>
          ))}
        </div>
        
        <div 
          id="boot-cursor-line" 
          className={`mt-4 flex items-center font-mono transition-opacity duration-300 ${showCursorLine ? 'opacity-100' : 'opacity-0'}`}
        >
          <span className="text-white font-bold">root@system:~$</span>
          <span className="w-2.5 h-5 bg-slate-300 ml-2 animate-blink inline-block"></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
