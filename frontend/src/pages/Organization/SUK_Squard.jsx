import { kibe, medal_2, team_strath } from "../../assets"
import DefaultLayout from "../../layout/DefaultLayout"

const SukSquard = () => {

    const coaches = [
        // {
        //     position: 'Head Coach',
        //     photo: '',
        //     name: 'Joshua Oude',
        //     rank: '4th Dan HDKI',
        // },
        {
            position: 'Assistant Head Coach',
            name: 'Jason Kibe Sensei',
            photo: kibe,
            rank: '3rd Dan HDKI',
        },
    ]

    const date = new Date();
     const currentYear = date.getFullYear();

  return (
    <DefaultLayout>
        <div className='container relative'>
            <img src={team_strath} alt="img" width={100} height={100} className='w-full h-[200px] md:h-auto object-cover' />
            <div className='absolute inset-0 bg-black opacity-20'></div>
            <h2 className='absolute bottom-0 left-0 p-4 text-white text-4xl'>HDKI Kenya Squard</h2>
        </div>
        <div className='flex flex-col md:flex-row justify-center gap-8 mt-8 p-4 text-gray-800'>
            {/* LEFT */}
            <div className='md:w-[33%] flex flex-col gap-6 spacing-1.5'>
                <p>The Squad develops selected members of HDKI Kenya to represent HQ dojo in International competitions.
                    Training and competition continue throughout the year to ensure our members are ready to
                    compete at both local and International competitions.
                </p>
                <p>
                    Every squad member starts their journey at the HDKI Kenya Club level – training, grading,
                    competing. This focus on Club training continues throughout development. It is regular
                    practice that provides the strength, power and technical knowledge that squad members need
                    to be successful. Squad layers on additional intensive training sessions focused on competition
                    kata and kumite – refining and improving. Squad members compete in a wide variety of competitions within
                    Kenya to test out these skills. 
                </p>
                <p>
                    When squad members are ready to be selected for the FKF and WKF World
                    Championships they can test out their skills against the best in the country and the region. HDKI Kenya
                    seek to build a strong team that reaches the final rounds and on the medal podium at these competitions! 
                </p>
            </div>
            {/* CENTER */}
            <div className='md:w-[33%] flex flex-col gap-4'>
                <p>
                    If you are interested in finding out more about training with the squad, please contact the
                    Squad Manager. We are looking for Junior members (under 16) who are 3rd kyu and above and
                    Cadet/Senior members (16+) who are 1st Dan and above. While it is important to have a
                    strong basis in kihon, kata and kumite, it is more important to have spirit! Oss! 
                </p>
                <div className='flex justify-center'>
                    <img src={medal_2} alt="img" width={260} height={300} className='w-full md:w-[64%] object-cover bg-gray-200 flex justify-center rounded-sm'/>
                </div>
                
                <p className='text-start'>Contact: <span className='text-red-500 hover:underline cursor-pointer'>squard@hdki-kenya.org</span></p>
            </div>
            {/* RIGHT */}
            <div className='md:w-[33%]'>
                { coaches.map((item, index) => (
                    <div key={index} className='text-center'>
                        <img src={item.photo} alt="img" width={180} height={180} className='w-full rounded-md object-cover' />
                        <p className='text-xl font-bold'>{item.position}</p>
                        <p className='text-md'>{item.name}</p>
                        <p className='text-md'>{item.rank}</p>
                    </div>
                ))
                }
            </div>
        </div>
        <div>
            <h2 className='text-xl text-black font-bold py-8'>HDKI Kenya Squard <span >{currentYear}</span></h2>
        </div>
    </DefaultLayout>
  )
}

export default SukSquard