import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

const LandingPage = () => {

    return (
        <>
            <div className="relative z-0">
                <div>
                    <Hero />
                </div>
                <div>
                    <About />
                </div>
                <div>
                    <Contact />
                </div>
                <div>
                    <Footer />
                </div>
            </div>

        </>
    );

}

export default LandingPage;