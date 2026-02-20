import { useState } from 'react';
import gsap from 'gsap';

import { Dock, Navbar, Welcome } from '#components';
import { Safari, Terminal, } from '#windows';

import { Draggable } from 'gsap/Draggable';
gsap.registerPlugin(Draggable);


function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock/>

      <Terminal />
      <Safari />
    </main>
  )
}

export default App
