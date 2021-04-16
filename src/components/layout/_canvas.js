import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import useStore from '@/helpers/store'
import { OrbitControls, Preload } from '@react-three/drei'
import { animated, useSpring } from '@react-spring/three'
import { A11yUserPreferences } from '@react-three/a11y'

/* const Bg = () => {
  const router = useStore((state) => state.router)
  const { bg } = useSpring({
    bg: router && router.route !== '/box' ? 0 : 0x17 / 255,
  })
  return <a.color attach='background' r={bg} g={bg} b={bg} />
} */
const LCanvas = ({ children }) => {
  const router = useStore((state) => state.router)
  const { bg } = useSpring({
    bg: router && router.route !== '/box' ? 0 : 0x17 / 255,
  })
  return (
    <animated.group>
      <div
        style={{
          background:
            'linear-gradient(0deg, rgba(0,7,43,1) 0%, rgba(1,17,64,1) 40%, rgba(9,49,121,0.9192810913427871) 100%)',
        }}
      >
        <Canvas
          style={{
            position: 'inherit',
            top: 0,
          }}
          onCreated={({ events }) => {
            useStore.setState({ events })
          }}
        >
          <fog attach='fog' args={['rgb(1,17,64)', 0, 50]} />
          <A11yUserPreferences>
            <Preload all />
            {/* <Bg /> */}
            <Perf openByDefault trackGPU={true} position={'bottom-right'} />
            <OrbitControls
            // autoRotate autoRotateSpeed={0.9}
            />
            {children}
          </A11yUserPreferences>
        </Canvas>
      </div>
    </animated.group>
  )
}

export default LCanvas
