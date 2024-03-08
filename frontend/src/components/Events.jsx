import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import EventPage from './event/Event';

function Events() {
    const [events, setEvents] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch('https://shotokanunited-backend-4.onrender.com/api/events/')

            if (!response.ok){
                throw new Error('Invalid response')
            }
            const data = await response.json()
            setEvents(data)
            console.log(events)
        } catch (error) {
            console.error(`Error ${error} occured`)
        }
    }

    useEffect(() => {
        getData();

    }, [])
  return (
    <div className='bg-neutral-200 p-4 md:p-10'>
        <div className='p-10'>
              <h1 className='text-center py-6 text-4xl font-semibold border-b-2 border-neutral-300'>List of Events</h1>
        </div>
        <div className='mx-2 grid md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {events && events.map(event => (
                <div key={event.id} className='border-2 border-slate-800 p-8 transition-transform duration-500 hover:scale-x-105 hover:scale-y-105'>
                    <div >
                        <div>
                             <img src={event.poster_image} alt="image" className='object-contain mb-6' />
                        </div>
                        <div className='ml-2 text-red-500 text-2xl'>{event.name}</div>
                        <div className='ml-2'><span className='text-red-500 text-xl'>Date </span><span className='block'>{event.date}</span></div>
                        <div className='ml-2'> <span className='text-red-500 text-xl'>Venue</span><span className='block'>{event.venue}</span></div>
                        <div className='ml-2'><span className='text-red-500 text-xl'>Description</span> <span className='block'>{event.description}</span> </div>
                    </div>
                </div>
            ))}            
        </div>
        <Link to='/postEvent'><button className='bg-purple-400 hover:bg-purple-300 py-2 px-4'>Add Event</button></Link>
    </div>
  )
}

export default Events
