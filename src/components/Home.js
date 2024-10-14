import React, { useRef, useEffect } from 'react';

// Default export
function Home() {
  const scrollableRef = useRef(null);

  // Sync the window scroll to the scrollable container
  useEffect(() => {
    const handleScroll = (event) => {
      if (scrollableRef.current) {
        // Programmatically scroll the container based on the window scroll
        scrollableRef.current.scrollTop += event.deltaY;
      }
    };

    // Add scroll event listener on the window
    window.addEventListener('wheel', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  // Scroll to the target section and bring it to the middle
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section && scrollableRef.current) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section
      id="home"
      className="no-scrollbar h-screen flex items-center justify-center"
      style={{
        backgroundColor: "#0022BB", // Change background to blue
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Left Section: Buttons */}
      <div className="w-1/5 text-black flex flex-col justify-center items-start p-8 space-y-4 ml-12 bg-white bg-opacity-50 rounded-2xl shadow-lg no-scrollbar">
        <h2 className="text-2xl font-bold mb-4">Navigate</h2>
        <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 text-lg">About</button>
        <button onClick={() => scrollToSection('work')} className="hover:text-blue-400 text-lg">Work Experience</button>
        <button onClick={() => scrollToSection('education')} className="hover:text-blue-400 text-lg">Educational Experience</button>
        <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 text-lg">Projects</button>
      </div>

      {/* Right Section: Scrollable Container */}
      <div
        ref={scrollableRef}
        className="no-scrollbar w-1/2 h-screen overflow-y-scroll p-8 bg-white bg-opacity-50 rounded-2xl shadow-lg ml-12"
        style={{
          paddingTop: '300px', // Add space above the scrollable container
          paddingBottom: '100px', // Add space below the scrollable container
          maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0))', // Fade effect at top and bottom
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0))' // For Webkit-based browsers
              }}
      >
        {/* About Section */}
        <section id="about" className="mb-8">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p>
            Hello! I am Michael Setji, a full-stack developer with experience in building scalable web applications. 
            I have a strong passion for coding, electrical engineering, and love working with modern technologies.
          </p>
        </section>

        {/* Work Experience Section */}
        <section id="work" className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Work Experience</h1>
          <p className="font-bold">Full-Stack Developer Internship | Setty & Associates (MEP Firm) | Washington, DC</p>
          <p>May - August 2024</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Developed full-stack features for SYYCLOPS, a digital twin platform for building management, using Python, JavaScript, TypeScript, SQL, and Neo4j.</li>
            <li>Created IoT integration, contributed to work order management, and 3D component visualization.</li>
            <li>Applied electrical engineering knowledge by incorporating data from voltage meters and other electrical components into the platform, providing real-time insights for improved building management.</li>
          </ul>
        </section>

        {/* Educational Experience Section */}
        <section id="education" className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Educational Experience</h1>
          <p className="font-bold">Duke University | Durham, NC</p>
          <p>B.S. in Electrical and Computer Engineering and Computer Science | GPA: 3.812/4.0</p>
          <p>Honors: Dean’s List 2024</p>
          <p>Relevant Courses: Signals and Systems, Data Structures and Algorithms, Engineering Design and Communication</p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Projects</h1>
          <p className="font-bold">RoboSub 2025 Competition | Duke Robotics</p>
          <p>August 2024 - Ongoing</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Designed PCBs for 3 ESCs to control thrusters as part of the electrical engineering team.</li>
            <li>Collaborated on integrating sensors, cameras, and sonar systems for real-time data processing and obstacle detection.</li>
          </ul>

          <p className="font-bold mt-4">Stripe Integration Web App | Personal Project</p>
          <p>June 2024 - August 2024</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Built a full-stack application using Next.js, React, and TypeScript, integrating Stripe APIs for billing and payment processing.</li>
            <li>Designed a responsive UI using Tailwind CSS, showcasing original photography.</li>
          </ul>

          <p className="font-bold mt-4">Autoclavable Biological Testing Stand | UL Solutions</p>
          <p>January 2024 - May 2024</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Decreased loading time for testing from 15 to 5 minutes while increasing safety and stability of the stand.</li>
            <li>Involved metalworking, CNC milling, and both metal and PLA 3D printing for the design and creation of the stand.</li>
          </ul>
        </section>
      </div>
    </section>
  );
}

export default Home;
