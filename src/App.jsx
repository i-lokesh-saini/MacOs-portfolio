import { useState } from 'react';
import gsap from 'gsap';

import { Dock, Navbar, Welcome } from '#components';
import { Terminal } from '#windows';

import { Draggable } from 'gsap/Draggable';
import TerminalWindow from '#windows/Terminal';
gsap.registerPlugin(Draggable);


function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock/>

      <TerminalWindow />
    </main>
  )
}

export default App
