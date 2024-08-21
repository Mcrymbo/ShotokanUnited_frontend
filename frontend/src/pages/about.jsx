import { boyboy } from '../assets';
import DefaultLayout from '../layout/DefaultLayout';
import { Helmet } from 'react-helmet-async';


function About() {
  <Helmet>
    <title>History</title>
    <meta name='description'
      content="Shotokan United Kenya. Join Shotokan United and become part of a legacy of strength, discipline, and community."/>
    <meta name="keywords" content="shotokan united kenya, karate kenya" />
    <link rel="canonical" href="/about" />
  </Helmet>
  return (
    <DefaultLayout>
    <div id='about-section' className='bg-white p-4  md:py-10'>
        <div className='mx-auto w-3/4 border-b-2'>
              <h1 className='text-center md:text-4xl p-6 font-semibold'>About Shotokan-United Kenya.</h1>
        </div>
        <section  className=''>   
          <div>
            <div className='flex justify-center flex-col lg:flex-row lg:space-x-10 lg:py-20 my-4 lg:px-20'>
              <div className='lg:w-1/2'>
                    <div className='text-center lg:text-xl font-semibold mb-6'>
                        <h2>About Us</h2>
                    </div>
                    <div className='text-left mb-8'>
                      <p>
                        Shotokan United Kenya is an organization that has a membership of about 300 members which grows
                        daily as new students join our various coaches in different dojos.
                      </p>
                      <p>
                        We greatly value learning and growing in our knowledge of shotokan karate and this has seen us
                        travel widely in our region, Tanzania, Uganda and Rwanda to attend workshops. We have dreams of
                        travelling to Japan one day.
                      </p>
                      <p>
                        We have more than 20 dojos and institutions under us not just in Nairobi but also in Mombasa,
                        Eldoret, Kisumu, Migori (neighboring cities to the capital city). Among our affiliate clubs are 3
                        universities, two government institutions, private clubs and more than 20 schools. We desire to
                        spread our love for the art in our country and impact lives.
                      </p>
                    </div>
                </div>
                <img src={boyboy} alt="about"
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
                            <h3 className='text-l font-bold py-4'>Soshin (Beginner's mind)</h3>
                            <p>Regardless of our rank or experience level, we maintain an open-minded and enthusiastic
                              approach to learning. We enter each training session with a new outlook, eager to gain
                              knowledge and enhance our abilities. Soshin encourages us to stay humble, release any preconceived
                              notions, and stay receptive and grounded.</p>
                          </div>
                          <div>
                          <h3 className='text-l font-bold py-4'>Kaizen (Constant improvement)</h3>
                            <p>The principle of kaizen motivates us to seek continuous improvement in our karate practice and personal
                              lives. We believe that small, incremental steps towards self-betterment lead to meaningful and lasting
                              change. By adopting kaizen, we are encouraged to set goals, seek feedback, and consistently strive to
                              become better versions of ourselves.</p>
                          </div>
                          <div>
                          <h3 className='text-l font-bold py-4'>Zanshin (state of awareness)</h3>
                            <p>Zanshin represents the idea of always staying aware. It encourages us to remain focused,
                              centered, and attentive, both in training and daily life. By developing zanshin, we improve
                              our ability to respond quickly and effectively, enhancing our skills and fostering mindfulness
                              and tranquility.</p>
                          </div>
                          <div>
                          <h3 className='text-l font-bold py-4'>Reigi (Respect and awareness)</h3>
                            <p>Central to our karate club is a deep respect for ourselves, our peers, our instructors, and our art. We create
                              an atmosphere where mutual respect and courtesy are essential. Bowing before and after training symbolizes
                              this respect, nurturing a spirit of humility and gratitude. By consistently practicing this principle, we
                              develop discipline, self-control, and a profound sense of honor.</p>
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
