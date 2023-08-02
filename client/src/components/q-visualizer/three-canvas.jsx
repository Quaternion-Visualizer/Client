import { Canvas } from '@react-three/fiber';
import { Stats, OrbitControls } from '@react-three/drei'

import { useRef } from 'react';

const ThreeCanvas = () => {

  const meshRef = useRef();

  return (
    <section className="h-full w-full bg-background_color">
      <Canvas camera={{position: [0, 0, 30]}}>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />

        <gridHelper args={[200, 50]}/>

        <mesh>
          <sphereGeometry args={[15, 32, 16]} />
          <meshBasicMaterial color={0xFF6347} wireframe={true}/>
        </mesh>

        <OrbitControls />
        <Stats />
      </Canvas>
    </section>
  );
};

export default ThreeCanvas;