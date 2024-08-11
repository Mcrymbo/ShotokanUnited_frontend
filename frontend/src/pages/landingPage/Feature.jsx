import { styles } from "../../styles"

const Feature = () => {

    const data = [
        {
            href: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
            title: "Karate For Kids",
            description: "We believe that the best time to nurture talent is from an early age. Giving a good \
                foundation to a child helps in their development not just in competitive sports but Wholistically. "
        },
        {
            href: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
            title: "Women in Karate",
            description: "In our efforts to promote karate for all, we tailor make women only classes on request. We have \
                competent female instructors who run with this vision and we also invite international female instructors for \
                workshops to promote the same. "
        },
        {
            href: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
            title: "Adults Karate training",
            description: "Preferably for those above 15 years of age. In this class, the young get experience from the older \
                students while the old get inspired by the younger students to stay young at heart as they learn, grow and develop together."
        },
        {
            href: "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
            title: "Karate for school",
            description: "Our coaches run vibrant karate clubs in various schools providing an alternative co curriculum activity for the learners"
        }
    ]
  return (
    <div className='mx-auto max-w-screen-lg'>
        <h2 className={`${styles.sectionHeadText} text-center py-16`}>Our Programs</h2>
        <div className="carousel carousel-en rounded-md">
            { data.map((item, index) => (
                <div key={index} className="carousel-item relative">
                    <img src={item.href} alt="image relative"
                        width={240}
                        height={192}
                        loading='eager' />
                    <div className='flex flex-col items-center gap-8 absolute inset-0 bg-black opacity-60 py-6 px-4'>
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