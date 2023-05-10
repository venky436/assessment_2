import React from 'react'
import styles from './MiddleSection.module.css'
import AccrodionNew from '../AccordionNew'
import Accrodion from '../Accordion'
import Image from 'next/image'
import duration from '../../images/clock.png'
import pdf from '../../images/pdf.png'
import certificate from '../../images/certificate.png'
import download from '../../images/download.png'
import invite from '../../images/invite.png'
import share from '../../images/share.png'
import Slider from '../Slider'
import degree from '../../images/degree.png'
import certificate_2 from '../../images/certificate_1.jpg'
import point from '../../images/point.png'

import Slide_1 from '../../Images/slide_1.jpg'
import Slide_2 from '../../Images/slide_2.png'
import Slide_3 from '../../Images/slide_3.jpg'

export default function MiddleSection({accordionData,curriculumData}) {

  let data = [
    ' when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    ' when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    ' when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    ' when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  ]
  let sliderImages = [
    Slide_1,Slide_2,Slide_3
  ]
  return (
    <section className={styles.main}>
      <div className={styles.container}>

        <div className={styles.features}>
          <h2 className={styles.heading}>Key Features</h2>
          {
            data.map((each, index) => (
              <div className={styles.each_feature} key={index}>
                 <Image src={point} alt='dot' style={{
                  display: 'block',
                  width: '7px',
                  height: '7px'
                }}/> {each}
              </div>

            ))
          }
        </div>
        <div className={styles.description}>
          <h2 className={styles.heading}>Description</h2>
          <p className={styles.pera_1}>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <p className={styles.pera_2}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident
          </p>
          <p className={styles.pera_3}>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          {
            data.map((each, index) => (
              <div className={styles.each_feature} key={index}>
                <Image src={point} alt='dot' style={{
                  display: 'block',
                  width: '7px',
                  height: '7px'
                }}/>{each}
              </div>

            ))
          }
        </div>
        <div className={styles.curriculum}>
          <h2 className={styles.heading}>Curriculum</h2>
          <AccrodionNew data={curriculumData} />

        </div>
        <div className={styles.faq}>
          <h2 className={styles.heading} style={{
            textAlign: 'center'
          }}>FAQs</h2>
          <Accrodion data={accordionData} />

        </div>

        {/* Right Side  */}
        <div className={styles.certificate}>
          {/* Duration */}

          <div className={styles.certificate_sub} >
            <div className={styles.duration}>
              <Image src={duration} alt={"duration"}
                className={styles.clockImg} />
              <div className={styles.durationText}>
                <h2 className={styles.du_heading}>Duration</h2>
                <h3 className={styles.time}>24 Months</h3>
              </div>

            </div>
            {/* Certificate */}
            <div className={styles.certi}>

              <div className={styles.creti_text}>
                <Image src={certificate} alt='certificate' style={{
                  display: 'block',
                  width: '20px',
                  height: '20px'
                }} />
                <h4 >Sample Certificate</h4>
              </div>
              <div className={styles.certificateBox}>
                <Image src={certificate_2} alt='certificate' style={{
                  display : 'flex',
                  width : '100%',
                  height : '100%'
                }}/>
              </div>
            </div>
            {/* Eligibility */}
            <div className={styles.eligibility}>
              <h4>Course Eligibility</h4>
              <h5 className={styles.eli}>. Md|MS|DNB</h5>
              <h5 className={styles.eli}>. MBBS</h5>

            </div>
            {/* PDF */}
            <div className={styles.pdf}>
              <Image src={pdf} alt='download' style={{
                display: 'block',
                width: '20px',
                height: '20px'
              }} />
              <h3>Brochure Download</h3>
              <Image src={download} alt='download' style={{
                display: 'block',
                width: '20px',
                height: '20px'
              }} />

            </div>

          </div>
          {/* Slider  */}
          <div className={styles.slider_1} >
            <div className={styles.slider_1_text}>
              <Image src={degree} alt='degree' style={{
                display: 'block',
                width: '20px',
                height: '20px'
              }} />
              <h3 className={styles.slider_1_heading}>Directors & Faculty</h3>
            </div>
            <Slider arrayOfImages={sliderImages} />
          </div>
          {/* Slider_2 */}
          <div className={styles.slider_2} >
            <div className={styles.slider_1_text}>
              <Image src={degree} alt='degree' style={{
                display: 'block',
                width: '20px',
                height: '20px'
              }} />
              <h3 className={styles.slider_1_heading}>Accreditation Partners</h3>
            </div>
            <Slider arrayOfImages={sliderImages} />
          </div>
          {/* Invite */}
          <div className={styles.invite}>
            <Image src={invite} alt='invite' style={{
              display: 'block',
              width: '100%',
              height : '150px',
            }} />
            <h3 className={styles.invite_heading}>Invite your friends</h3>
            <p className={styles.invite_text}>Inroll in the best medvarsity courses and grow your skills</p>

            <div className={styles.invite_share}>
              <h2>INVITE NOW</h2>
              <Image src={share} alt='invite' style={{
                display: 'block',
                width: '15px',
                height: '15px'
              }} />
            </div>
          </div>
        </div>
      </div>
      <h3 className={styles.bottom_text}>*Based on 12 Emis,subjected to approval from finance partner and your credit report</h3>
    </section>
  )
}
