import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Globe from 'three-globe';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';

interface ArcData {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
}

const randomLatLng = () => ({
  lat: Math.random() * 180 - 90,
  lng: Math.random() * 360 - 180,
});

const GlobeScene = () => {
  const globeRef = useRef<THREE.Group>(null);
  const globeInstanceRef = useRef<any>(null);

  const [arcs, setArcs] = useState<ArcData[]>([]);

  useEffect(() => {
    if (!globeRef.current) return;

    // Initialize Globe
    const globe = new Globe()
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
      .arcColor(() => ['#00ffff', '#0ff'])
      .arcDashLength(0.2)
      .arcDashGap(0.02)
      .arcDashAnimateTime(4000);

    globeRef.current.add(globe);
    globeInstanceRef.current = globe;

    // Update arcs every 3 seconds
    const updateArcs = () => {
      const newArcs: ArcData[] = Array.from({ length: Math.floor(Math.random() * 2) + 2 }).map(() => {
        const start = randomLatLng();
        const end = randomLatLng();
        return { startLat: start.lat, startLng: start.lng, endLat: end.lat, endLng: end.lng };
      });
      setArcs(newArcs);
      globe.arcsData(newArcs);
    };

    updateArcs();
    const interval = setInterval(updateArcs, 3000);

    return () => {
      clearInterval(interval);
      globeRef.current?.remove(globe);
    };
  }, []);

  return <group ref={globeRef} />;
};

const ThreeGlobeWrapper = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Globe Canvas */}
      <Canvas camera={{ position: [0, 0, 300] }} className="absolute top-0 left-0 w-full h-full">
        <ambientLight intensity={0.5} />
        <pointLight position={[100, 100, 100]} />
        <GlobeScene />
      </Canvas>

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
        >
          Connect Globally. Meet Seamlessly.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl drop-shadow-md"
        >
          MeetMux lets you host high-quality meetings anywhere, anytime. Experience real-time collaboration like never before.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex gap-4"
        >
          <button className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition">
            Get Started
          </button>
          <button className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ThreeGlobeWrapper;
