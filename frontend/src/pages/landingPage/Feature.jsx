import { motion } from 'framer-motion';
import { chris, medals, kids, flo } from '../../assets';
import { ArrowRight, Award, Users, Target, Shield } from 'lucide-react';

const Feature = () => {
    const programs = [
        {
            image: kids,
            title: "Karate For Kids",
            description: "We believe that the best time to nurture talent is from an early age. Giving a good foundation to a child helps in their development not just in competitive sports but holistically.",
            icon: <Users className="w-5 h-5" />,
            benefits: ["Character Building", "Physical Development", "Mental Focus"]
        },
        {
            image: flo,
            title: "Women in Karate",
            description: "We tailor-make women-only classes on request, with competent female instructors who run with this vision. We also invite international female instructors for workshops to promote inclusive training.",
            icon: <Shield className="w-5 h-5" />,
            benefits: ["Self-Defense", "Confidence", "Empowerment"]
        },
        {
            image: chris,
            title: "Adults Karate Training",
            description: "For those above 15 years of age, where young students gain experience from seniors while older students stay young at heart as they learn, grow and develop together.",
            icon: <Target className="w-5 h-5" />,
            benefits: ["Fitness", "Discipline", "Community"]
        },
        {
            image: medals,
            title: "Karate for Schools",
            description: "Our coaches run vibrant karate clubs in various schools, providing an alternative co-curricular activity for learners to develop discipline and physical fitness.",
            icon: <Award className="w-5 h-5" />,
            benefits: ["Structure", "Team Spirit", "Achievement"]
        },
    ];

    return (
        <div className="relative py-24 bg-white overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 bg-primary/3 pattern-shuriken pattern-primary/5 
                pattern-bg-white pattern-size-4 pattern-opacity-5"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section Header with Darker Text */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-secondary-700 font-bold tracking-wider uppercase">Excellence in Training</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mt-4 mb-6">Our Programs</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
                    <p className="text-lg md:text-xl text-neutral-800 max-w-3xl mx-auto leading-relaxed font-medium">
                        Discover our comprehensive karate training programs designed to nurture excellence at every level
                    </p>
                </motion.div>

                {/* Improved Programs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group"
                        >
                            <div className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                                {/* Improved Image Container */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img 
                                        src={program.image} 
                                        alt={program.title}
                                        className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent"></div>
                                    {/* Program Icon */}
                                    <div className="absolute bottom-4 left-4">
                                        <div className="p-2.5 rounded-full bg-secondary/90 text-white backdrop-blur-sm">
                                            {program.icon}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Card Content with Better Contrast */}
                                <div className="card-body p-6 bg-white">
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3 leading-tight">
                                        {program.title}
                                    </h3>
                                    <p className="text-neutral-700 font-medium mb-4 line-clamp-3 leading-relaxed">
                                        {program.description}
                                    </p>
                                    
                                    {/* Benefits Tags with Better Visibility */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {program.benefits.map((benefit, idx) => (
                                            <span 
                                                key={idx} 
                                                className="badge badge-secondary text-white font-medium text-xs px-3 py-1"
                                            >
                                                {benefit}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Enhanced Button */}
                                    <div className="card-actions justify-end mt-auto pt-2">
                                        <button className="btn btn-primary btn-sm gap-2 group-hover:gap-3 transition-all text-white font-semibold">
                                            Learn More 
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Enhanced Call to Action with Better Contrast */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-neutral-900/5 backdrop-blur-sm border border-neutral-200">
                        <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                            Ready to Begin Your Journey?
                        </h3>
                        <p className="text-neutral-800 font-medium mb-6">
                            Join our community and start your path to mastery today
                        </p>
                        <button className="btn btn-secondary btn-lg gap-2 hover:gap-3 transition-all text-white font-semibold">
                            Join a Program
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>

                {/* Subtle Decorative Elements */}
                <div className="absolute -left-24 -bottom-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -right-24 -top-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
};

export default Feature;
