/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef, useEffect } from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

function Buoy(props) {
  const color = useTexture('/waves.png')
  const [buoyMat] = useState(
    new THREE.MeshStandardMaterial({
      metalness: 0.5,
      map: color,
    })
  )

  /*  useEffect(() => {
    group.current.position.y = props.height
  }, [props.height]) */

  return (
    <group name='bouy'>
      <mesh
        position={[0, props.height + 1, 0]}
        material={buoyMat}
        scale={[1, 1.5, 1]}
      >
        <sphereBufferGeometry attach='geometry' args={[0.3, 32, 32]} />
      </mesh>

      <mesh
        position={[0, props.height, 0]}
        material={buoyMat}
        scale={[1, 1, 1]}
      >
        <cylinderBufferGeometry attach='geometry' args={[0.3, 0.3, 2, 50]} />
      </mesh>

      <mesh
        position={[0, props.height - 1, 0]}
        material={buoyMat}
        scale={[1, 1.5, 1]}
      >
        <sphereBufferGeometry attach='geometry' args={[0.3, 32, 32]} />
      </mesh>
    </group>
  )
}

export default Buoy
