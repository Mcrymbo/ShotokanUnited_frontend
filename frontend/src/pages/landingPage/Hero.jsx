import { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { homePic, teamSpirit2, allTeam1, ladiesTeam1 } from '../../assets';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const sliderImages = [
    {
        src: teamSpirit2,
        title: "Team Spirit",
        description: "Building strength through unity"
    },
    {
        src: allTeam1,
        title: "All Team",
        description: "Excellence in martial arts"
    },
    {
        src: ladiesTeam1,
        title: "Ladies Team",
        description: "Empowering through karate"
    },
    {
        src: teamSpirit2,
        title: "Training Sessions",
        description: "Dedicated practice and growth"
    },
    {
        src: allTeam1,
        title: "Competition Team",
        description: "Striving for excellence"
    },
    {
        src: ladiesTeam1,
        title: "Youth Program",
        description: "Nurturing future champions"
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const timer = setInterval(() => {
            setCurrentSlide((prev) => {
                const nextSlide = prev + 3;
                return nextSlide >= sliderImages.length ? 0 : nextSlide;
            });
        }, 5000);

        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    return (
        <>
            {/* Main Hero Section */}
            <div className="relative min-h-[80vh] flex items-center w-full">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={homePic}
                        alt="Shotokan Karate"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl text-left space-y-8"
                    >
                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                            <span className="block text-base-100 mb-2">Unleash Your</span>
                            <span className="block text-secondary">Inner Warrior</span>
                        </h1>

                        <p className="text-xl text-base-100/90 leading-relaxed">
                            Experience the transformative power of traditional Shotokan Karate
                            in a modern, supportive environment. Join our community of dedicated
                            practitioners and begin your journey to mastery.
                        </p>

                        <div className="flex flex-wrap gap-6 pt-4">
                            <Link to="/auth/register">
                                <button className="btn btn-lg bg-wine-700 hover:bg-wine-800 text-base-100 border-none
                                    shadow-lg hover:shadow-xl transition-all duration-300 group">
                                    Start Your Journey
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <Link to="/about">
                                <button className="btn btn-lg btn-outline text-base-100 hover:bg-base-100 
                                    hover:text-primary border-2 transition-all duration-300">
                                    Learn More
                                </button>
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-secondary">15+</div>
                                <div className="text-base-100/80 text-sm mt-1">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-secondary">500+</div>
                                <div className="text-base-100/80 text-sm mt-1">Students Trained</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-secondary">20+</div>
                                <div className="text-base-100/80 text-sm mt-1">Expert Instructors</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ 
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                    >
                        <ChevronDown className="w-6 h-6 text-base-100" />
                    </motion.div>
                </motion.div>
            </div>

            {/* Updated Multi-Item Image Slider Section */}
            <div className="relative bg-base-100 py-16 overflow-hidden">
                <div className="w-full max-w-[95vw] mx-auto">
                    <div className="relative px-4">
                        {/* Slider Container */}
                        <div className="overflow-hidden">
                            <motion.div
                                className="flex gap-4 md:gap-6"
                                animate={{ x: `${-currentSlide * 100/3}%` }}
                                transition={{ 
                                    duration: 0.7, 
                                    ease: "easeInOut",
                                    type: "tween"
                                }}
                            >
                                {sliderImages.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3] group">
                                            <img
                                                src={image.src}
                                                alt={image.title}
                                                className="w-full h-full object-cover transition-transform duration-500 
                                                    group-hover:scale-110"
                                            />
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 
                                                to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute bottom-6 left-6 text-base-100 transform translate-y-4 
                                                    opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                                                    <p className="text-base-100/80">{image.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Navigation Buttons - Updated positioning and responsiveness */}
                        <div className="absolute top-1/2 -translate-y-1/2 w-full left-0 flex justify-between pointer-events-none">
                            <button
                                onClick={() => {
                                    setIsAutoPlaying(false);
                                    setCurrentSlide(prev => prev === 0 ? Math.max(sliderImages.length - 3, 0) : prev - 3);
                                }}
                                className={`btn btn-circle btn-primary shadow-lg transform -translate-x-1/2 pointer-events-auto
                                    opacity-70 hover:opacity-100 transition-opacity ${currentSlide === 0 ? 'invisible' : ''}`}
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={() => {
                                    setIsAutoPlaying(false);
                                    setCurrentSlide(prev => prev + 3 >= sliderImages.length ? 0 : prev + 3);
                                }}
                                className={`btn btn-circle btn-primary shadow-lg transform translate-x-1/2 pointer-events-auto
                                    opacity-70 hover:opacity-100 transition-opacity 
                                    ${currentSlide + 3 >= sliderImages.length ? 'invisible' : ''}`}
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Progress Indicators - Updated styling */}
                        <div className="flex justify-center mt-8 gap-3">
                            {Array.from({ length: Math.ceil(sliderImages.length / 3) }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setIsAutoPlaying(false);
                                        setCurrentSlide(index * 3);
                                    }}
                                    className="group relative"
                                >
                                    <div className={`h-2 rounded-full transition-all duration-300 ${
                                        Math.floor(currentSlide / 3) === index 
                                            ? 'w-8 bg-primary' 
                                            : 'w-2 bg-primary/30 group-hover:bg-primary/50'
                                    }`} />
                                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        <div className="bg-primary text-base-100 text-xs px-2 py-1 rounded">
                                            {index + 1}/{Math.ceil(sliderImages.length / 3)}
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Auto-play Control */}
                        <button
                            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                            className="absolute bottom-0 right-4 btn btn-ghost btn-sm text-primary hover:bg-primary 
                                hover:text-base-100 transition-colors"
                        >
                            {isAutoPlaying ? 'Pause' : 'Play'} Slideshow
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(Hero);