// import { dojo, mission } from "../../assets"
import { styles } from "../../styles"
import {allTeam1, ladiesTeam1} from '../../assets';

const About = () => {
  return (
    <div className='bg-white container mx-auto py-10 text-lg text-gray-700 px-4 sm:px-6 md:px-8 bg-gradient-to-tl from-green-100 via-gray-400 to-gray-300 overflow-hidden'>
      <div className=''>
        <h1 className='text-start font-medium text-lg'>About Us</h1>
        <section className='md:flex justify-center md:py-4 md:space-x-10 mb-6'>
          <div className='w-full mb-6 md:mb-0'>
            <h3 className={`${styles.sectionSubText}`}>What we do</h3>
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
          <img src={ladiesTeam1} loading='eager' alt="dojo"
            width={240}
            height={192}
            title="about image"
            className='w-full md:w-[50%] object-cover rounded-md' />        
        </section>
        <section className='md:flex justify-between md:space-x-10'>
          <img src={allTeam1} loading="eager" alt="mission"
              width={240}
              height={192}
              title="kibadachi"
              className='w-full md:w-[50%] md:h-auto object-cover mb-6 md:mb-0 rounded-md' /> 
          <div className='w-full'>
            <h3 className={`${styles.sectionSubText}`}>Vision</h3>
            <p>
            To cultivate a legacy of martial arts that shapes strong, disciplined, and confident individuals
            who inspire positive change in society.
            </p>

            <h3 className={`${styles.sectionSubText} mt-8`}>Mission</h3>
            <p>
            To empower individuals through the fusion of traditional Shotokan karate and modern training,
            building discipline, resilience, and lifelong excellence in a supportive community.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
