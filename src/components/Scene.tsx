import { OrbitControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { GUI } from "dat.gui"
import { forwardRef, RefObject, Suspense, useEffect, useRef } from "react"
import Room from "./Room"
import three, { FrontSide } from 'three'

const Scene = forwardRef((props, ref) => {

    const lightRef: RefObject<any> = useRef()
    const lightRef2: RefObject<any> = useRef()
    // useEffect(() => {
    //     const gui = new GUI()
    //     gui.add(lightRef.current.position, 'x', -50, 50, 0.001)
    //     gui.add(lightRef.current.position, 'y', -50, 50, 0.001)
    //     gui.add(lightRef.current.position, 'z', -50, 50, 0.001)
    //     return () => {
    //         gui.destroy()
    //     }
    // }, [])
    return <>
        {/* <OrbitControls /> */}
        {/* <axesHelper args={[100]} /> */}
        {/* <ambientLight /> */}
        {/* <pointLight ref={lightRef} position={[0, 10, 0]} intensity={100} castShadow /> */}
        {/* <directionalLight ref={lightRef} position={[5, 10, -10]} castShadow /> */}
        <Suspense fallback={null}>
            <Room {...props} ref={ref} />
        </Suspense>



    </>
})

export default Scene