import { OrbitControls } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { GUI } from "dat.gui"
import { forwardRef, Suspense, useEffect } from "react"
import Room from "./Room"

const Scene = forwardRef((props, ref) => {
    return <>
        {/* <OrbitControls /> */}
        {/* <axesHelper args={[100]} /> */}
        <ambientLight />
        <directionalLight position={[1, 1, 1]} />
        <Suspense>
            <Room {...props} ref={ref} />
        </Suspense>
    </>
})

export default Scene