import { chris } from "../../assets";
import DefaultLayout from "../../layout/DefaultLayout";

const BlogPage = () => {

    const blogs = [
        {
            title: 'The fist blog',
            photo: chris,
            date: '5/4/2024',
            views: 1500,
            likes: 234,
        },
        {
            title: 'The fist blog',
            photo: chris,
            date: '5/4/2024',
            views: 1500,
            likes: 234,
        },
        {
            title: 'The fist blog',
            photo: chris,
            date: '5/4/2024',
            views: 1500,
            likes: 234,
        },
        {
            title: 'The fist blog',
            photo: chris,
            date: '5/4/2024',
            views: 1500,
            likes: 234,
        }
    ]

  return (
    <DefaultLayout className='container'>
        <div>
            <h2>Karate Tales from Enthusiastic Karatekas</h2>
        </div>
        <div className='flex flex-col md:flex-row gap-6'>
            {
                blogs.map((item, index) => (
                    <div key={index}>
                        <img src={item.photo} alt='image' width={360} height={400} className='rounded-md'/>
                        <h2 className='text-gray-800 text-xl font-semibold'>{item.title}</h2>
                        <div className='flex gap-6'>
                            <p>{item.date}</p>
                            <p> - {item.likes} likes</p>
                        </div>
                    </div>
                ))}
        </div>
    </DefaultLayout>
  )
}

export default BlogPage;