import {useState, useEffect} from 'react'
import { auth } from '../../hooks/useFetchQuery'
import { styles } from "../../styles";
import { hdki_cover } from '../../assets';

const ListEvents = () => {
    const [events, setEvents] = useState([])

    const ListEvents = async () => {
        try {
            const response = await auth.get('/api/events')
            setEvents(response.data.results)
        } catch (e) {
            console.error(e.message)
        }
    }

    useEffect(() => {
        ListEvents()
    }, [])
  return (
    <div className='container min-h-screen mx-auto py-10 px-4 sm:px-6 lg:px-8'>
        <h2 className={`${styles.sectionHeadText} text-center`}>Upcoming Events</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events && events.map((event) => (
                <div key={event.id} className="bg-white shadow-md rounded-lg p-4">
                    <img
                        src={event.cover_image_url || hdki_cover}
                        alt='img'
                        className="w-full h-52 object-cover rounded-t-lg"
                    />
                    <h3 className="mt-4 text-xl font-semibold text-eerieBlack">{event.name}</h3>
                    <p className="mt-2 text-gray-600">{event.venue}</p>
                    <p className="mt-2 text-gray-600">{event.description}</p>
                    <p className="mt-2 text-gray-400 text-sm">{event.date}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ListEvents