

// Default export
function Home() {
    return (
      <section id="home" className="h-screen bg-blue-500 flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold">Hello, I'm Michael!</h1>
      </section>
    );
  }
  
  // Named export for other components/functions
  export function About() {
    return <div>This is another section on the same page.</div>;
  }
  
  export default Home;  // Only one default export per file
  