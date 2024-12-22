import React, { forwardRef, useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GUI } from 'dat.gui'

const Mummy = forwardRef((props, ref) => {
    const group = useRef()
    // const controls = useRef()

    useEffect(() => {
        //     const gui = new GUI()
        //     gui.add(controls.current.position, 'x', -50, 50, 0.001)
        //     gui.add(controls.current.position, 'y', -50, 50, 0.001)
        //     gui.add(controls.current.position, 'z', -50, 50, 0.001)
        //     gui.add(controls.current.rotation, 'x', -Math.PI * 4, Math.PI * 4, 0.001)
        //     gui.add(controls.current.rotation, 'y', -Math.PI * 4, Math.PI * 4, 0.001)
        //     gui.add(controls.current.rotation, 'z', -Math.PI * 4, Math.PI * 4, 0.001)
        //     gui.add(controls.current.scale, 'x', -Math.PI * 4, Math.PI * 4, 0.001)
        //     gui.add(controls.current.scale, 'y', -Math.PI * 4, Math.PI * 4, 0.001)
        //     gui.add(controls.current.scale, 'z', -Math.PI * 4, Math.PI * 4, 0.001)
        if (actions && actions["Armature|Armature|mixamo.com|Layer0.001"])
            actions["Armature|Armature|mixamo.com|Layer0.001"].play()
        //     return () => {
        //         gui.destroy()
        //     }
    }, [])
    const { nodes, materials, animations } = useGLTF('pubg_mummy_set_dance.glb')
    const { actions } = useAnimations(animations, group)
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group ref={ref} name="Sketchfab_model" position={[3.599, 27.148, 4.182]} rotation={[-1.59, 0, -0.891]}
                    // scale={[1.251, 1.251, 7.802]}
                    scale={0}
                >
                    <group
                        name="3697c62f77e240f2bbbd36274e8b684dfbx"
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.01}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="Armature">
                                    <group name="Object_5">
                                        <primitive object={nodes._rootJoint} />
                                        <skinnedMesh
                                            name="Object_86"
                                            geometry={nodes.Object_86.geometry}
                                            material={materials['Material.004']}
                                            skeleton={nodes.Object_86.skeleton}
                                        />
                                        <skinnedMesh
                                            name="Object_88"
                                            geometry={nodes.Object_88.geometry}
                                            material={materials['Material.003']}
                                            skeleton={nodes.Object_88.skeleton}
                                        />
                                        <group
                                            name="Object_85"
                                            rotation={[-Math.PI / 2, 0, -Math.PI]}
                                            scale={[-1, 1, 1]}
                                        />
                                        <group
                                            name="Object_87"
                                            rotation={[-Math.PI / 2, 0, -Math.PI]}
                                            scale={[-1, 1, 1]}
                                        />
                                    </group>
                                </group>
                                <group name="Mesh_0433rip001" rotation={[Math.PI / 2, 0, Math.PI]} scale={-1} />
                                <group name="Mesh_0426rip001" rotation={[Math.PI / 2, 0, Math.PI]} scale={-1} />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
})

useGLTF.preload('pubg_mummy_set_dance.glb')

export default Mummy