// define all helper methods here
// this includes date/time formatting, name formatting,
// image resizing and local conversions

// all helper methods will have the format: 

// export const methodName = (params) => {
//      helper code here
//      return formattedValue
//}

// no default exports, all methods will be named exports only

import React , { useState, useRef, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

export const Spring = ({ children }) => {
    
    const ref = useRef()
  
    const [isHovered, setHovered] = useState(false)
  
    const [animatedProps, setAnimatedProps] = useSpring(() => {
      return {
        xys: [0, 0, 1],
        config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
      }
    })
  
    return (
      <animated.div
        ref={ref}
        className="spring"
        onMouseEnter={() => setHovered(true)}
        onMouseMove={({ clientX, clientY }) => {
          
          const x =
            clientX -
            (ref.current.offsetLeft -
              (window.scrollX || window.pageXOffset || document.body.scrollLeft))
  
          const y =
            clientY -
            (ref.current.offsetTop -
              (window.scrollY || window.pageYOffset || document.body.scrollTop))
  
          const dampen = 600
          const xys = [
            -(y - ref.current.clientHeight / 2) / dampen, 
            (x - ref.current.clientWidth / 2) / dampen, 
            1.01
          ]
  
          setAnimatedProps({ xys: xys });
        }}
        onMouseLeave={() => {
          setHovered(false)
          setAnimatedProps({ xys: [0, 0, 1] })
        }}
        style={{
          zIndex: isHovered ? 2 : 1,
          transform: animatedProps.xys.interpolate(
            (x, y, s) =>
              `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
          )
        }}
      >
        {children}
      </animated.div>
    )
}


export const Timer = ({startDate}) => {
    
    const [days, setDays] = useState(null)
    const [hours, setHours] = useState(null)
    const [minutes, setMinutes] = useState(null)
    const [seconds, setSeconds] = useState(null)
    const [expired, setExpired] = useState(false)

    let countDownID = null

    useEffect(() => {
        countDownID = setInterval(timerInit, 1000)

        return () => {
            if(countDownID) clearInterval(countDownID)
        }
    }, [])

    const timerInit = () => {
        
        console.log(startDate)
        
        const now = new Date().getTime()
        
        if (!startDate) {
          setExpired(true)
          return
        }

        const countDownStartDate = new Date(startDate).getTime()
        const distance = countDownStartDate - now
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)
    
        if (distance < 0) {
          
            clearInterval(countDownID)
          
            setDays(0)
            setHours(0)
            setMinutes(0)
            setSeconds(0)
            setExpired(true)
            return
        }
        
        setDays(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
        setExpired(false)

    }

    if (expired) {
        return <div className="expired">Expired :(</div>;
    }

    return (
        <div className="timer">
          
            <div className='timer-box'>
                <p className='h2 white'>{days}</p>
                <p className='t3 grey'>DAYS</p>
            </div>

            <div className='timer-box'>
                <p className='h2 white'>{hours}</p>
                <p className='t3 grey'>HOURS</p>
            </div>

            <div className='timer-box'>
                <p className='h2 white'>{minutes}</p>
                <p className='t3 grey'>MINUTES</p>
            </div>

            <div className='timer-box'>
                <p className='h2 white'>{seconds}</p>
                <p className='t3 grey'>SECONDS</p>
            </div>
            
        </div>
    )
}