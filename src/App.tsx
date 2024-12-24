'use client'
import React, { LegacyRef, RefObject, useEffect, useRef, useState } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber'
import Scene from './components/Scene';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ContentHeading from './components/ContentHeading';
import { FirstHalfContentHeading, FirstHalfContentString, FirstHalfHeadingName, secondHalfContentHeading, secondHalfContentText, secondHalfHeadingName, thirdHalfContentHeading, thirdHalfContentText, thirdHalfHeadingName } from './components/Data';
import ReactLenis from '@studio-freight/react-lenis';
import Name from './components/Name';
import SplitType from 'split-type';
import { LoadingManager } from 'three';
import { Loader, useProgress } from '@react-three/drei';
function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }


  const [smoothScroll, setSmoothScroll] = useState(false)
  const [start, setStart] = useState(false)

  const { progress } = useProgress();
  useEffect(() => {
    if (progress == 100) {
      setStart(() => {
        return true
      })
    }
  }, [progress])

  // let smoothScroll = false
  const container: RefObject<HTMLDivElement> = React.createRef()
  const roomRef: RefObject<any> = useRef('')
  const camera: RefObject<any> = useRef('')
  const lenisRef: LegacyRef<any> = useRef()

  useGSAP(() => {

    if (start) {
      console.log('hihi')
      const leftText = new SplitType('.leftText')
      const rightText = new SplitType('.rightText')
      gsap.to(['.leftText', '.rightText'], {
        opacity: 1
      })
      gsap.fromTo(leftText.chars, {
        // opacity: 0,
        y: 40,
        skewX: 30,
      }, {
        y: 0,
        opacity: 1,
        skewX: 0,
        duration: 0.3,
        stagger: 0.03,
        delay: 6,
        onStart: () => {
          console.log('starting')
        },
        onComplete: () => {
          console.log('completed')
        }
      })

      gsap.fromTo(rightText.chars, {
        y: 40,
        opacity: 0,
        skewX: 30,
      }, {
        duration: 0.3,
        stagger: 0.03,
        delay: 6,
        opacity: 1,
        skewX: 0,
        y: 0

      })
      gsap.timeline().from('.angleDown', {
        opacity: 0,
        delay: 7.25
      })
        .fromTo('.angleDown', {
          y: 8
        }, {
          y: -8,
          repeat: -1,
          yoyo: true,
          ease: 'linear',
          duration: 1,
          onStart: () => {
            // console.log(smoothScroll)
            // smoothScroll = true
            console.log(lenisRef.current.lenis.options.smoothWheel = true)
          }
        })


    }
  }, { scope: container, dependencies: [start] })

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    // SplitType.create('.leftText')

    const first = gsap.timeline({
      scrollTrigger: {
        trigger: '.firstHalf',
        scrub: true,
        start: 'top top',
        end: '2000% top',
        pin: true,
        id: "firsthalf"
      }
    });
    first.from('.firstHalfDiv', {
      yPercent: 100,
      borderTopRightRadius: 500,
      ease: 'linear'
    })
      // .call(() => { ScrollTrigger.getById('firsthalf')?.disable(false) })
      .
      to('.firstScroll', {
        opacity: 1
      }, '<').from('.firstScroll', {
        yPercent: -100,
        ease: 'linear'
      })
      .fromTo('.firstContent', {
        yPercent: 190
      }, { yPercent: -100 }, '<')
      .to('.firstHalfDiv', {
        yPercent: -100,
        borderBottomRightRadius: 500,
        ease: 'linear',
        onComplete: () => {
          ScrollTrigger.getById('room')?.enable()
        }
      })
      .to('.firstScroll', {
        yPercent: -100,
        ease: 'linear'
      }, '<')





    gsap.timeline({
      scrollTrigger: {
        trigger: '.secondHalf',
        start: 'top top',
        end: '2000% top',
        scrub: true,
        id: 'second-half',
        pin: true
      }
    })
      .from('.secondHalfDiv', {
        yPercent: 100,
        borderTopLeftRadius: 500,
        // delay: 15
        ease: 'linear'
      })
      .to('.secondScroll', {
        opacity: 1
      }, '<')
      .from('.secondScroll', {
        yPercent: -100,
        ease: 'linear'
      })
      .fromTo('.secondContent', {
        yPercent: 200
      }, {
        yPercent: -100
      }, '<')
      .to('.secondHalfDiv', {
        yPercent: -100,
        borderBottomLeftRadius: 500,
        ease: 'linear'
      })


    gsap.timeline({
      scrollTrigger: {
        trigger: '.thirdHalf',
        scrub: true,
        start: 'top top',
        end: '1500% top',
        pin: true,
        id: "third"
      }
    })
      .from('.thirdHalfDiv', {
        yPercent: 100,
        borderTopRightRadius: 500,
        ease: 'linear'
      })
      .to('.thirdScroll', {
        opacity: 1
      }, '<')
      .from('.thirdScroll', {
        yPercent: -100,
        ease: 'linear'

      })
      .fromTo('.thirdContent', {
        yPercent: 200
      }, {
        yPercent: -100,
        ease: 'linear'
      }, '<')
      .to('.thirdHalfDiv', {
        yPercent: -100,
        borderBottomRightRadius: 500,
        ease: 'linear'

      })
      .to('.thirdScroll', {
        yPercent: -100,
        ease: 'linear'
      }, '<')




  }, { scope: container })

  // console.log('hi')

  return (
    <ReactLenis
      ref={lenisRef}
      root options={{
        wheelMultiplier: 2,
        smoothWheel: smoothScroll
      }}>

      <div ref={container} className="container">
        <div className='canvas'>
          <Canvas shadows ref={camera} camera={{ fov: 75, position: [0, 25, 20] }}>
            <Scene ref={roomRef} />
          </Canvas>
          <Loader />
        </div>
        <Name />
        <div className="floor">
          <Canvas shadows camera={{ fov: 75 }}>
            {/* <Floor /> */}
          </Canvas>
        </div>
        <div className='circleRed'></div>
        <div className='circleGreen'></div>
        <div className='circleBlue'></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="firstHalf">
          <div className="firstHalfDiv">
            <ContentHeading showButtons="" color='#ff6767' number='01' containerClass='firstContent' headingName={FirstHalfHeadingName} contentHeading={FirstHalfContentHeading} contentText={FirstHalfContentString} />
          </div>
          <div className="firstScroll"></div>
        </div>
        <div className="secondHalf">
          <div className="secondHalfDiv">
            <ContentHeading showButtons="" color='#5ec06d' number='02' containerClass='secondContent' headingName={secondHalfHeadingName} contentHeading={secondHalfContentHeading} contentText={secondHalfContentText} />

            <div className="spacer roomToLeft"></div>
            <div className="secondScroll"></div>
          </div>
        </div>
        <div className="spacer roomToRight"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="thirdHalf">
          <div className="thirdHalfDiv">
            <ContentHeading showButtons="display-block" color='#8585ff' number='03' containerClass='thirdContent' headingName={thirdHalfHeadingName} contentHeading={thirdHalfContentHeading} contentText={thirdHalfContentText} />
          </div>
          <div className='thirdScroll'></div>
        </div>
        <div className="spacer thankyou"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
        <div className="spacer"></div>
      </div>
    </ReactLenis >
  );
}

export default App;



// <h7 class="coh-style-gilroy-bold coh-color-powerful-purple icon-text coh-style-margin-bottom-16 DesktopH7">TELL US</h7>
// <h3 class="coh-style-causten-rounded-medium coh-color-powerful-purple coh-style-margin-bottom-24">
//     Are you interested in asking your doctor about JOURNAVX?
// </h3>
// <p class="coh-style-gilroy-bold coh-color-powerful-purple coh-style-margin-bottom-16" style="max-width:400px;">
//     Choose a response. Then we’ll direct you to helpful information based on your answer.
// </p>
// <p class="coh-style-margin-bottom-8 coh-style-show-in-desktop-only coh-style-spacer-height-zero">
//     &nbsp;
// </p>



{/* <h7 class="coh-style-gilroy-bold coh-color-powerful-purple icon-text DesktopH7 coh-style-margin-bottom-24">FOR YOU</h7>
<p class="coh-style-margin-bottom-16 coh-style-spacer-height-zero coh-style-show-in-desktop-only">
    &nbsp;
</p> */}