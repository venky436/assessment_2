import React, { useEffect, useState } from 'react'
import styles from './NavBar.module.css'
import Image from 'next/image'
import logo from '../../images/logo.png'
import userIcon from '../../images/user.png'
import searchImg from '../../images/search.png'
import Link from 'next/link'
import ScreenWidth from '../ScreenWidth'
import exitImg from '../../images/exit.png'
import menuImg from '../../images/menu.png'
import suitcase from '../../images/suitcase.png'
import heart from '../../images/heart.png'
export default function Navbar() {

  let [screenWidth] = ScreenWidth()
  const [isCardActive, setIsActiveCard] = useState(false)
  const [showSideMenu, setShowSideMenu] = useState(false)

  let toggleHandler = () => {
    setIsActiveCard(false)
    setShowSideMenu(!showSideMenu)
  }
  let exitHandler = () => {
    setShowSideMenu(false)
  }
  
  let links = [
    'Cardiology',
    'Diabetes',
    'Oncology'
  ]

  return (
    <header className={styles.mainContainer}>
      <div className={styles.container}>

        <Image src={logo} alt='Logo' />

        <nav className={styles.center} >
          {/* <div className={styles.btns}> */}
          <div className={styles.btn} onClick={() => setIsActiveCard(!isCardActive)}>
            <Image src={userIcon} alt='menu' style={{
              display: 'block',
              width: '20px',
              height: '20px'
            }} />
            <h3 className={styles.btn_text}>Speciality</h3>

            <div className={isCardActive ? styles.card_active : styles.card}>
              <ul className={styles.links}>
                {
                  links.map((each, index) => (
                    <li className={styles.link} key={index}>
                      <Image src={heart} alt='heart' style={{
                        display: 'block',
                        width: '20px',
                        height: '20px'
                      }} /> {each}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          {
            screenWidth > 800 ? (<div className={styles.btn}>
              <Image src={suitcase} alt='menu' style={{
                display: 'block',
                width: '20px',
                height: '20px'
              }} />
              <h3 className={styles.btn_text}>Careers</h3>
            </div>) : null
          }
          {/* </div> */}
        </nav>

        <div className={showSideMenu ? styles.right_active : styles.right}>
          <button className={styles.exit} onClick={exitHandler}>
            <Image src={exitImg} alt='exit' style={{
              display: 'block',
              width: '30px',
              height: '30px'
            }} />
          </button>
          <button className={styles.search}>
            <Image src={searchImg} alt='search' style={{
              display: 'block',
              width: '20px',
              height: '20px'
            }} />
          </button>
          <buttom className={styles.signUp}>
            Sign Up
          </buttom>
          <buttom className={styles.login}>
            Login
          </buttom>
          {
            screenWidth < 800 ? (<div className={styles.btn}>
              <Image src={suitcase} alt='menu' style={{
                display: 'block',
                width: '20px',
                height: '20px'
              }} />
              <h3 className={styles.btn_text}>Careers</h3>
            </div>) : null
          }
        </div>
      </div>
      {
        screenWidth < 800 ? (<button className={styles.toggleBtn} onClick={toggleHandler}>
          <Image src={menuImg} alt='exit' style={{
            display: 'block',
            width: '30px',
            height: '30px'
          }} />
        </button>) : null
      }

    </header>
  )
}
