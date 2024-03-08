import React from 'react'

import backgroundImage from '../assets/images/img7.jpg';
import img6 from '../assets/images/img6.jpg'


function About() {
  return (
    <div id='about-section' className='bg-neutral-200 py-10'>
        <div className='mx-auto w-3/4 border-b-2'>
              <h1 className='text-center text-4xl p-6 font-semibold'>About Shotokan-United Kenya</h1>
        </div>
        <section  className='px-20'>   
          <div>
            <div className='grid lg:grid-cols-3 my-20'>
              <img src={img6} alt="" className='col-span-2 w-full h-full rounded-xl'/>
              <div>
                    <div className='text-center text-xl font-semibold mb-6'>
                        <h1>OUR VISION</h1>
                    </div>
                    <div className='px-16 text-center'>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Totam hic fugit cum, doloribus asperiores exercitationem a
                        error nulla delectus optio. Consectetur dolorem dolor saepe similique
                        impedit vitae architecto id vel repellat provident error, consequatur
                        tenetur cumque praesentium quia. Ab possimus, ut eligendi nostrum
                        accusamus esse mollitia unde dolor. Iste voluptate, culpa obcaecati,
                        dignissimos veritatis eaque dicta laudantium dolor ut excepturi nostrum
                        nam. Beatae, facere? Fugit placeat, inventore veritatis temporibus eum
                        quae quas dolores quidem deleniti, fugiat ab nam sapiente distinctio,
                        culpa ullam delectus totam. Ratione vitae ex soluta impedit repudiandae
                        facilis? Nemo corrupti sequi voluptas ab, cum nostrum autem ut.</p>
                    </div>
                </div>
              </div>
            <div>
              <div className='lg:grid grid-cols-5 grid-rows-2 gap-10'>
                    <div className='lg:col-span-2 row-span-2 bg-neutral-300 rounded-lg'>
                      <article className='mx-16 my-8 space-y-4 text-lg'>
                        <h1 className='text-2xl font-semibold'>Karate Empowering communities through Holistic living</h1>
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
                    <div className='lg:col-span-3 row-span-1'>
                        <h1 className='text-center text-xl font-semibold uppercase mb-8'>Core values</h1>
                        <div className='grid sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                          <div >
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Totam hic fugit cum, doloribus asperiores exercitationem a
                          error nulla delectus optio. Consectetur dolorem dolor saepe similique
                          impedit vitae architecto id vel repellat provident error, consequatur
                          tenetur cumque praesentium quia. Ab possimus, ut eligendi nostrum
                          accusamus esse mollitia unde dolor.</p>
                          </div>
                          <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Totam hic fugit cum, doloribus asperiores exercitationem a
                          error nulla delectus optio. Consectetur dolorem dolor saepe similique
                          impedit vitae architecto id vel repellat provident error, consequatur
                          tenetur cumque praesentium quia. Ab possimus, ut eligendi nostrum
                          accusamus esse mollitia unde dolor.</p>
                          </div>
                          <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Totam hic fugit cum, doloribus asperiores exercitationem a
                          error nulla delectus optio. Consectetur dolorem dolor saepe similique
                          impedit vitae architecto id vel repellat provident error, consequatur
                          tenetur cumque praesentium quia. Ab possimus, ut eligendi nostrum
                          accusamus esse mollitia unde dolor.</p>
                          </div>
                          <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Totam hic fugit cum, doloribus asperiores exercitationem a
                          error nulla delectus optio. Consectetur dolorem dolor saepe similique
                          impedit vitae architecto id vel repellat provident error, consequatur
                          tenetur cumque praesentium quia. Ab possimus, ut eligendi nostrum
                          accusamus esse mollitia unde dolor.</p>
                          </div>
                        </div>
                    </div>
                    <div className='lg:col-span-3'>
                      <div className='mt-20'>
                        <div className=''>
                            <h1 className='text-left ml-20 italic'>SHU-HA-RI</h1>
                            <p className='italic mt-10 text-center'>
                              <p>"Teach good karate and be kind to people</p>
                              <p>Have Karate Adventures</p>
                              <p>Provide Opportunity"</p>                            
                            </p>
                            <div className='text-end mr-20 italic mt-20'> Scott Langley Sensei</div>
                        </div>
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-gradient-to-tr from-neutral-900 to-neutral-700 relative mt-20'>
            <img src={backgroundImage} alt="" className='w-full h-full object-cover absolute mix-blend-overlay' />
            <div className='grid grid-cols-4 w-full text-white px-20 py-10 '>
                <div className='col-span-3'>
                <div >
                  <h1 className='text-2xl'><span className='uppercase font-semibold'>Shotokan-United Kenya</span> <span className='block'>"Empowering Communities through holistic living"</span></h1>
                  <div className='my-6'>
                    <h1> <span className='text-xl font-bold'>Sensei Joshua Oude</span>
                    <span className='block text-lg'>"Chief-Technical Officer: </span><span className='block'> Shotokan-United Kenya"</span></h1>
                  </div>
                  <div className='space-y-4 text-lg'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Totam hic fugit cum, doloribus asperiores exercitationem a
                      error nulla delectus optio. Consectetur dolorem dolor saepe similique
                      impedit vitae architecto id vel repellat provident error, consequatur
                      tenetur cumque praesentium quia. Ab possimus, ut eligendi nostrum
                      accusamus esse mollitia unde dolor.</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Totam hic fugit cum, doloribus asperiores exercitationem a
                      error nulla delectus optio. Consectetur dolorem dolor saepe similique
                      impedit vitae architecto id vel repellat provident error, consequatur
                      tenetur cumque praesentium quia. Ab possimus, ut eligendi nostrum
                      accusamus esse mollitia unde dolor.</p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Totam hic fugit cum, doloribus asperiores exercitationem a
                      error nulla delectus optio. Consectetur dolorem dolor saepe similique
                      impedit vitae architecto id vel repellat provident error, consequatur
                      tenetur cumque praesentium quia. Ab possimus, ut eligendi nostrum
                      accusamus esse mollitia unde dolor.</p>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
        </section>
      
    </div>
  )
}

export default About
