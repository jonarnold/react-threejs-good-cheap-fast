/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import Shadow from './Shadow'

export default function Suzanne(props) {
  const group = useRef()
  const { nodes, materials, animations } = useLoader(GLTFLoader, '/gfc-hq.glb', loader => {
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/draco-gltf/')
    loader.setDRACOLoader(dracoLoader)
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials['Metal colors']} geometry={nodes.casing.geometry} position={[0.01, 0, 0]}>
        <mesh material={materials['Metal colors']} geometry={nodes.arm1.geometry} position={[-0.01, -0.14, 0]}>
          <mesh
            material={materials['Interactive elements']}
            geometry={nodes.arrow1.geometry}
            position={[0.39, -0.4, 0]}
          />
          <mesh
            material={materials['Interactive elements']}
            geometry={nodes.button1.geometry}
            position={[0.07, -0.95, 0]}
          />
        </mesh>
        <mesh
          material={materials['Metal colors']}
          geometry={nodes.arm2.geometry}
          position={[-0.01, -0.14, 0]}
          rotation={[-2.09, 0, 0]}>
          <mesh
            material={materials['Interactive elements']}
            geometry={nodes.arrow2.geometry}
            position={[0.39, -0.4, 0]}
          />
          <mesh
            material={materials['Interactive elements']}
            geometry={nodes.button2.geometry}
            position={[0.07, -0.95, 0]}
          />
        </mesh>
        <mesh
          material={materials['Metal colors']}
          geometry={nodes.arm3.geometry}
          position={[-0.01, -0.14, 0]}
          rotation={[2.09, 0, 0]}>
          <mesh
            material={materials['Interactive elements']}
            geometry={nodes.arrow3.geometry}
            position={[0.39, -0.4, 0]}
          />
          <mesh
            material={materials['Interactive elements']}
            geometry={nodes.button3.geometry}
            position={[0.07, -0.95, 0]}
          />
        </mesh>
        <mesh material={materials['Metal colors']} geometry={nodes.propeller.geometry} position={[-0.01, 0.86, 0]} />
        <mesh
          material={materials['Interactive elements']}
          geometry={nodes.ball.geometry}
          position={[0.18, -0.14, 0]}
          rotation={[-Math.PI, 1.06, -Math.PI]}
        />
      </mesh>
    </group>
  )
}