import * as THREE from 'three'
import React, { useMemo } from 'react'

export default function Shadow({ stop = 0.3, color = 'black', opacity = 0.9, ...props }) {
  const canvas = useMemo(() => {
    let canvas = document.createElement('canvas')
    canvas.width = 1028
    canvas.height = 128
    let context = canvas.getContext('2d')
    let gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2)
    gradient.addColorStop(stop, new THREE.Color(color).getStyle())
    gradient.addColorStop(1, 'rgba(0,0,0,0)')
    context.fillStyle = gradient
    context.fillRect(0, 0, canvas.width, canvas.height)
    return canvas
  }, [opacity])
  return (
    <mesh {...props}>
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <meshBasicMaterial attach="material" transparent opacity={opacity}>
        <canvasTexture attach="map" args={[canvas]} />
      </meshBasicMaterial>
    </mesh>
  )
}
