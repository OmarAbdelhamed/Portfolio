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
import { fadeIn } from '../../utils/motion';
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={6}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 0, 1]} />
      <mesh scale={1.9}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color='#fff8eb' flatShading />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, index }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    >
      <Canvas
        frameloop='always'
        gl={{ preserveDrawingBuffer: true }}
        className='overflow-scroll'
      >
        <Suspense fallback={<CanvasLoader />}>
          <Ball imgUrl={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
    </motion.div>
  );
};
export default BallCanvas;
