import { jos_mus_jka, k_flag } from "../../assets"
import DefaultLayout from "../../layout/DefaultLayout"

const ClubAffiliation = () => {
  return (
    <DefaultLayout className='container'>
        <div className='relative'>
            <img src={k_flag} alt="suk" width={100} height={100} className='w-full h-[200px] md:h-auto object-cover'/>
            <div className="bg-black opacity-20 absolute inset-0"></div>
            <h1 className='absolute bottom-0 left-0 text-white font-semibold p-4 md:p-8 text-4xl'>Affiliate your club</h1>
        </div>
        <div className='container flex flex-col md:flex-row justify-center gap-8 mt-8 lg:py-10 my-4 lg:px-20'>
            <div className='space-y-4'>
                <article className='text-lg font-medium text-black'>
                    We are proud to be the representative the <spann className='text-red-500 hover:text-red-400 text-lg font-medium'><a href="https://hdki.org/">HDKI</a></spann> in Kenya.
                    A vibrant and fast growing Shotokan karate organisation in the world.
                </article>
                <p>By Affiliating, you enjoy the following;</p>
                <ul className='space-y-3 list-disc ml-8'>
                    <li className='marker:text-red-500'>
                        <p>
                            Complete membership packages that include insurance, coaching licence, first aid and child safeguarding certification.
                        </p>
                    </li>
                    <li className='marker:text-red-500'>
                        <p>
                            We host kata and kumite courses nationwide, featuring instruction from <span className='font-bold'>SUK/HDKI-K</span> instructors.
                        </p>
                    </li>
                    <li className='marker:text-red-500'>
                        <p>
                            HDKI-approved Kyu/Dan gradings are held regularly, ensuring that karate practitioners in Kenya have access to internationally recognized certifications.  
                        </p>
                    </li>
                    <li className='marker:text-red-500'>
                        <p>
                            Opportunities to particilate in local and International Championships.
                        </p>
                    </li>
                    <li className='marker:text-red-500'>
                        <p>
                            Opportuinity to participate in HDKI events including, <span className='font-bold'>internships and workshops</span>, at HDKI’s headquarters in Dublin provide invaluable training and development for karatekas.
                        </p>
                    </li>
                    <li className='marker:text-red-500'>
                        <p>
                            A Technical Committee dedicated to upholding the highest standards of the Budo karate.
                        </p>
                    </li>
                    <li className='marker:text-red-500'>
                        <p>
                            An Executive Committee that ensures that the Association is run for the benefit of the members. 
                        </p>
                    </li>
                </ul>
                <article>
                    If you are interested to learn more about joining or returning to HDKI Kenya, we’d love to hear from you! Please email,
                    <span className='text-bold'>Goodric Musoga, Technical Director</span> of Association at <span className='text-bold text-red-500 italic hover:underline cursor-pointer'>gmusoga@gmail.com</span>
                </article>

            </div>
            <img src={jos_mus_jka} alt="affiliation" width={20} height={30} className='w-full md:w-1/3 object-cover rounded-md'/>
        </div>
        
    </DefaultLayout>
  )
}

export default ClubAffiliation