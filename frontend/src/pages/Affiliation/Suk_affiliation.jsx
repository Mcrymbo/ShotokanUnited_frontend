import { vince_training, joshua_vince } from "../../assets"
import DefaultLayout from "../../layout/DefaultLayout"

const SukAffiliation = () => {
  return (
    <DefaultLayout className='container'>
        <div className='relative'>
            <img src={vince_training} alt="suk" width={100} height={100} className='w-full'/>
            <div className="bg-black opacity-20 absolute inset-0"></div>
            <h1 className='absolute bottom-0 left-0 text-white font-semibold p-6 md:text-4xl'>HDKI-Kenya</h1>
        </div>
        <div className='container flex flex-col md:flex-row justify-center gap-8 mt-8 lg:py-10 my-4 lg:px-20'>
            <div className='space-y-4'>
                <article className='text-lg font-medium text-black'>
                    We are previleged to be among the <spann className='text-red-500 hover:text-red-400 text-lg font-medium'><a href="https://hdki.org/">HDKI</a></spann> community and first representative in
                    Africa. A vibrant and fast growing Shotokan karate organisation in the world.
                </article>
                <p>Through this collaboration;</p>
                <ul className='space-y-3 list-disc ml-8'>
                    <li className='marker:text-red-500'>
                        <p>
                            Shotokan United Kenya proudly represents Honbu Dojo Karate International in the country, with the mission of expanding across Africa.
                        </p>
                    </li>
                    <li className='marker:text-red-500'>
                        <p>
                            We host kata and kumite courses nationwide, featuring instruction from <span className='font-bold'>Langley Sensei</span>. 
                        </p>
                    </li>
                    <li className='marker:text-red-500'>
                        <p>
                            HDKI-approved Dan gradings are held regularly, ensuring that karate practitioners in Kenya have access to internationally recognized certifications.  
                        </p>
                    </li>
                    <li className='marker:text-red-500'>
                        <p>
                            We get opportunities to represent HDKI-K at global events, including the HDKI and International Championships.
                        </p>
                    </li>
                    <li className='marker:text-red-500'>
                        <p>
                            Organized <span className='font-bold'>internships and workshops</span> at HDKI’s headquarters in Dublin provide invaluable training and development for karateka across the region.
                        </p>
                    </li>
                </ul>
                <article>
                    If you are interested to learn more about HDKI International affiliation, we’d recommend you visit there official website <a className='text-red-500 hover:text-red-400' href="https://hdki.org/hdkiinternational/">(https://hdki.org/hdkiinternational/)</a>
                </article>            

            </div>
            <img src={joshua_vince} alt="affiliation" width={20} height={30} className='w-full md:w-1/3 object-cover rounded-md'/>
        </div>
        
    </DefaultLayout>
  )
}

export default SukAffiliation