import React, { useState, useEffect, useRef } from 'react'
import upArrow from '../../images/upArrow.png'
import downArrow from '../../images/downArrow.png'
import styles from './AccordionNew.module.css'
import Image from 'next/image'
export default function AccrodionNew({ data }) {
  const [activeCard, setActiveCard] = useState();

  let onClickHandler = (id) => {
    if (activeCard == id) {
      setActiveCard(null);
    } else {
      setActiveCard(id);
    }
  };
  return (
    <section className={styles.main_container}>
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}>
        {data?.map((each, index) => (
          <div key={index} className={styles.card}>
            {/* black dot */}
            <div className={index == activeCard ? styles.dot_active : styles.dot}>
            </div>
            <div
              className={
                index == activeCard
                  ? ` ${styles._heading} ${styles.active_heading}`
                  : styles._heading
              }
              onClick={() => onClickHandler(index)}
            >
              <h2 className={styles.main_heading}>{index + 1}. {each.title}</h2>
              <Image
                src={activeCard == index ? upArrow : downArrow}
                alt="nothing"
                style={{
                  display: 'block',
                  width: '10px',
                  height: '10px'
                }}
              />
            </div>
            <div
              className={
                activeCard == index
                  ? `${styles.hidden_toggle} ${styles.hidden_toggle_active}`
                  : styles.hidden_toggle
              }
            >
              {
                each.sub.map((each, index) => (
                  <div className={styles.each_card} key={index}>
                    <h2 className={styles.each_heading}> {each.subHeading ?? null}</h2>
                  </div>
                ))
              }
            </div>
          </div>
        ))}
      </section>
    </section>
  )
}
