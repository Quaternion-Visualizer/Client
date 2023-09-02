import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Sphere = ({setQ}) => {
  const meshRef = useRef();
  const q = new THREE.Quaternion();

  useFrame(() => {
    const deltaTime = 0.01;
    q.setFromAxisAngle(new THREE.Vector3(1, 1, 0), deltaTime);
    setQ(q)
    meshRef.current.quaternion.multiply(q);
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 36, 18]} />
      <meshBasicMaterial color={0xFF6347} wireframe={true}/>
    </mesh>
  );
};

export default Sphere;