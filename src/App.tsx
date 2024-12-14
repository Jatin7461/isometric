import React, { RefObject, Suspense, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Room from './components/Room'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import { AmbientLight, DirectionalLight } from 'three';
import Scene from './components/Scene';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { GUI } from 'dat.gui';
function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  const container: RefObject<HTMLDivElement> = React.createRef()
  const roomRef: RefObject<any> = useRef('')
  const camera: RefObject<any> = useRef('')
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const first = gsap.timeline({
      scrollTrigger: {
        trigger: '.firstHalf',
        // markers: true,
        scrub: true,
        start: 'top top',
        end: '1400% top',
        pin: true,
        id: "firsthalf"
      }
    });
    first.from('.firstHalfDiv', {
      yPercent: 100,
      borderTopRightRadius: 1000,
      ease: 'power2'
    })
      // .call(() => { ScrollTrigger.getById('firsthalf')?.disable(false) })
      .
      to('.firstScroll', {
        opacity: 1
      }, '<').from('.firstScroll', {
        yPercent: -100
      })
      .to('.firstHalfDiv', {
        yPercent: -100,
        borderBottomRightRadius: 1000,
        onComplete: () => {
          ScrollTrigger.getById('room')?.enable()
        }
      })

    gsap.timeline().to(document.body, {
      overflowY: 'auto',
      delay: 9
    })


    gsap.timeline({
      scrollTrigger: {
        trigger: '.secondHalf',
        markers: true,
        start: 'top top',
        end: '1000% top',
        scrub: true,
        id: 'second-half',
        pin: true
      }
    })
      .from('.secondHalfDiv', {
        yPercent: 100,
        borderTopLeftRadius: 1000,
        // delay: 15
      })
      .to('.secondScroll', {
        opacity: 1
      })
      .from('.secondScroll', {
        yPercent: -100
      })
      .to('.secondHalfDiv', {
        yPercent: -100,
        borderBottomLeftRadius: 1000
      })




  }, { scope: container })





  return (
    <div ref={container} className="container">
      <div className='canvas'>
        <Canvas ref={camera} camera={{ fov: 75, position: [0, 15, 20] }}>
          <Scene ref={roomRef} />
        </Canvas>
      </div>
      <div className='circle'>

      </div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="firstHalf">
        <div className="firstHalfDiv"></div>
        <div className="firstScroll"></div>
      </div>
      {/* <div className="spacer"></div> */}
      <div className="secondHalf">
        <div className="secondHalfDiv">

          <div className="spacer roomToLeft"></div>
          <div className="secondScroll"></div>
        </div>
      </div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
    </div>
  );
}

export default App;
