import { styles } from "../../styles"

const Feature = () => {

    const data = [
        {
            href: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
            title: "Karate For Kids",
            description: "Join Karate for Kids program to kickstart your Karate Journey. \
            At Shotokan United, we believe that with correct foundation of learning we help foster in the \
            development of not only chmpions but responsible future members of the community."
        },
        {
            href: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
            title: "Women in Karate",
            description: "We have a program for women in Karate which focusses on best self defence practices \
            that appreciates their physics. We train on avoidance rather than confrontation"
        },
        {
            href: "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
            title: "Self defence",
            description: "This program focusses on advanced use of karate Kihon and form to immobilize an attacker \
            in situations of extreme danger."
        },
        {
            href: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
            title: "Adults Karate training",
            description: "This training program is suitable for all students above the age of 15 years. \
            The team learn together where the young gain from the experience of the old, and the old gain from the \
            agility and speed of the young"
        },
        {
            href: "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
            title: "Karate for school",
            description: "At shotokan United, we appreciate the importance of co-curriculum activities in schools \
            and we collaborate with schools to teach Karate to students. We have curriculum based approach that \
            incoporate the fixed schedules in school and ensures we meet the learning objectives."
        }
    ]
  return (
    <div className=''>
        <h1 className={`${styles.sectionHeadText} text-center py-16`}>Our Programs</h1>
        <div className="carousel carousel-en rounded-md">
            { data.map((item, index) => (
                <div key={index} className="carousel-item relative">
                    <img src={item.href} alt="image relative" />
                    <div className='flex flex-col items-center gap-8 absolute inset-0 bg-black opacity-60 py-6 px-4'>
                        <h1 className='text-2xl font-bold text-white'>{item.title}</h1>
                        <p className='text-lg text-semibold text-white'>{item.description}</p>
                    </div>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Feature