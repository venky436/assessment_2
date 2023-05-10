import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Course from '@/Components/Course'
import Accrodion from '@/Components/Accordion'
import { accordionData } from '@/AccordionData'
import { curriculumData } from '@/AccordionData'
import AccrodionNew from '@/Components/AccordionNew'
import MiddleSection from '@/Components/MiddleSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home({accordionData,curriculumData}) {
  return (
    <main>
      <Head>
        <title>Empowering Medical Professionals with Online Learning</title>
        <meta name="description" content="Medversity is an online platform that offers medical professionals and students a comprehensive range of online courses to enhance their knowledge and skills." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content=" medical education, online learning, medical courses, professional development, healthcare, medical professionals, medical students, technology in medicine."></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Course/>
       <MiddleSection accordionData={accordionData} curriculumData={curriculumData}/>
    </main>
  )
}



//  getServerSideProps()  - will use for fetching data form sever and serve to page
//  getStaticProps() - data fetch and Static Site Generation
//  getStaticPath() - to create dynamic routes in Static Site Generation(SSG)


//  Here no apis to fetch the data so i'm passing data to page from this function

export async function getServerSideProps(context){
  return {
    props : {
      accordionData : accordionData,
      curriculumData : curriculumData,

    }
  }
}
