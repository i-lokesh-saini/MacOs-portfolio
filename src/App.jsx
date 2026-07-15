import { useState } from 'react';
import gsap from 'gsap';

import { Dock, Navbar, Welcome, Home } from '#components';
import { Safari, Terminal, Resume, Finder, Text, Image, Contact, Photo } from '#windows';


import { Draggable } from 'gsap/Draggable';
gsap.registerPlugin(Draggable);


function App() {

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
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
