import Hero from "./Hero";
import About from "./About";
import Commitee from "./Commitee";
import FooterComponent from "./Footer";
import Navbar from "../../components/Navbar";
import Feature from './Feature';
import News from './News';

const LandingPage = () => {
    return (
        <div className=''>
            <Navbar />

            <Hero />
            <About />
            <Feature />
            <News />
            <Commitee />
            <FooterComponent />
        </div>
    );
}

export default LandingPage;
