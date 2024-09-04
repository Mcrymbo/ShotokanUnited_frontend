import Hero from "./Hero";
import About from "./About";
import Commitee from "./Commitee";
import FooterComponent from "./Footer";
import Navbar from "../../components/Navbar";
import Feature from './Feature'
import News from './News'

const LandingPage = () => {

    return (
            <div className='overflow-x-hidden'>
                <div>
                    <Navbar />
                    <Hero />
                </div>
              
                <div>
                    <About />
                </div>
                
                <div>
                    <Feature />
                </div>
                <div>
                    <News/>
                </div>
                <div>
                    <Commitee />
                </div>
                <div>
                    <FooterComponent />
                </div>
            </div>
    );

}

export default LandingPage;