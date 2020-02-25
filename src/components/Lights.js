import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import Shadow from './Shadow'

export default function Lights() {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.y += 0.02))
  return (
    <>
      <pointLight position={[0, 10, -10]} intensity={2} />
      <group ref={ref}>
        <pointLight intensity={1} position={[0, 10, 10]}>
          <mesh position={[0, 0, 0]}>
            <sphereBufferGeometry attach="geometry" args={[0.5, 32, 32]} />
            <meshBasicMaterial attach="material" color="white" />
          </mesh>
        </pointLight>
        <Shadow renderOrder={10} color="white" stop={0.1} scale={[8, 8, 1]} position={[0, -1.49, 10]} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
    </>
  )
}
