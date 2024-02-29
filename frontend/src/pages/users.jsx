import React, { useEffect, useState } from 'react'

function Users() {

    const [users, setUser] = useState()

    useEffect( () => {
        console.log(import.meta.env.VITE_API_URL)
         async function fetchData () {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/users')

                if (!response.ok) {
                    throw new Error('Response not okay')
                }
                const data = await response.json()
                setUser(data)
            } catch (error) {
                console.error('Error fetching data', error)
            }
        }
        fetchData();
    }, []);

    console.log(users)

  return (
    <div>
        <h1>List of users</h1>
        {users && users.map(user => (
            <div key={user.id}>
                {user.username}
            </div>
        ))}
      
    </div>
  )
}

export default Users