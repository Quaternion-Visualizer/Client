import * as THREE from 'three';
import { useState } from 'react';


const Overlay = (q) => {

  // const [w, setW] = useState(0);
  // const [i, setI] = useState(0);
  // const [j, setJ] = useState(0);
  // const [k, setK] = useState(0);

  return (
    <div className="absolute">
      <div className="text-3xl p-12">
        <span className="text-white">q = </span>
        <span className="text-white">1.00 </span>
        <span className="text-white">+ </span>
        <span className="text-white">0.00i </span>
        <span className="text-white">+ </span>
        <span className="text-white">0.00j </span>
        <span className="text-white">+ </span>
        <span className="text-white">0.00k </span>
      </div>
    </div>
  );
};

export default Overlay;