// import { dojo, mission } from "../../assets"
import { motion } from 'framer-motion';
import { styles } from "../../styles"
import {allTeam1, ladiesTeam1} from '../../assets';
import { Target, Users, Award, Brain, Star, Shield, Heart, Sword } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Traditional Excellence",
      description: "Learn authentic Shotokan techniques passed down through generations of masters",
      highlight: "50+ years of traditional karate heritage"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Inclusive Community",
      description: "Join practitioners of all ages and skill levels in a supportive training environment",
      highlight: "500+ active members nationwide"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Training",
      description: "Learn from internationally certified instructors with decades of experience",
      highlight: "HDKI certified instruction"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Mental Development",
      description: "Build focus, discipline, and unwavering determination through dedicated practice",
      highlight: "Holistic mind-body training"
    }
  ];

  const coreValues = [
    {
      icon: <Star className="w-5 h-5" />,
      value: "Excellence",
      description: "Striving for perfection in every technique"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      value: "Discipline",
      description: "Building character through consistent practice"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      value: "Respect",
      description: "Honoring traditions and fellow practitioners"
    },
    {
      icon: <Sword className="w-5 h-5" />,
      value: "Perseverance",
      description: "Never giving up on the path to mastery"
    }
  ];

  return (
    <div className="relative py-24 bg-base-100 overflow-hidden">
      {/* Background with lighter opacity for better text contrast */}
      <div className="absolute inset-0 bg-gray-200 pattern-shuriken pattern-primary/5 
        pattern-bg-white pattern-size-4 pattern-opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header - Improved text contrast */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-secondary font-semibold tracking-wider uppercase">Discover Our Legacy</span>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mt-4 mb-6">About Shotokan United</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-neutral-800 max-w-3xl mx-auto leading-relaxed font-medium">
            Embark on a transformative journey of martial arts excellence with Kenya's premier Shotokan karate organization.
          </p>
        </motion.div>

        {/* What We Do Section - Darker text colors */}
        <motion.section className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary-900 font-bold">Our Approach</span>
            </div>
            
            <h3 className="text-3xl font-bold text-neutral-900 leading-tight">
              Cultivating Excellence Through Traditional Karate Training
            </h3>
            
            <div className="space-y-4">
              <p className="text-neutral-800 leading-relaxed text-lg">
                At Shotokan United Kenya, we teach modern karate while preserving the principles of traditional Japanese karate. 
                Our comprehensive training system develops not just physical prowess, but also mental fortitude and 
                spiritual growth.
              </p>
              <p className="text-neutral-800 leading-relaxed text-lg">
                Through rigorous practice, expert guidance, and a supportive community, we help practitioners of all 
                levels master the fundamental techniques, kata, and kumite aspects of Shotokan karate. Our structured 
                curriculum ensures steady progress while maintaining the highest standards of traditional martial arts.
              </p>
            </div>

            {/* Core Values - Improved contrast */}
            <div className="grid grid-cols-2 gap-4">
              {coreValues.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary-900">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900">{item.value}</div>
                    <div className="text-sm text-neutral-700">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-xl overflow-hidden shadow-2xl"
            >
              <img 
                src={ladiesTeam1} 
                alt="Shotokan Training"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent"></div>
              
              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/90 to-transparent">
                <div className="text-base-100">
                  <h4 className="text-xl font-semibold mb-2">Excellence in Training</h4>
                  <p className="text-base-100/90">Dedicated practitioners honing their skills through rigorous practice</p>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute -right-4 -bottom-4 w-full h-full border-4 border-secondary/20 
              rounded-xl -z-10"></div>
          </div>
        </motion.section>

        {/* Features Grid - Improved text visibility */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -8 }}
              className="card bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="card-body">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary-900">
                  {feature.icon}
                </div>
                <h3 className="card-title text-neutral-900 font-bold">{feature.title}</h3>
                <p className="text-neutral-700 mb-4">{feature.description}</p>
                <div className="badge badge-secondary text-white">{feature.highlight}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision & Mission Section - Enhanced text contrast */}
        <motion.section className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-xl overflow-hidden shadow-2xl"
            >
              <img 
                src={allTeam1} 
                alt="Shotokan Team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent"></div>
              
              {/* Image Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/90 to-transparent">
                <div className="text-base-100">
                  <h4 className="text-xl font-semibold mb-2">United in Purpose</h4>
                  <p className="text-base-100/90">Building a community of dedicated martial artists</p>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute -left-4 -bottom-4 w-full h-full border-4 border-primary/20 
              rounded-xl -z-10"></div>
          </div>

          <div className="space-y-8 order-1 md:order-2">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary-900 font-bold">Our Purpose</span>
            </div>

            {/* Vision Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="card bg-white shadow-xl"
            >
              <div className="card-body">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Our Vision</h3>
                <p className="text-neutral-800 leading-relaxed text-lg font-medium">
                  To cultivate a legacy of martial arts excellence that shapes strong, disciplined, and confident 
                  individuals who inspire positive change in society through the principles of traditional karate.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="badge badge-secondary text-white">Character Building</span>
                  <span className="badge badge-secondary text-white">Leadership</span>
                  <span className="badge badge-secondary text-white">Community Impact</span>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="card bg-white shadow-xl"
            >
              <div className="card-body">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Our Mission</h3>
                <p className="text-neutral-800 leading-relaxed text-lg font-medium">
                  To empower individuals through the fusion of traditional Shotokan karate and modern training 
                  methodologies, fostering discipline, resilience, and lifelong excellence in a supportive and 
                  inclusive community environment.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="badge badge-secondary text-white">Technical Excellence</span>
                  <span className="badge badge-secondary text-white">Personal Growth</span>
                  <span className="badge badge-secondary text-white">Community Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Decorative Elements */}
        <div className="absolute -left-24 -bottom-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -right-24 -top-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}

export default About
