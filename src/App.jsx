import { useState, useEffect } from 'react';
import gsap from 'gsap';

import { Dock, Navbar, Welcome, Home, QuickAccess } from '#components';
import { Safari, Terminal, Resume, Finder, Text, Image, Contact, Photo } from '#windows';


import { Draggable } from 'gsap/Draggable';
gsap.registerPlugin(Draggable);


function App() {

  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 639);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 639) {
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
      <QuickAccess />
      <Welcome isMobile={isMobile} />
      <Dock ismobile={isMobile} />

      <Terminal isMobile={isMobile} />
      <Safari isMobile={isMobile} />
      <Resume isMobile={isMobile} />
      <Finder isMobile={isMobile} />
      <Text isMobile={isMobile} />
      <Image isMobile={isMobile} />
      <Contact isMobile={isMobile} />
      <Photo isMobile={isMobile} />

      <Home isMobile={isMobile} />
    </main>
  )
}

export default App
