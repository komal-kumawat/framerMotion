import { useEffect, useRef } from 'react';
import Globe, { type GlobeInstance } from 'globe.gl';
import * as THREE from 'three';

interface ArcData {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
}

const GlobeComponent: React.FC = () => {
  const globeContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!globeContainer.current) return;

    const arcs: ArcData[] = [
      { startLat: 37.7749, startLng: -122.4194, endLat: 51.5074, endLng: -0.1278 },
      { startLat: 40.7128, startLng: -74.0060, endLat: 48.8566, endLng: 2.3522 },
    ];

    // Use `new Globe(...)` instead of calling Globe as a function
    const globe: GlobeInstance = new Globe(globeContainer.current)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
      .arcsData(arcs)
      .arcColor(() => ['#00ffff', '#0ff'])
      .arcDashLength(0.3)
      .arcDashGap(0.02)
      .arcDashAnimateTime(1000)
      .backgroundColor('#0d0d0d');

    // Cleanup on unmount
    return () => {
      if (globeContainer.current) {
        while (globeContainer.current.firstChild) {
          globeContainer.current.removeChild(globeContainer.current.firstChild);
        }
      }
    };
  }, []);

  return <div ref={globeContainer} style={{ width: '100%', height: '100vh' }} />;
};

export default GlobeComponent;
