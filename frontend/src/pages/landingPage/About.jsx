// import { dojo, mission } from "../../assets"
import { styles } from "../../styles"
import {allTeam1, ladiesTeam1} from '../../assets';

const About = () => {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-screen-lg py-10 px-4 sm:px-6 md:px-8'>
        <h1 className={`${styles.sectionHeadText} text-center`}>About Us</h1>
        <section className='md:flex justify-center md:py-10 md:space-x-10 mb-6'>
          <div className='w-full mb-6 md:mb-0'>
            <h1 className={`${styles.sectionSubText}`}>What we do</h1>
            <p>
              At Shotokan United Kenya, we teach traditional Japanese karate, focusing on discipline,
              respect, and perseverance. Our expert instructors guide students of all levels to master Shotokan
              techniques, enhance physical fitness, and develop mental strength and self-defense skills. We provide
              a holistic training experience that improves coordination, flexibility, and overall well-being,
              fostering a supportive community. With regular belt examinations, tournament participation, and
              special workshops, our members have ample opportunities for continuous learning and growth. Join us to
              embark on a transformative journey that strengthens both body and mind.
            </p>
          </div>
          <img src={ladiesTeam1} loading='eager' alt="dojo" className='w-full md:w-[50%] object-cover' />        
        </section>
        <section className='md:flex justify-between md:space-x-10'>
          <img src={allTeam1} loading="eager" alt="mission" className='w-full md:w-[50%] md:h-auto object-cover mb-6 md:mb-0' />   
          <div className='w-full'>
            <h1 className={`${styles.sectionSubText}`}>Mission</h1>
            <p>
              Our mission at Shotokan-United Kenya Karate Club is to empower individuals through traditional
              Japanese karate, fostering discipline, respect, and perseverance. We aim to enhance members
              physical fitness, mental strength, and self-defense skills, providing expert instruction and a
              supportive community for lifelong martial arts dedication.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
