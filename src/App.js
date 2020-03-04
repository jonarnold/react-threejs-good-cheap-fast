import * as THREE from 'three'
import React, { Suspense, useState } from 'react'
import { Canvas, Dom } from 'react-three-fiber'
import Controls from './components/Controls'
import Environment from './components/Environment'
import GFCMachine from './components/GFCMachine'
import Effects from './components/Effects'
import './styles.css'

export default function App() {
  // Controls disable pointerevents on movement to save some CPU cost
  const [active, set] = useState(false);
  const [allowSound, setAllowSound] = useState(null);
  const [selections, setSelections] = React.useState(['good', 'cheap'])

  const setNewSelection = (id) => {
    //only update if this is a new value
    if(selections.includes(id)){
      return;
    } 
    //keep last selection, make it first
    let updatedSelections = selections.slice(1, 2);
    //add new last selection
    setSelections(updatedSelections.concat([id]));
  }

  if(allowSound === null) {
    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height:'100vh'}}>
        <button style={{width: '300px', height: '66px', cursor: 'pointer', borderRadius: '9px'}} onClick={() => setAllowSound(true)}>Click to load w sound...</button>
        <p>(temp hack to force a user click so sound can play)</p>
      </div>
      
    )
  } else {

    return (
      <Canvas
        concurrent
        noEvents={active}
        pixelRatio={window.devicePixelRatio}
        camera={{ position: [0, 0, 2.5], fov: 65 }}
        gl={{ antialias: true }}
        onCreated={({ gl, scene }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.outputEncoding = THREE.sRGBEncoding
          // scene.background = new THREE.Color('#373740')
        }}>
        <ambientLight intensity={0.33}/>
        <Controls disable={set} />
        <Suspense fallback={<Dom center>loading...</Dom>}>
          <Environment />
          <GFCMachine selections={selections} setNewSelection={setNewSelection} position={[0, .1, 0]} rotation={[0, -1.3, 0]} />
          <Effects />
        </Suspense>
      </Canvas>
    )
  }

}
