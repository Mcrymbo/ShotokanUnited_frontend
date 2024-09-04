import { jka_rwanda, suk_team } from '../assets';
import DefaultLayout from '../layout/DefaultLayout';
import { Helmet } from 'react-helmet-async';


function About() {
  <Helmet>
    <title>About</title>
    <meta name='description'
      content="Shotokan karate Kenya. Join Shotokan United and become part of a legacy of strength, discipline, and community."/>
    <meta name="keywords" content="shotokan united kenya, karate kenya" />
    <link rel="canonical" href="/about" />
  </Helmet>
  return (
    <DefaultLayout>
    <div id='about-section' className='container bg-white p-4  md:py-10'>

        <div className="relative">
          <img src={suk_team} alt="about shotokan united karate kenya" />
          <div className='absolute inset-0 bg-black opacity-20 h-full'></div>
          <div className='absolute bottom-0 left-0 p-6'>
            <h1 className='md:text-4xl text-white font-semibold'>About Us</h1>
          </div>
        </div>
        <section>   
          <div>
            <div className='flex justify-center flex-col lg:flex-row lg:space-x-10 lg:py-10 my-4 lg:px-20'>
                <article className='flex flex-col gap-4 text-lg text-left mb-8'>
                  <p>
                    Shotokan United Kenya is Non-profit organization located in
                    Kenya. It is associated with Hombu Dojo Karate international (HDKI) in Ireland,
                    which is one of the world's most prestigious, and fast-growing Shotokan Karate organisations.
                  </p>
                  <p>
                    Sensei Joshua Oude (4th Dan) serves as Chief Instructor, and the Executive and Technical
                    Committees provide administrative and practical guidance to HDKI-K/Shotokan-United Kenya.
                  </p>
                  <p>
                    We have more than 20 dojos and institutions under us not just in Nairobi but also in Mombasa,
                    Eldoret, Kisumu, Migori (neighboring cities to the capital city). Among our affiliate clubs are 3
                    universities, two government institutions, private clubs and more than 20 schools. We desire to
                    spread our love for the art in our country and impact lives.
                  </p>
                </article>
                <img src={jka_rwanda} alt="about"
                  loading="eager"
                  width={240}
                  height={194}
                  title='kibadach stance'
                  className='rounded-md w-auto md:h-[80vh]'/>
              </div>
              <div className='bg-blue-50 -mx-4 mb-8 px-4 py-8 lg:px-20'>
                        <h2 className='text-center text-xl font-semibold uppercase md:mb-8'>Core values</h2>
                        <div className='flex justify-between flex-col md:flex-row lg:space-x-4'>
                          <div >
                            <h3 className='text-l font-bold py-4'>Tradition</h3>
                            <p>We strive to preserve certain elements of traditional karate that enrich our practice and deepen our connection to its historical roots.</p>
                          </div>
                          <div>
                          <h3 className='text-l font-bold py-4'>Transformation</h3>
                            <p>We aim to explore and examine karate principles and organizational structure, incorporating modern ideas to improve every aspect of our art and community.</p>
                          </div>
                          <div>
                          <h3 className='text-l font-bold py-4'>Respect</h3>
                            <p>We strive to build a group where meritocracy drives structural power, respect is earned and freely given, and the group serves as a platform for individuals to realize their full potential.</p>
                          </div>
                          <div>
                          <h3 className='text-l font-bold py-4'>Coorperation</h3>
                            <p>We aim to build a community of like-minded karate-ka who support each other, collaborate on common goals, and actively participate in consensus-based decision-making.</p>
                          </div>
                        </div>
                    </div>
            <div>
              <div className='lg:flex lg:space-x-8 lg:justify-center items-center lg:mx-10'>
                    <div className='bg-orange-50 rounded-md justify-start lg:w-1/2'>
                      <article className='p-8 mb-4 text-lg'>
                        <h2 className='text-2xl font-semibold'>Karate Empowering communities through Holistic living</h2>
                        <p>
                            Karate serves as a catalyst for holistic community development,
                            establishing accessible training centers that transcend mere martial
                            arts instruction. These centers become more than spaces for physical
                            empowerment, offering mental discipline and self-defense skills. The
                            practice creates a shared ethos, fostering a sense of community
                            through events and cultural exchanges.
                        </p>
                        <p>
                            As individuals progress in their karate journey, they assume
                            leadership roles within the community, extending the
                            principles of respect and continual self-improvement beyond
                            the dojo. This holistic living philosophy permeates daily
                            life, influencing familial, professional, and social
                            relationships. The dojo becomes a hub for positive change,
                            radiating empowerment throughout the community.
                        </p>
                        <p>
                           Karate's impact is not confined to the physical realm; it's a transformative
                           force that inspires a resilient and united collective spirit. This ripple effect,
                           originating in the disciplined dojo environment, resonates across various facets
                           of community life, contributing to overall well-being and unity.
                        </p>
                      </article>
                    </div> 
                               
                        <div className='lg:w-1/2 text-xl' >
                            <h2 className='text-left italic font-bold'>SHU-HA-RI</h2>
                            <p className='italic mt-10 text-center'>
                              <p>" Teach good karate and be kind to people</p>
                              <p>Have Karate Adventures</p>
                              <p>Provide Opportunities "</p>                            
                            </p>
                            <div className='text-end italic mt-20 font-bold'> Scott Langley Sensei</div>
                        </div> 
              </div>
              
            </div>
          </div>
        </section>    
    </div>
    </DefaultLayout>
  )
}

export default About
