import { useState } from 'react';
import ThreeCanvas from './three-canvas.jsx';
import Overlay from './overlay.jsx';

const QVisualizer = () => {
  //Oh wow, I am in way over my head on this one aren't I....
  const [temp, setTemp] = useState(0);

  return (
    <div className="h-screen w-full">
      <ThreeCanvas />
    </div>
  );
};

export default QVisualizer;

// <h1 className="text-6xl text-darkmode-text-imp1">TESKGhsuHAEUGHSIDUHGOv</h1>