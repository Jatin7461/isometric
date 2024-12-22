import { useGLTF } from '@react-three/drei'
import {  MeshStandardMaterial, TextureLoader } from 'three'
import { a, useSpring, useSpringRef } from '@react-spring/three'
import {  useLoader } from '@react-three/fiber'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Mummy from './Mummy'
import { Text } from '@react-three/drei'
const Room = forwardRef((props, ref) => {
    const { nodes, materials } = useGLTF('uploads_files_3291978_room+glb.glb')

    const screenWidth = window.innerWidth

    const delay = 2300

    const zoomInRef = useSpringRef()
    const zoomIn = useSpring({
        ref: zoomInRef,
        from: { scale: 0 },
    })






    const cupboard = useSpring({
        from: { scale: 0 },
        scale: 0.836,
        delay: delay
    })
    const cupboardhandles = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [0.02, 0.108, 0.014],
        delay: delay
    })
    const table = useSpring({
        from: { scale: 0 },
        scale: 1.083,
        delay: delay + 250
    })
    const tablehandles = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [0.022, 0.108, 0.014],
        delay: delay + 500
    })
    const phone = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [0.059, 0.008, 0.111],
        delay: delay + 750
    })
    const cup = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [0.044, 0.076, 0.044],
        delay: delay + 1000
    })
    const monitor = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [-0.117, -0.008, -0.117],
        delay: delay + 1250
    })
    const monitorStand = useSpring({
        from: { scale: 0 },
        scale: 1.315,
        delay: delay + 1500
    })
    const netflix = useSpring({
        from: { scale: 0 },
        scale: 1.354,
        delay: delay + 1750
    })
    const netflixLogo = useSpring({
        from: { scale: 0 },
        scale: 1.895,
        delay: delay + 2000
    })
    const keyboard = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [1, 1, 1],
        delay: delay + 2250
    })
    const mouse = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [-0.035, -0.025, -0.08],
        delay: delay + 1500
    })
    const modem = useSpring({
        from: { scale: 0 },
        scale: 1,
        delay: delay + 1750
    })

    const speaker1 = useSpring({
        from: { scale: 0 },
        scale: 0.853,
        delay: delay + 2000
    })

    const speaker2 = useSpring({
        from: { scale: 0 },
        scale: 0.853,
        delay: delay + 1250
    })

    const speakerWires = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [-0.009, -0.019, -0.009],
        delay: delay + 1500
    })

    const lightHolder = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [0.518, 0.211, 0.13],
        delay: delay + 1750
    })
    const threeLights = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [0.133, 0.175, 0.133],
        delay: delay + 2000
    })
    const lightWires = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [-0.007, -0.085, -0.007],
        delay: delay + 2250
    })
    const lightBulbs = useSpring({
        from: { scale: 0 },
        scale: 0.052,
        delay: delay + 1500
    })

    const curtain1 = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [1.132, 1, 0.826],
        delay: delay + 1750
    })
    const curtain1Handle = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [1.118, 1, 1],
        delay: delay + 2000
    })
    const curtain1Rings = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [0.011, 0.01, 0.01],
        delay: delay + 1250
    })
    const curtain2 = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [0.765, 1, 1.402],
        delay: delay + 1500
    })
    const curtain2Handle = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [1.118, 1, 1],
        delay: delay + 2750
    })
    const curtain2Rings = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [0.011, 0.01, 0.01],
        delay: delay + 1000
    })
    const pinkLamp = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [0.163, 0.253, 0.163],
        delay: delay + 1250
    })
    const pinkHandle = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [0.025, 0.153, 0.051],
        delay: delay + 2500
    })

    const bed1 = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [1, 1, 1],
        delay: delay + 250
    })

    const bed2 = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [0.274, 0.008, 0.244],
        delay: delay + 500
    })

    const bed3 = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [-0.03, -0.058, -0.03],
        delay: delay + 750
    })

    const bed4 = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [1.091, 1, 0.989],
        delay: delay + 1000
    })

    const bed5 = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [0.657, 0.101, 1.008],
        delay: delay + 1250
    })
    const bed6 = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [0.274, 0.008, 0.244],
        delay: delay + 1500
    })
    const bed7 = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [0.274, 0.008, 0.244],
        delay: delay + 1750
    })

    const tableBooks = useSpring({
        from: { scale: [0, 0, 0] },
        scale: [1.108, 1.325, 1.108],
        delay: delay + 1500
    })
    const sofa = useSpring({
        from: { scale: 0 },
        scale: 0.408,
        delay: delay + 1750
    })

    const box = useSpring({
        from: { scale: 1 },
        scale: 0,

        delay: 2000,
    })

    const api = useSpringRef()
    const goLeft = useSpring({
        from: { x: 0, y: 0, z: 0, rx: -0.742, ry: Math.PI * 2.3, rz: 0 },
        ref: api
    })

    setTimeout(() => {

        api.start({
            to: { x: 0, y: -0.245, z: 7.033, rx: -0.742, ry: Math.PI * -0.25, rz: 0 },
            delay: 1300,
        })




        zoomInRef.start({
            to: { scale: 1 },

            delay: 300
        })

        let finalScale = 5
        if (screenWidth <= 1024) {
            finalScale = 3
        }
        zoomInRef.start({
            to: { scale: finalScale },
            delay: 1300,
        })
    }, 100)


    const cursor = { x: 0, y: 0 }

    window.addEventListener('mousemove', (event) => {
        cursor.x = (event.clientX - window.innerWidth / 2) / 50000
        cursor.y = (event.clientY - window.innerHeight / 2) / 50000
    })

    const roomRef = ref
    const netflixLogoRef = useRef()
    const netflixRef = useRef()
    const referRef = useRef()
    const thankyouRef = useRef()
    const mummyRef = useRef()

    let canvasX = 17
    let roomToLeftX = -2.541
    let roomToLeftY = 18.953
    let roomToLeftZ = 27.657
    let roomToRightY = 13.457
    let roomToRightZ = 20.064

    if (screenWidth <= 1024) {
        canvasX = 9.643;
        roomToLeftX = -1.8
        roomToLeftY = 20.455
        roomToLeftZ = 23.699
        roomToRightY = 16.131
        roomToRightZ = 18.293
    }

    useGSAP(() => {
        gsap.timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
                trigger: '.canvas',
                scrub: true,
                start: '10% top',
                end: '800% bottom',
                id: 'room'
            },
        })

            .to('.circleRed', {
                scale: 1,
            },)
            .to(roomRef.current.position, {
                x: canvasX,
                onComplete: () => {
                    console.log(roomRef.current.position)
                }
            }, '<')
            .to(roomRef.current.rotation, {
                y: -Math.PI * 0.4
            }, '<')
            .to(roomRef.current.scale, {
                // x: 4,
                // y: 4,
                // z: 4,
            }, '<')

        gsap.timeline({
            scrollTrigger: {
                trigger: '.roomToLeft',
                start: '-450% top',
                end: '300% bottom',
                scrub: true,
                id: 'room-to-left',
                onEnter: () => {
                    console.log('entered')
                },
                // pin: true
            }
        }).to(roomRef.current.position, {
            x: roomToLeftX,
            y: roomToLeftY,
            z: roomToLeftZ,

            ease: 'power1.inOut'
        })
            .to(roomRef.current.rotation, {
                // y: -Math.PI * 2,
                // x: -0.4,
                x: -0.686,
                y: 0.771,
                ease: 'power1.inOut'
            }, '<')
            .to('.circleGreen', {
                scale: 1
            }, '<')


        gsap.timeline({
            scrollTrigger: {
                trigger: '.roomToRight',
                scrub: true,
                start: '-300% top',
                end: '500% top',
                id: "toRight",

            }
        })
            .to(roomRef.current.position, {
                x: 0,
                y: roomToRightY, z: roomToRightZ,
                // y: 16.131, z: 18.293,
                ease: 'linear'
            })
            .to(roomRef.current.rotation, {
                y: -0.748,
                x: -0.748,
                ease: 'linear'
            }, '<')
            .to('.circleBlue', {
                scale: 1
            }, '<')

        setTimeout(() => {

            gsap.timeline({
                scrollTrigger: {
                    trigger: '.thankyou',
                    scrub: true,
                    start: '-500% top',
                    end: '500% top'
                }
            })
                .to(roomRef.current.position, {
                    x: -4.759,
                    y: 19.019,
                    z: 25.739,
                    // x: -2.25,
                    // y: 21.537,
                    // z: 23.699,
                    ease: 'linear'
                })
                .to(roomRef.current.rotation, {
                    y: -0.33,
                    ease: 'linear'

                }, '<')
                .to(netflixLogoRef.current.scale, {
                    x: 0,
                    y: 0, z: 0
                })
                .to(netflixRef.current.scale, {
                    x: 0,
                    y: 0,
                    z: 0
                }, '<')
                .to(thankyouRef.current.scale, {
                    x: 0.1,
                    y: 0.1,
                    z: 0.1
                }, '<')
                .to(referRef.current.scale, {
                    x: 0.05,
                    y: 0.05,
                    z: 0.05,
                }, '<')
                .to(mummyRef.current.scale, {
                    x: 1.251,
                    y: 1.251,
                    z: 7.802,
                }, '<')
            console.log(mummyRef, 'mummy')
        }, 5000);
    }, [roomRef])


    const woodTexture1 = useLoader(TextureLoader, 'woodTexture.jpg')
    const curtainTexture = useLoader(TextureLoader, 'curtain_texture.jpg')
    const bedsheetTextureNormal = useLoader(TextureLoader, 'Bedsheet_texture_normal.png')

    const planeRef = useRef()
    const planeRef2 = useRef()

    return (
        <a.group ref={roomRef} {...props} dispose={null} rotation-z={goLeft.rz} rotation-y={goLeft.ry} rotation-x={goLeft.rx} scale={zoomIn.scale}
            position-x={goLeft.x}
            position-z={goLeft.z}
            position-y={goLeft.y}
            castShadow
        >

            <a.mesh position={[0.01, 2.18, 0]}
                scale={box.scale} castShadow receiveShadow
            >
                <boxGeometry args={[4, 3.75, 4]} />
                <meshStandardMaterial />
            </a.mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Walls.geometry}
                material={new MeshStandardMaterial({
                    color: "#ffe8ca"
                })}

                position={[-0.631, 2.109, -0.86]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Floor.geometry}
                material={new MeshStandardMaterial({
                    color: "#ffe8ca"
                })}

                position={[0, 0.15, 0]}
            />

            
            //cupboard
            <a.group position={[-0.787, 1.222, -1.265]} scale={cupboard.scale}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001.geometry}
                    material={new MeshStandardMaterial({ map: woodTexture1, color: "#ffd59e" })}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_1.geometry}
                    material={new MeshStandardMaterial({ color: "#ffd59e" })}
                />
            </a.group>
            //cupboard handles
            <a.mesh
                castShadow
                receiveShadow
                geometry={nodes.cupboard_handles.geometry}
                material={materials.Cupboard_handles}
                position={[-0.747, 1.202, -1.031]}
                scale={cupboardhandles.scale}
            />
            //table
            <a.group position={[1.012, 1.375, -1.388]} rotation={[Math.PI / 2, 0, 0]} scale={table.scale}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube006.geometry}
                    material={new MeshStandardMaterial({
                        color: "#ffd59e"
                    })}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube006_1.geometry}
                    material={materials.Mouse}
                />
            </a.group>
            //table handles
            <a.mesh
                castShadow
                receiveShadow
                geometry={nodes.shelf_handles.geometry}
                material={materials.Cupboard_handles}
                position={[1.007, 1.222, -1.229]}
                scale={tablehandles.scale}
            />

            //phone
            <a.group
                position={[0.394, 1.314, -1.284]}
                rotation={[0, 0.466, 0]}
                scale={phone.scale}>
                <mesh castShadow receiveShadow geometry={nodes.Cube016.geometry} material={materials.bed} />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube016_1.geometry}
                    material={materials.Computer_screen}
                />
                <Suspense>
                    < Mummy ref={mummyRef} />
                </Suspense>

            </a.group>
           //cup
            <a.mesh
                castShadow
                receiveShadow
                geometry={nodes.Coffee_cup.geometry}
                material={materials.bed}
                position={[1.555, 1.298, -1.212]}
                scale={cup.scale}
            />
            //monitor stand
            <a.mesh
                castShadow
                receiveShadow
                geometry={nodes.computer_stand.geometry}
                material={materials.Mouse}
                position={[1.007, 1.311, -1.228]}
                scale={monitor.scale}
            />

