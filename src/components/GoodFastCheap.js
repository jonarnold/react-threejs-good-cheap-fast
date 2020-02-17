import * as THREE from 'three'
import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useThree, useFrame, useLoader, extend } from 'react-three-fiber'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import GDCContraption from './GDCContraption';
import './GoodFastCheap.css';

extend({ OrbitControls })
const OrbControls = props => {
   const { gl, camera } = useThree();
   const ref = useRef();
   useFrame(() => ref.current.update());
   return <orbitControls ref={ref} args={[camera, gl.domElement]} {...props} />
}

 

 export default function GoodFastCheap({selection}) {
   // const [ rot, setRot ] = useState(0);
   return (
     <>
       {/* <div className="bg" /> */}
       {/* <button onClick={() => setRot(st => st + Math.PI/1.5)}>+</button>
       <button onClick={() => setRot(st => st - Math.PI/1.5)}>-</button> */}
       <Canvas camera={{ position: [-5, 9, 10] }} shadowMap pixelRatio={window.devicePixelRatio}>
         <ambientLight intensity={1.5} />
         <pointLight intensity={2} position={[-10, -25, -10]} />
         <spotLight
           castShadow
           intensity={1.25}
           angle={Math.PI / 8}
           position={[25, 25, 15]}
           shadow-mapSize-width={2048}
           shadow-mapSize-height={2048}
         />
         {/* <fog attach="fog" args={['#cc7b32', 16, 20]} /> */}
         <Suspense fallback={<RotatingBox />}>
            <GDCContraption selection={selection}/>
         </Suspense>
         <OrbControls
         //   autoRotate
           enablePan={false}
           enableZoom={true}
           enableDamping
           dampingFactor={.125}
          //  rotateSpeed={1}
           maxPolarAngle={3}
           minPolarAngle={0}
           target={[0, 4, 0]}
         />
       </Canvas>
       
     </>
   )
 }

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