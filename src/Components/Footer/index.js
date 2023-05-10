import React from 'react'
import styles from './Footer.module.css'
import instagram from '../../images/instagram.png'
import facebook from '../../images/facebook.png'
import gmail from '../../images/gmail.png'
import logo from '../../images/med_logo.png'

import Image from 'next/image'
export default function Footer() {
  return (
    <footer className={styles.main}>
      <section className={styles.container}>
        <div className={styles.firstSection}>
          <div className={styles.logo}>
            <Image src={logo} alt='logo' style={{ display: 'flex', width: '100%', height: '100%', objectFit: "contain" }} />
          </div>
          <div className={styles.social}>
            <div className={styles.icon}>
              <Image src={instagram} alt="icons" style={{ display: 'flex', width: '100%', height: '100%' }} />
            </div>
            <div className={styles.icon}>
              <Image src={facebook} alt="icons" style={{ display: 'flex', width: '100%', height: '100%' }} />

            </div>
            <div className={styles.icon}>
              <Image src={gmail} alt="icons" style={{ display: 'flex', width: '100%', height: '100%' }} />

            </div>
            <div className={styles.icon}>
              <Image src={instagram} alt="icons" style={{ display: 'flex', width: '100%', height: '100%' }} />

            </div>

          </div>
        </div>
        <div className={styles.secondSection}>
          <h2 className={styles.heading_text}>Company Info</h2>
          <ul className={styles.links}>
            <li className={styles.link}>About US</li>
            <li className={styles.link}>Careers</li>
            <li className={styles.link}>Books</li>
            <li className={styles.link}>Journal</li>
          </ul>
        </div>
        <div className={styles.secondSection}>
          <h2 className={styles.heading_text}>Legal</h2>
          <ul className={styles.links}>
            <li className={styles.link}>About US</li>
            <li className={styles.link}>Careers</li>
            <li className={styles.link}>Books</li>
            <li className={styles.link}>Journal</li>
          </ul>
        </div>
      </section>
      <hr />
      <section className={styles.final}>
        <h2 className={styles.fellowship}>FellowShip Courses</h2>
        <p className={styles.final_text}>
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s | when an unknown printer took a galley of type and scrambled it to make a type specimen book | It has survived not only five centuries | but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
      </section>
    </footer>
  )
}
