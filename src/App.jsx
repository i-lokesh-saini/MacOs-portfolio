import { useState, useEffect } from 'react';
import gsap from 'gsap';

import { Dock, Navbar, Welcome, Home, QuickAccess } from '#components';
import { Safari, Terminal, Resume, Finder, Text, Image, Contact, Photo } from '#windows';


import { Draggable } from 'gsap/Draggable';
gsap.registerPlugin(Draggable);


function App() {

  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Check on initial render
    checkScreenSize();

    // Listen for window resize
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
  // console.log(isMobile);


  return (
    <main>
      <Navbar isMobile={isMobile} />
      {/* <QuickAccess /> */}
      <Welcome isMobile={isMobile} />
      <Dock />

      <Terminal />
      {/* <Safari /> */}
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Photo />

      <Home />
    </main>
  )
}

export default App
