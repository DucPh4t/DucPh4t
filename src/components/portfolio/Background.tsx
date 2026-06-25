

const Background = () => {
  return (
    <>
      <div className="tech-grid-bg bg-mask fixed inset-0 z-0 pointer-events-none"></div>
      {/* Ambient background lights */}
      <div className="fixed top-[20%] left-[-10%] w-[500px] h-[500px] bg-dev-primary/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
    </>
  );
};

export default Background;
