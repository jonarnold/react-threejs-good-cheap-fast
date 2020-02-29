import * as THREE from 'three'
import { useEffect } from 'react'
import { useThree, useLoader } from 'react-three-fiber'
import { HDRCubeTextureLoader } from 'three/examples/jsm/loaders/HDRCubeTextureLoader'

export default function Environment({ background = false }) {
  const { gl, scene } = useThree()
  const [cubeMap] = useLoader(HDRCubeTextureLoader, [['px.hdr', 'nx.hdr', 'py.hdr', 'ny.hdr', 'pz.hdr', 'nz.hdr']], loader => {
    loader.setDataType(THREE.UnsignedByteType)
    loader.setPath('HDR/')
  })
  useEffect(() => {
    const gen = new THREE.PMREMGenerator(gl)
    gen.compileEquirectangularShader()
    const hdrCubeRenderTarget = gen.fromCubemap(cubeMap)
    cubeMap.dispose()
    gen.dispose()
    // if (background) scene.background = hdrCubeRenderTarget.texture
    scene.environment = hdrCubeRenderTarget.texture
    // scene.background.convertSRGBToLinear()
    return () => (scene.environment = null)
  }, [cubeMap])
  return null
}
