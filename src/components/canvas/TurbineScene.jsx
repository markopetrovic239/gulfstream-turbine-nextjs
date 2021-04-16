import { Suspense, useState } from 'react'
import {
  Environment,
  MeshDistortMaterial,
  Sphere,
  useTexture,
  Plane,
} from '@react-three/drei'
import { a, useSpring } from '@react-spring/three'
import useStore from '@/helpers/store'
import Turbine from './Turbine'
import Buoy from './Buoy'
import * as THREE from 'three'

import Dolphin from './Dolphin2'
import { A11y, useA11y, useUserPreferences } from '@react-three/a11y'

const M = a(MeshDistortMaterial)
/* const Terrain = () => {
  const elevation = useTexture('/terrain.png')
  const normal = useTexture('/terrainspec.png')
  const color = useTexture('/oceanfloor.png')
  return (
    <Plane
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      position={[-100, -10, 0]}
      args={[256, 256, 512, 512]}
    >
      <meshStandardMaterial
        attach='material'
        color='white'
        displacementMap={elevation}
        normalMap={normal}
        map={color}
      />
    </Plane>
  )
} */
const DarkSphere = () => {
  const { a11yPrefersState } = useUserPreferences()
  const a11y = useA11y()
  const { color } = useSpring({
    color: a11y.focus || a11y.hover ? '#272727' : 'black',
  })

  return (
    <Sphere args={[1, 32, 32]}>
      <M
        distort={a11yPrefersState.prefersReducedMotion ? 0 : 0.4}
        color={color}
      />
    </Sphere>
  )
}

const TurbineScene = () => {
  const router = useStore((s) => s.router)
  const [wireMat] = useState(
    new THREE.MeshStandardMaterial({ color: '#081018', metalness: 0.5 })
  )

  return (
    <Suspense fallback={null}>
      {/*  <A11y
        role='link'
        href='/box'
        actionCall={() => {
          router.push(`/box`)
        }}
      >
        <Turbine />
      </A11y> */}

      {/* <Dolphin pos={[0, 8, 5]} /> */}

      <Turbine />
      <mesh position={[0, 5, 0]}>
        <Turbine />
      </mesh>

      <Buoy height={5} />
      <mesh material={wireMat}>
        <cylinderBufferGeometry attach='geometry' args={[0.03, 0.03, 50]} />
      </mesh>
      <Environment preset={'sunset'} />
    </Suspense>
  )
}

export default TurbineScene
