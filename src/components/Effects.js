import { useMemo, useEffect } from 'react'
import { useLoader, useThree, useFrame } from 'react-three-fiber'
import {
  SMAAImageLoader,
  BlendFunction,
  KernelSize,
  BloomEffect,
  EffectComposer,
  EffectPass,
  RenderPass,
  SMAAEffect,
  GammaCorrectionEffect
} from 'postprocessing'

// Fix smaa loader signature
// Will not be neccessary next version: https://github.com/vanruesc/postprocessing/commit/f05bb85fc9548458ee5e4a24026f308f0a8b72d4
// const _load = SMAAImageLoader.prototype.load
// SMAAImageLoader.prototype.load = function(_, set) {
//   return _load.bind(this)(set)
// }

export default function Effects() {
  const { gl, scene, camera, size } = useThree()
  // const smaa = useLoader(SMAAImageLoader)
  const composer = useMemo(() => {
    const composer = new EffectComposer(gl)
    composer.addPass(new RenderPass(scene, camera))
    // const smaaEffect = new SMAAEffect(...smaa)
    // smaaEffect.colorEdgesMaterial.setEdgeDetectionThreshold(0.1)
    const gammaCorrection = new GammaCorrectionEffect()
    const bloom = new BloomEffect({
      blendFunction: BlendFunction.ADD,
      kernelSize: KernelSize.HUGE,
      luminanceThreshold: 0.6,
      height: 750
    })
    bloom.blendMode.opacity.value = 2
    //const effectPass = new EffectPass(camera, gammaCorrection, smaaEffect, bloom)
    const effectPass = new EffectPass(camera, gammaCorrection, bloom)
    effectPass.renderToScreen = true
    composer.addPass(effectPass)
    return composer
  }, [])
  useEffect(() => void composer.setSize(size.width, size.height), [size])
  return useFrame((_, delta) => composer.render(delta), 1)
}