//screen
            <a.group position={[1.095, 1.588, -1.209]} scale={monitorStand.scale}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube010.geometry}
                    material={materials.Mouse}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube010_1.geometry}
                    material={materials.Computer_screen}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube010_2.geometry}
                    material={materials.computer_light}
                />
            </a.group>
           //keyboard
            <a.mesh
                castShadow
                receiveShadow
                geometry={nodes.keyboard.geometry}
                material={materials.Mouse}
                position={[1.018, 1.302, -0.936]}
                scale={keyboard.scale}
            />
            //mouse
            <a.group position={[1.478, 1.314, -0.972]} scale={mouse.scale}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube019.geometry}
                    material={materials.Mouse}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube019_1.geometry}
                    material={materials.mouse_scroller}
                />
            </a.group>

            <group>

            //netflix
                <a.mesh
                    ref={netflixRef}
                    castShadow
                    receiveShadow
                    geometry={nodes.Curve006.geometry}
                    material={materials.Netflix}
                    position={[1.028, 1.794, -1.207]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={netflix.scale}
                />
                <Text
                    ref={thankyouRef}
                    position={[1.0, 1.794, -1.107]}
                    // scale={0.1}
                    scale={0}
                    color={'#ff0000'}
                >
                    Thank you
                </Text>
                <Text
                    ref={referRef}
                    position={[1.0, 1.694, -1.107]}
                    // scale={0.05}
                    scale={0}
                    color={'#ff0000'}
                >
                    Hope you enjoyed :)
                </Text>

            //netflix logo
                <a.mesh
                    ref={netflixLogoRef}
                    castShadow
                    receiveShadow
                    geometry={nodes.Curve.geometry}
                    material={materials.Netflix}
                    position={[1.011, 1.557, -1.207]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={netflixLogo.scale}
                />
            </group>

            //modem
            <a.group scale={modem.scale} position={[1.64, 1.818, -1.508]} rotation={[0, 1.522, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube011.geometry}
                    material={materials.modem}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube011_1.geometry}
                    material={materials.modem_light}
                />
            </a.group>

            //speaker1
            <a.group position={[-1.312, 3.386, -1.429]} scale={speaker1.scale}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube003.geometry}
                    material={materials.Mouse}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube003_1.geometry}
                    material={materials.computer_light}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube003_2.geometry}
                    material={materials.mouse_scroller}
                />
            </a.group>
            //speaker2
            <a.group position={[-0.358, 3.386, -1.429]} scale={speaker2.scale}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube004.geometry}
                    material={materials.Mouse}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube004_1.geometry}
                    material={materials.computer_light}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube004_2.geometry}
                    material={materials.mouse_scroller}
                />
            </a.group>
            //speaker wires
            <a.mesh
                castShadow
                receiveShadow
                geometry={nodes.Wire.geometry}
                material={materials.Mouse}
                position={[-0.726, 2.802, -1.694]}
                scale={speakerWires.scale}
            />
            <group>

            //light k upar
                <a.mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.chandelier_stand.geometry}
                    material={materials.floor}
                    position={[0, 3.949, 0]}
                    scale={lightHolder.scale}
                />
            //3 lights

                <a.mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.chandeliers.geometry}
                    material={materials.window_frame}
                    position={[-0.002, 3.296, -0.054]}
                    scale={threeLights.scale}
                />

            //light wires
                <a.mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.chandelier_rod.geometry}
                    material={materials.Mouse}
                    position={[0.012, 3.687, -0.054]}
                    scale={lightWires.scale}
                />
                <pointLight
                    position={[0.012, 2.489, -0.049]}
                    intensity={50}
                />
            //3 light bulbs
                <a.mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.chandelier_bulb.geometry}
                    material={nodes.chandelier_bulb.material}
                    position={[0.012, 2.989, -0.049]}
                    scale={lightBulbs.scale}
                />
            </group>

            //table side curtain
            <a.group
                position={[0.998, 2.82, -1.585]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={curtain1.scale}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane.geometry}
                    // material={materials.curtain}
                    material={new MeshStandardMaterial({ map: curtainTexture, color: "#ffd59e" })}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_1.geometry}
                    // material={materials.curtain}
                    material={new MeshStandardMaterial({ map: curtainTexture })}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_2.geometry}
                    material={new MeshStandardMaterial({ map: curtainTexture })}
                // material={materials.curtain}
                />
            </a.group>

            <group>

            //table curtain handle
                <a.mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.curtain_railing_1.geometry}
                    material={materials.curtain_railings}
                    position={[0.994, 3.772, -1.63]}
                    scale={curtain1Handle.scale}
                />
            //curtain rings
                <a.mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.curtain_loops_1.geometry}
                    material={materials.curtain_railings}
                    position={[1.555, 3.756, -1.584]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={curtain1Rings.scale}
                />
            </group>

            //second curtain
            <a.group
                position={[-1.61, 2.183, 0.005]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={curtain2.scale}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane001.geometry}
                    // material={materials.curtain}
                    material={new MeshStandardMaterial({ map: curtainTexture, color: "#ffd59e" })}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane001_1.geometry}
                    // material={materials.curtain}
                    material={new MeshStandardMaterial({ map: curtainTexture })}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane001_2.geometry}
                    // material={materials.curtain}
                    material={new MeshStandardMaterial({ map: curtainTexture })}
                />
            </a.group>
            <group>

            //curtain handle
                <a.mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.curtain_railing_1001.geometry}
                    material={materials.curtain_railings}
                    position={[-1.657, 3.772, 0.729]}
                    rotation={[0, 1.571, 0]}
                    scale={curtain2Handle.scale}
                />
            //curtain rings
                <a.mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.curtain_loops_1001.geometry}
                    material={materials.curtain_railings}
                    position={[-1.612, 3.756, -0.376]}
                    rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                    scale={curtain2Rings.scale}
                />
            </group>

            <group>

            //pink lamp

                {/* <directionalLight position={[1, 10, 10]} intensity={1} /> */}
                <pointLight position={[-0.031, 4.39, -0.152]} intensity={100} />
                <pointLight position={[-0.031, 2.39, -0.152]} intensity={10} />
                <ambientLight intensity={0.2} />
                <a.mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.lamp.geometry}
                    // material={materials.lamp}
                    material={new MeshStandardMaterial({ color: "#ffd59e" })}
                    position={[-1.531, 3.39, -0.752]}
                    scale={pinkLamp.scale}
                />
            //pink lamp handle
                <a.mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.lamp_handle.geometry}
                    material={materials.lamp_handle}
                    position={[-1.66, 3.135, -0.75]}
                    scale={pinkHandle.scale}
                />
            </group>

            <group>
          //bed something
                <a.mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bed.geometry}
                    // material={materials.bed}
                    material={new MeshStandardMaterial({
                        // map: bedsheetTexture
                        color: "#ffd59e"
                    })}
                    position={[-0.691, 0.956, 1.398]}
                    scale={bed1.scale}
                />
            //pillow
                <a.mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pillows.geometry}
                    // material={materials.cushion}
                    material={new MeshStandardMaterial({ map: bedsheetTextureNormal, color: "#ffd59e" })}
                    position={[-0.3, 1.136, 1.613]}
                    rotation={[3.065, 0, 0]}
                    scale={bed2.scale}
                />

            //bed something
                <a.mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bed_stands.geometry}
                    material={materials.Mouse}
                    // material={new MeshStandardMaterial({ map: bedsheetTexture })}
                    position={[-0.686, 0.358, 0.736]}
                    scale={bed3.scale}
                />
            //bed something
                <a.mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.bedsheet.geometry}
                    // material={materials.bedsheet}
                    material={new MeshStandardMaterial({
                        // map: bedsheetTexture 
                        color: "#ffd59e"
                    })}
                    position={[-0.643, 0.899, 0.72]}
                    rotation={[-0.702, 0, 0]}
                    scale={bed4.scale}
                />
            //bed
                <a.mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.matress.geometry}
                    // material={materials.bedsheet}
                    material={new MeshStandardMaterial({
                        // map: bedsheetTexture
                        color: "#ffd59e"
                    })}

                    position={[-0.687, 0.844, 0.699]}
                    scale={bed5.scale}
                />
            //bed
                <a.mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pillows001.geometry}
                    // material={materials.cushion}
                    material={new MeshStandardMaterial({ map: bedsheetTextureNormal, color: "#ffd59e" })}

                    position={[-0.479, 1.091, 0.671]}
                    rotation={[3.065, 0, 0]}
                    scale={bed6.scale}
                />
            //bed
                <a.mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pillows002.geometry}
                    // material={materials.cushion}
                    material={new MeshStandardMaterial({ map: bedsheetTextureNormal, color: "#ffd59e" })}


                    position={[-0.942, 1.11, 1.504]}
                    rotation={[3.065, 0, 0]}
                    scale={bed7.scale}
                />
            </group>
            <group>

           //table book
                <a.group position={[0.448, 1.706, -1.497]} scale={tableBooks.scale}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube013.geometry}
                        material={materials.book}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube013_1.geometry}
                        material={materials.modem}
                    />
                </a.group>
            //table book 2
                <a.group
                    position={[0.448, 1.74, -1.496]}
                    rotation={[0, -0.413, 0]}
                    scale={tableBooks.scale}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube014.geometry}
                        material={materials.book}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube014_1.geometry}
                        material={materials.modem}
                    />
                </a.group>
            //table book 3
                <a.group
                    position={[0.448, 1.774, -1.497]}
                    rotation={[0, 0.159, 0]}
                    scale={tableBooks.scale}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube015.geometry}
                        material={materials.book}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube015_1.geometry}
                        material={materials.modem}
                    />
                </a.group>
            </group>

            //table window
            <group position={[0.987, 2.828, -1.706]} scale={[1, 0.887, 1]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube005.geometry}
                    material={materials.window_frame}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube005_1.geometry}
                    material={materials.Window_emission}
                />
            </group>
            //2nd window
            <group position={[-1.881, 2.159, 0.735]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube023.geometry}
                    material={materials.window_frame}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube023_1.geometry}
                    material={materials.Window_emission}
                />
            </group>

            //sofa
            <a.group position={[1.365, 0.502, 1.243]} rotation={[-0.08, -0.327, -0.026]} scale={sofa.scale}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane004.geometry}
                    // material={materials.puffy_chair}
                    material={new MeshStandardMaterial({
                        // map: cushionTexture
                        color: "#ffd59e"
                    })}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane004_1.geometry}
                    material={new MeshStandardMaterial({
                        // map: cushionTexture
                        color: "#ffd59e"
                    })}
                // material={materials.puffy_chair}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane004_2.geometry}
                    material={new MeshStandardMaterial({
                        // map: cushionTexture
                        color: "#ffd59e"
                    })}
                // material={materials.puffy_chair}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane004_3.geometry}
                    material={new MeshStandardMaterial({
                        // map: cushionTexture
                        color: "#ffd59e"
                    })}
                // material={materials.puffy_chair}
                />
            </a.group>

            <mesh receiveShadow ref={planeRef} rotation-x={-1.58} position={[-0.004, -0.323, -0.004]}>
                <planeGeometry args={[4, 4]} />
                <meshBasicMaterial color={"#000000"} opacity={0.24} transparent />
            </mesh>
            <mesh receiveShadow ref={planeRef2} position={[0.245, 0.096, -2.977]} rotation-x={-0.666}>
                {/* <planeGeometry args={[4, 2]} />
                <meshBasicMaterial color={"#777777"} opacity={0.4} /> */}
            </mesh>
        </a.group>
    )
})

useGLTF.preload('uploads_files_3291978_room+glb.glb')
export default Room
