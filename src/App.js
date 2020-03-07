import * as THREE from 'three'
import React, { Suspense, useState, useRef, useEffect } from 'react'
import { Canvas, Dom, useLoader, useThree } from 'react-three-fiber'
import Controls from './components/Controls'
import Environment from './components/Environment'
import GFCMachine from './components/GFCMachine'
import Effects from './components/Effects'
import './styles.css'
import UI from './components/UI'

export default function App() {
  // Controls disable pointerevents on movement to save some CPU cost
  const [active, set] = useState(false);
  const [allowSound, setAllowSound] = useState(false);
  const [selections, setSelections] = React.useState([])

  const toggleSound = () => {
    setAllowSound(s => !s);
  }

  const setNewSelection = (id) => {
    //only update if this is a new value
    if(selections.includes(id)){
      return;
    } 

    let updatedSelections = selections;

    if (selections.length === 2){
      //keep last selection, make it first
      updatedSelections = selections.slice(1, 2);
    }

    //add new last selection
    setSelections(updatedSelections.concat([id]));
    
  }

  return (
    <>
      <div className="wrapper-canvas">
        <Canvas
          concurrent
          noEvents={active}
          pixelRatio={window.devicePixelRatio}
          camera={{ position: [0, 0, 2.5], fov: 65 }}
          // gl={{ antialias: true }}
          onCreated={({ gl, scene }) => {
            gl.toneMapping = THREE.ACESFilmicToneMapping
            gl.outputEncoding = THREE.sRGBEncoding
            // scene.background = new THREE.Color('#373740')
          }}>
          <ambientLight intensity={0.33}/>
          <Controls disable={set} />
          <Suspense fallback={<Dom center>Loading...</Dom>}>
            <Environment />
            <GFCMachine 
              selections={selections} 
              setNewSelection={setNewSelection} 
              allowSound={allowSound}
              position={[0, .1, 0]} 
              rotation={[0, -1.3, 0]} 
            />
            <Effects />
            {/* {allowSound ? <PropellerSound allowSound={allowSound} url="audio/propeller.ogg"/> : null} */}
            <PropellerSound allowSound={allowSound} url="audio/propeller.ogg"/>
          </Suspense>
        </Canvas>
        <UI selections={selections} allowSound={allowSound} toggleSound={toggleSound}/>
        
      </div>
    </>
  )
}


const PropellerSound = ({ url, allowSound }) => {
  const sound = useRef()
  const { camera } = useThree()
  const [listener] = useState(() => new THREE.AudioListener())
  const buffer = useLoader(THREE.AudioLoader, url)
  useEffect(() => {
    if(allowSound) {
      sound.current.setBuffer(buffer)
      sound.current.setRefDistance(1)
      sound.current.setLoop(true)
      sound.current.play()
      camera.add(listener)
    } else { 
      if(sound.current.isPlaying) {
        sound.current.stop()
      }
      camera.remove(listener)
    } 
    return () => camera.remove(listener)
  }, [allowSound])
  return <positionalAudio ref={sound} args={[listener]} />
}