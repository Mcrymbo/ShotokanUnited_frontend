import React, { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function Users() {

    const [users, setUser] = useState()
    // const { login } = useAuth()
    // const navigate = useNavigate()

    useEffect( () => {
        async function fetchData () {
            const authToken = localStorage.getItem('authTokens');
            const token = JSON.parse(authToken).token
            console.log(token)
            try {
                const response = await fetch('http://127.0.0.1:8000/api/users', {
                    headers : {
                        "Authorization": `Token ${token}`,
                    }
                })

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

  return (
    <div className="flex flex-col min-h-screen">
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