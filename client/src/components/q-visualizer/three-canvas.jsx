import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Stats, OrbitControls } from '@react-three/drei'

import katex from 'katex';

import { useState, useEffect ,useRef } from 'react';

import Overlay from './overlay.jsx';
import Line from './line.jsx';
import Sphere from './rotating-sphere.jsx';

const getAxisFromQuaternion = (q) => {
  let s = 1;
  if (!(1 - q.w * q.w < Number.MIN_VALUE)) {
    s = Math.sqrt(1 - q.w * q.w);
  };
  return new THREE.Vector3(q.x / s, q.y / s, q.z / s);
};

const getRadianFromQuaternion = (q) => {
  return 2 * Math.acos( q.w );
};

const v_up = new THREE.Vector3(0, 1, 0);

const ThreeCanvas = () => {
  const [rotation, setRotation] = useState([0,0,0]);
  const [q, setQ] = useState({});

  const meshRef = useRef();

  const frame = 0;

  //rotation animation loop
  useEffect(() => {
    setTimeout(() => {
      setRotation((rotation) => {
        return rotation.map((i) => { return i + 0.01; });
      });
    }, 18);
  });

  useEffect(() => {
    const angle1 = frame / 60;
    const angle2 = 0.75 - 0.75 * angle1; //1 - Math.abs(0.5 - (a1 * 4 % 1)) / 0.5;
    const angle3 = angle1 * 1 % 1;
    const angle4 = angle1 * 6 % 1;

    const v_axis = v_up.clone();
    const euler = new THREE.Euler();
    euler.y = Math.PI / 180 * ( 180 * angle2)
    euler.z = Math.PI / 180 * (360 * angle3);

    v_axis.applyEuler(euler);

    const q1 = new THREE.Quaternion();
    q1.setFromUnitVectors(v_up, v_axis);
  });

  return (
    <section className="h-full w-full bg-black">
      <Overlay q={q}/>

      <Canvas camera={{position: [0, 0, 6]}}>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />

        <gridHelper args={[10 , 10, 0xFFFFFF, 0x666666]}/>

        <Sphere setQ={setQ}/>


        <Line start={[0, -5, 0]} end={[0, 5, 0]} />

        <OrbitControls />
      </Canvas>
    </section>
  );
};

export default ThreeCanvas;

// <mesh rotation={rotation}>
//           <sphereGeometry args={[1, 36, 18]} />
//           <meshBasicMaterial color={0xFF6347} wireframe={true}/>
//         </mesh>


{/* <arrowHelper length={1}/> */}