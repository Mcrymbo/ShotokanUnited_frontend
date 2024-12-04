import { styles } from "../../styles"
import { chris, medals, kids, flo } from '../../assets'

const Feature = () => {

    const data = [
        {
            href: kids,
            title: "Karate For Kids",
            description: "We believe that the best time to nurture talent is from an early age. Giving a good \
                foundation to a child helps in their development not just in competitive sports but Wholistically. "
        },
        {
            href: flo,
            title: "Women in Karate",
            description: "In our efforts to promote karate for all, we tailor make women only classes on request. We have \
                competent female instructors who run with this vision and we also invite international female instructors for \
                workshops to promote the same. "
        },
        {
            href: chris,
            title: "Adults Karate training",
            description: "Preferably for those above 15 years of age. In this class, the young get experience from the older \
                students while the old get inspired by the younger students to stay young at heart as they learn, grow and develop together."
        },
        {
            href: medals,
            title: "Karate for school",
            description: "Our coaches run vibrant karate clubs in various schools providing an alternative co curriculum activity for the learners"
        },
        
    ]
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 bg-gray-400 text-gray-700 overflow-hidden" >
        <h2 className="text-start text-lg font-medium mb-4">Our Programs</h2>
        <div className="carousel carousel-en rounded-md carousel-center">
            { data.map((item, index) => (
                <div key={index} className="carousel-item relative">
                    <img src={item.href} alt="image relative"
                        width={20}
                        height={30}
                        className='w-[300px] object-cover'
                        loading='lazy' />
                    <div className='absolute bg-black inset-0 opacity-50'></div>
                    <div className='flex flex-col items-center gap-8 absolute py-6 px-4'>
                        <div className='text-2xl font-bold text-white'>{item.title}</div>
                        <p className='text-lg text-semibold text-white'>{item.description}</p>
                    </div>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Feature
