import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center h-screen bg-white text-center text-lg '>
        <h1 className='text-4xl font-bold py-4'>404</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className='bg-orange-500 hover:bg-orange-400 w-[120px] mx-auto py-1 p-2 mt-2 text-white rounded-md'>Go to Home</Link>
    </div>
  )
}

export default NotFound