import {useState} from 'react'
import Hero from "./Hero";
import About from "./About";
import Commitee from "./Commitee";
import FooterComponent from "./Footer";
import Navbar from "../../components/Navbar";
import Feature from './Feature';
import News from './News';
import Event from './Events';
import { motion } from 'framer-motion';
import CallToAction from './CallToAction';

const LandingPage = () => {
    const [status, setStatus] = useState(false)
    return (
        <div className="relative min-h-screen bg-white overflow-hidden">
            <Navbar />

            {/* Hero Section with Enhanced Background */}
            <section className="relative">
                <div className="absolute inset-0 bg-gradient-to-tl from-purple-200/90 via-gray-300 to-green-100/95 opacity-90"></div>
                <div className="relative z-10">
                    <Hero />
                </div>
            </section>

            {/* About Section with Elegant Transition */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-white to-green-50/50"></div>
                <div className="relative z-10">
                    <About />
                </div>
                {/* Decorative Elements */}
                <div className="absolute left-0 top-1/2 w-24 h-24 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute right-0 top-1/4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
            </motion.section>

            {/* Feature Section with Modern Background */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative"
            >
                <div className="absolute inset-0 bg-gradient-to-tl from-green-50/90 via-white to-purple-50/90"></div>
                <div className="relative z-10">
                    <Feature />
                </div>
                {/* Decorative Patterns */}
                <div className="absolute inset-0 bg-primary/3 pattern-shuriken pattern-primary/5 
                    pattern-bg-white pattern-size-4 pattern-opacity-5"></div>
            </motion.section>

            {/* Events and News Section Container */}
            <div className="relative py-16 md:py-24 bg-secondary/40">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 bg-primary/3 pattern-shuriken pattern-primary/5 
                    pattern-bg-white pattern-size-4 pattern-opacity-5"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Events Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-24"
                    >
                        <div className="text-center mb-12">
                            <span className="text-secondary-700 font-bold tracking-wider uppercase">
                                Stay Connected
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4">
                                Upcoming Events
                            </h2>
                            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
                        </div>

                        {/* Events Component */}
                        <Event />
                    </motion.section>

                    {/* Subtle Divider */}
                    <div className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent mb-24"></div>

                    {/* News Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center mb-12">
                            <span className="text-secondary-700 font-bold tracking-wider uppercase">
                                Latest Updates
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4">
                                News & Articles
                            </h2>
                            <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
                        </div>

                        {/* News Component */}
                        <News />
                    </motion.section>
                </div>
            </div>

            {/* <Commitee /> */}
            <CallToAction />
            {/* Footer with Enhanced Background */}
            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/95"></div>
                <div className="relative z-10">
                    <FooterComponent />
                </div>
            </motion.footer>

            {/* Global Decorative Elements */}
            <div className="fixed inset-0 pointer-events-none">
                {/* Top Left Decoration */}
                <div className="absolute -left-24 -top-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                {/* Bottom Right Decoration */}
                <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            {/* Scroll Progress Indicator */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-secondary/30 origin-left z-50"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
            />

        </div>
    );
}

export default LandingPage;
