import React,{useState} from 'react'
import styles from './Slider.module.css'
import leftArrow from '../../images/leftArrow.png'
import rightArrow from '../../images/rightArrow.png'

import Image from 'next/image'

export default function Slider({arrayOfImages}) {

  const [index, setIndex] = React.useState(0)

  let leftHandler = () => {
      setIndex((prv) => prv -= 1)
  }
  let rightHandler = () => {
      setIndex((prv) => prv += 1)
  }
  return (
    <div className={styles.container}>

      <div className={styles.slider}>
        {
          index == 0 ? null : ( <div className={styles.leftArrow} onClick={leftHandler}><Image src={leftArrow} alt='left' /></div>)
        }
        {
          index >= arrayOfImages.length -1 ? null : (<div className={styles.rightArrow} onClick={rightHandler}><Image src={rightArrow} alt='left' /></div>)
        }
        <Image src={arrayOfImages[index]} alt='image' style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

    </div>



  )
}
