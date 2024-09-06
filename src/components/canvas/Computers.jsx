import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { CanvasLoader } from '..';
import { pc } from '../../assets';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <>
      <Float speed={1} rotationIntensity={1} floatIntensity={1}>
        <hemisphereLight intensity={2} groundColor='black' />
        <pointLight intensity={3} />
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.5 : 0.75}
          position={isMobile ? [0, -2, -1.5] : [0, -2, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </Float>
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 800px)');

    setMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setMobile(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  return isMobile ? (
    <img src={pc} alt='pc' className='w-full h-full object-contain pt-[200px]' />
  ) : (
    <Canvas camera={{ position: [20, 3, 5], fov: 25 }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
