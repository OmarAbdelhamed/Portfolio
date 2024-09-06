import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { CanvasLoader } from '..';
import { motion } from 'framer-motion';
import { textVariant } from '../../utils/motion';
import { styles } from '../../styles';
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={4} rotationIntensity={0} floatIntensity={6}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 1]} />
      <directionalLight position={[0, 0, -1]} />
      <directionalLight position={[-1, 0, 0]} />
      <mesh scale={2.3}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
        <Decal
          position={[0, 0, -1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
        <Decal
          position={[1, 0, 0]}
          scale={1}
          map={decal}
          flatShading
        />
        <Decal
          position={[-1, 0, 0]}
          scale={1}
          map={decal}
          flatShading
        />

        <Decal
          position={[1, 0, 0]}
          // rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop='demand' gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enableRotate={false} autoRotate />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default BallCanvas;
