import * as THREE from 'three'
import React, { Suspense, useState } from 'react'
import { Canvas, Dom } from 'react-three-fiber'
import Controls from './components/Controls'
import Lights from './components/Lights'
import Environment from './components/Environment'
import Suzanne from './components/Suzanne'
import Sphere from './components/Sphere'
import Effects from './components/Effects'
import './styles.css'

export default function App() {
  // Controls disable pointerevents on movement to save some CPU cost
  const [active, set] = useState(false)
  return (
    <Canvas
      concurrent
      noEvents={active}
      pixelRatio={window.devicePixelRatio}
      camera={{ position: [0, 0, 6.5] }}
      gl={{ antialias: false }}
      onCreated={({ gl, scene }) => {
        gl.toneMapping = THREE.ACESFilmicToneMapping
        gl.outputEncoding = THREE.sRGBEncoding
        scene.background = new THREE.Color('#373737')
      }}>
      {/* <Lights /> */}
      <Controls disable={set} />
      <Suspense fallback={<Dom center>loading...</Dom>}>
        <Environment />
        {/* <Sphere position={[-2, 0, -1]} /> */}
        <Suzanne position={[0, 0, 0]} rotation={[0, -0.8, 0]} />
        <Effects />
      </Suspense>
    </Canvas>
  )
}
