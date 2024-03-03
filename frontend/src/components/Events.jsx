import React, { useEffect, useState } from 'react'

function Events() {
    const [events, setEvents] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/events/')

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
    <div className='p-20 bg-neutral-200'>
        <h1 className='text-center mb-10 text-2xl'>List of all events</h1>
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-6'>
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
    </div>
  )
}

export default Events
