import React, { useEffect, useState } from 'react'

export default function ScreenWidth() {
    const [screenWidth,setScreenWidth] = useState(0)
    let reSize = (event)=>{
        setScreenWidth(event.currentTarget.innerWidth)
    }
    useEffect(()=>{
        setScreenWidth(window?.innerWidth)
     window.addEventListener('resize',reSize)
     return ()=>{
        window.removeEventListener('resize',reSize)
     }
    },[])
  return [screenWidth]
}
