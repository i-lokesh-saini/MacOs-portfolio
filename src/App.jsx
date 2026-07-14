import { useState } from 'react';
import gsap from 'gsap';

import { Dock, Navbar, Welcome } from '#components';
import { Safari, Terminal, Resume, Finder } from '#windows';


import { Draggable } from 'gsap/Draggable';
gsap.registerPlugin(Draggable);


function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
    </main>
  )
}

export default App
