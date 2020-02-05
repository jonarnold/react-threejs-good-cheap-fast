import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Asset({ url }) {
   const gltf = useLoader(GLTFLoader, url);
   const gl = useRef();

   // const wheel = gl.current.children[0].children[0];
   
   
   useFrame( () => {
      gl.current.rotation.y += 0.005;
      gl.current.children[1].children[1].rotation.y += 0.01;
      gl.current.children[1].children[0].rotation.z += 0.01;
   });

   

   return <primitive ref={gl} scale={[12, 12, 12]} rotation={[0, .61, 0]} position={[0, -1.5, -2]} object={gltf.scene} dispose={null} />
 }

const ThreeTest = () => {

   return (
      <div style={{height: '100%'}}>
         <p>bruh can i put JSX here???!?!?!</p>
         <Canvas pixelRatio={window.devicePixelRatio}>
            <ambientLight />
            <pointLight position={[9, 9, 9]} />
            {/* <RotatingBox/> */}
            <Suspense fallback={<RotatingBox />}>
               <Asset url="models/gfc-thing.glb" />
            </Suspense>
         </Canvas>
      </div>
   )
}

export default ThreeTest;

const RotatingBox = (props) => {
   const mesh = useRef();

   useFrame( () => (
      mesh.current.rotation.y = mesh.current.rotation.x += 0.05
    ))

   return (
      <mesh ref={mesh}>
         <boxBufferGeometry attach="geometry" args={[1, 1.5, 1.29]} />
         <meshStandardMaterial attach="material" color={0xf95b3c} />
      </mesh>
   )
 }
