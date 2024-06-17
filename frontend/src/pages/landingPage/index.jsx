import Hero from "./Hero";
import About from "./About";
import Commitee from "./Commitee";
import FooterComponent from "./Footer";
import Navbar from "../../components/Navbar";

const LandingPage = () => {

    return (
        <>
            <div className="relative z-0">
                <div>
                    <Navbar />
                    <Hero />
                </div>
                <div>
                    <About />
                </div>
                <div>
                    <Commitee />
                </div>
                <div>
                    <FooterComponent />
                </div>
            </div>

        </>
    );

}

export default LandingPage;