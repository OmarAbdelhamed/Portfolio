import { PointMaterial, Points, Preload } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';

import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props) => {
  const ref = useRef();

  const sphere = random.inSphere(new Float32Array(3000), { radius: 1.2 });

  for (let i = 0; i < sphere.length; i++) {
    if (!isFinite(sphere[i])) {
      console.error(`NaN found at index ${i}`, sphere[i]);
      sphere[i] = 0; // Set to a default valid number
    }
  }

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 60;
    ref.current.rotation.y -= delta / 90;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1] '>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
