import React, { Suspense, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

const Lights = () => {
  return (
    <>
      {/* Ambient Light illuminates lights for all objects */}
      <ambientLight intensity={0.3} />
      {/* Diretion light */}
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {/* Spotlight Large overhead light */}
      <spotLight intensity={1} position={[1000, 0, 0]} castShadow />
    </>
  );
};

function Model() {
  const gltf = useGLTF("/apple_imac/scene.gltf", true);
  return <primitive object={gltf.scene} dispose={null} position={[0, 0, 0]} />;
}

const BoxClown = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += 0.01));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
      <group position={[0,-25,0]}>
    <mesh
      {...props}
      position={[-35,-35,0]}
      ref={ref}
      scale={clicked ? 145 : 120}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <Model />
    </mesh>
    </group>
  );
};

export default function Clown(props) {
  return (
    <Suspense fallback={null}>
      {" "}
      <Canvas
        concurrent
        colorManagement
        camera={{ position: [0, 0, 120], fov: 70 }}
        shadows
      >
        <Lights />
        <BoxClown />
      </Canvas>
    </Suspense>
  );
}


