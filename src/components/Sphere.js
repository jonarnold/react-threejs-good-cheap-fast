import * as THREE from 'three'
import React, { useState, useEffect, useMemo } from 'react'
import { useLoader } from 'react-three-fiber'
import Shadow from './Shadow'

export default function Sphere(props) {
  const texture = useLoader(THREE.TextureLoader, '/flakes.png')
  const normalMap = useMemo(() => {
    const clone = texture.clone(true)
    clone.needsUpdate = true
    return clone
  }, [texture])
  const [hovered, set] = useState(false)
  useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
  return (
    <group {...props}>
      <mesh onPointerOver={() => set(true)} onPointerOut={() => set(false)}>
        <sphereBufferGeometry attach="geometry" args={[1.5, 64, 64]} />
        <meshPhysicalMaterial
          attach="material"
          clearcoat={1.0}
          clearcoatRoughness={0}
          metalness={0.9}
          roughness={0.1}
          color={hovered ? 'red' : 'blue'}
          normalMap={normalMap}
          normalScale={[0.3, 0.3]}
          normalMap-wrapS={THREE.RepeatWrapping}
          normalMap-wrapT={THREE.RepeatWrapping}
          normalMap-repeat={[20, 20]}
          //normalMap-anisotropy={16}
        />
      </mesh>
      <Shadow position={[0, -1.5, 0]} scale={[4, 4, 1]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}
