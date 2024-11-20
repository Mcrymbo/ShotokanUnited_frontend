import {useState} from 'react'
import Hero from "./Hero";
import About from "./About";
import Commitee from "./Commitee";
import FooterComponent from "./Footer";
import Navbar from "../../components/Navbar";
import Feature from './Feature';
import News from './News';
import Event from './Events';

const LandingPage = () => {
    const [status, setStatus] = useState(false)
    return (
        <div className=''>
            <Navbar />

            <Hero />
            <About />
            <Feature />
            <div className='bg-gray-300 py-4'>
                <div className='flex flex-col items-center'>
                    <h2 className='container text-center text-xl text-gray-600 mb-4 '>See what&apos;s happening at Shotokan United Kenya / HDKI-Kenya</h2>
                    <div>
                        <button onClick={() => setStatus(true)} className={`${status ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'} px-4 py-2 rounded-sm`}>Latest News</button>
                        <button onClick={() => setStatus(false)} className={`${!status ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800'} px-4 py-2 rounded-sm`}>Upcoming Events</button>
                    </div>
                </div>
                {status ? <News /> : <Event />}
            </div>        
            <Commitee />
            <FooterComponent />
        </div>
    );
}

export default LandingPage;
