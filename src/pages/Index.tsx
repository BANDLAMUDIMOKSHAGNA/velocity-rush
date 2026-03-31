const Index = () => {
  return (
    <iframe
      src="/game.html"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        border: 'none',
      }}
      title="Monoposto GP"
      allowFullScreen
    />
  );
};

export default Index;
