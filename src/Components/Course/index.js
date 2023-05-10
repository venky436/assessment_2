import React,{useEffect, useRef} from 'react'
import styles from './Course.module.css'
import leftArrowImg from '../../images/leftArrow_1.png'
import Image from 'next/image'
import starImg from '../../images/star.png'
import bookMark from '../../images/bookmark.png'
import share from '../../images/share.png'

export default function Course() {

    const vidRef = useRef()

    useEffect(()=>{
      vidRef.current.play();
    },[])
    return (
        <section className={styles.mainContainer}>
            <div className={styles.fellow}>
                <div className={styles.btns}>
                    <Image src={leftArrowImg} alt='arrow' className={styles.leftArrow} />
                    <button className={styles.fellowshipBtn}>
                        Fellowship
                    </button>
                </div>

            </div>

            <div className={styles.container}>
                <section className={styles.leftSide}>
                    <h1 className={styles.heading}>
                        Clinical Preventive and Noninvasive Cardiology
                    </h1>

                    <p className={styles.text}>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                    </p>
                    {/* Starts */}
                    <div className={styles.starBox}>

                        <Image src={starImg} alt='star' style={{
                            display: 'block',
                            width: '30px',
                            height: '30px'
                        }} />
                        <Image src={starImg} alt='star' style={{
                            display: 'block',
                            width: '30px',
                            height: '30px'
                        }} />
                        <Image src={starImg} alt='star' style={{
                            display: 'block',
                            width: '30px',
                            height: '30px'
                        }} />
                        <Image src={starImg} alt='star' style={{
                            display: 'block',
                            width: '30px',
                            height: '30px'
                        }} />
                        <Image src={starImg} alt='star' style={{
                            display: 'block',
                            width: '30px',
                            height: '30px'
                        }} />

                    </div>
                    {/* Batch Date and Course Price */}
                    <section className={styles.date_course}>
                        <div className={styles.batch}>
                            <span className={styles.span}>Next Batch from</span>
                            <h3 className={styles.date}>15 May 2023</h3>

                        </div>
                        <div className={styles.batch}>
                            <span className={styles.span}>Course Price</span>
                            <h3 className={styles.date}>EMI starting $16,000*</h3>

                        </div>
                    </section>
                    {/* Buttons */}
                    <section className={styles.buttonBox}>
                        <button className={styles.enquire}>
                            Enquire Now
                        </button>
                        <button className={styles.buyNow}>
                            Buy Now
                        </button>
                        <button className={styles.bookMark}>
                            <Image src={bookMark} alt='bookmark' style={{
                                display: 'block',
                                width: '20px',
                                height: '20px'
                            }} />
                            <span className={styles.hoverText}>
                                Bookmark
                            </span>

                        </button>
                        <button className={styles.bookMark}>
                            <Image src={share} alt='bookmark' style={{
                                display: 'block',
                                width: '20px',
                                height: '20px'
                            }} />
                            <span className={styles.hoverText}>
                                Share
                            </span>

                        </button>
                    </section>
                </section>
                <section className={styles.rightSide}>
                    <div className={styles.video}>
                        <video  style={{ width: '100%', height: '100%' }}  ref={vidRef}
                            muted
                            autoPlay
                            loop
                            playsInline
                            >
                            <source src={'https://media.exper.com/exper-content-temp/200.mp4'} type="video/mp4" />
                        </video>
                    </div>
                </section>

            </div>
        </section>
    )
}
