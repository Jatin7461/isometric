import { GUI } from "dat.gui"
import { RefObject, useEffect, useRef } from "react"

const Floor = () => {

    return <>
        <mesh receiveShadow position={[0, -30, 10]}
        // rotation-x={-2}
        >
            <ambientLight />
            <planeGeometry args={[1000, 1000]} />
            <meshStandardMaterial />
        </mesh>
    </>
}


export default Floor