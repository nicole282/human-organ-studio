import { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Html, RoundedBox } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { OrganModel } from '../data/organs';
import { cloneScene } from '../lib/modelLoader';

interface Props {
  organ: OrganModel;
  gltf: GLTF;
  autoRotate: boolean;
  showLabels: boolean;
  initialRotationY?: number;
  displayScale?: number;
}

const LABEL_POSITIONS: [number, number, number][] = [
  [-1.08, 0.76, 0.72],
  [1.08, 0.64, 0.72],
  [-1.04, -0.2, 0.76],
  [1.04, -0.24, 0.76],
  [0, -0.94, 0.78],
];

export function ModelScene({
  organ,
  gltf,
  autoRotate,
  showLabels,
  initialRotationY = 0,
  displayScale = 1,
}: Props) {
  const groupRef = useRef<THREE.Group>(null);

  const { centeredScene, scale } = useMemo(() => {
    const cloned = cloneScene(gltf);

    const box = new THREE.Box3().setFromObject(cloned);
    const size = new THREE.Vector3();
    box.getSize(size);
    const center = new THREE.Vector3();
    box.getCenter(center);

    cloned.position.x -= center.x;
    cloned.position.y -= center.y;
    cloned.position.z -= center.z;

    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    return {
      centeredScene: cloned,
      scale: (2.25 / maxDim) * displayScale,
    };
  }, [gltf, displayScale]);

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.set(0, initialRotationY, 0);
    }
  }, [initialRotationY, organ.id]);

  useFrame((_, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.28;
    }
  });

  return (
    <group ref={groupRef} rotation={[0, initialRotationY, 0]}>
      <primitive object={centeredScene} scale={scale} />
      {showLabels &&
        organ.structures.slice(0, LABEL_POSITIONS.length).map((structure, index) => (
          <Label
            key={structure.name}
            position={LABEL_POSITIONS[index]}
            text={structure.name}
          />
        ))}
    </group>
  );
}

function Label({ position, text }: { position: [number, number, number]; text: string }) {
  return (
    <group position={position}>
      <Html center distanceFactor={6}>
        <span className="model-label">{text}</span>
      </Html>
      <RoundedBox args={[0.05, 0.05, 0.05]} radius={0.012} smoothness={4}>
        <meshBasicMaterial color="#fff7ea" />
      </RoundedBox>
    </group>
  );
}
