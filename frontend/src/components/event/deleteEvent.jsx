import React from 'react'

export default function DeleteEvent({id, onDelete}) {
    
    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/events/${id}/`, {
                method: 'DELETE',
            });

            if (response.status === 204) {
                console.log('Deleted successfully')
                onDelete(id)
            } else {
                console.error('Failed to delete event')
            }
        }  catch (error) {
            console.error(error.message);
        }
    }
  return (
    <div>
        <button className='bg-red-500 p-4 hover:bg-red-600 rounded-lg m-2 cursor-pointer duration-300 hover:text-black' onClick={handleDelete}>DELETE</button>      
    </div>
  )
}