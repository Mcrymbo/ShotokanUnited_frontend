import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import DefaultLayout from '../../layout/DefaultLayout';
import { ChevronRight, Users, Star, Clock, Shield } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: "Kids Karate",
      path: "/programs/kids",
      description: "A structured program designed specifically for children aged 5-12, focusing on discipline, coordination, and confidence building through karate training.",
      image: "/assets/images/kids-karate.jpg", // Replace with actual image path
      features: [
        "Age-appropriate training methods",
        "Character development focus",
        "Fun and engaging activities",
        "Regular progress assessments"
      ],
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Adult Training",
      path: "/programs/adults",
      description: "Comprehensive karate training for adults of all skill levels, combining traditional techniques with practical applications and fitness development.",
      image: "/assets/images/adult-training.jpg", // Replace with actual image path
      features: [
        "Traditional kata training",
        "Self-defense applications",
        "Physical conditioning",
        "Tournament preparation"
      ],
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Women Only",
      path: "/programs/women",
      description: "Specialized karate classes designed for women, focusing on self-defense, fitness, and building confidence in a supportive environment.",
      image: "/assets/images/women-karate.jpg", // Replace with actual image path
      features: [
        "Women-specific self-defense",
        "Fitness and flexibility",
        "Confidence building",
        "Supportive community"
      ],
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const schedules = [
    {
      program: "Kids Karate",
      times: [
        { day: "Monday & Wednesday", time: "4:00 PM - 5:30 PM" },
        { day: "Saturday", time: "9:00 AM - 10:30 AM" }
      ]
    },
    {
      program: "Adult Training",
      times: [
        { day: "Monday to Friday", time: "6:00 PM - 7:30 PM" },
        { day: "Saturday", time: "11:00 AM - 1:00 PM" }
      ]
    },
    {
      program: "Women Only",
      times: [
        { day: "Tuesday & Thursday", time: "5:00 PM - 6:30 PM" },
        { day: "Saturday", time: "2:00 PM - 3:30 PM" }
      ]
    }
  ];

  return (
    <DefaultLayout>
      <Helmet>
        <title>Programs - Shotokan United Kenya</title>
        <meta 
          name="description" 
          content="Discover our comprehensive karate programs at Shotokan United Kenya. From kids to adults, beginners to advanced practitioners."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative py-24 bg-wine-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 pattern-shuriken pattern-white pattern-bg-transparent 
          pattern-size-4 pattern-opacity-10"></div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Programs
            </h1>
            <p className="text-xl text-white/90">
              Discover the path to mastery through our specialized karate programs
            </p>
          </motion.div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-wine-100 flex items-center justify-center text-wine-700">
                      {program.icon}
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">
                      {program.title}
                    </h3>
                  </div>

                  <p className="text-neutral-700 mb-6">
                    {program.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-neutral-900 mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-neutral-700">
                          <ChevronRight className="w-4 h-4 text-wine-700" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={program.path}
                    className="inline-flex items-center gap-2 text-wine-700 font-semibold hover:text-wine-800 transition-colors"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Schedule Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <span className="text-wine-700 font-bold tracking-wider uppercase">Training Times</span>
            <h2 className="text-3xl font-bold text-neutral-900 mt-4 mb-6">Class Schedule</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {schedules.map((schedule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Clock className="w-6 h-6 text-wine-700" />
                  <h3 className="text-xl font-bold text-neutral-900">
                    {schedule.program}
                  </h3>
                </div>

                <div className="space-y-4">
                  {schedule.times.map((time, idx) => (
                    <div key={idx} className="border-l-4 border-wine-700 pl-4">
                      <div className="font-semibold text-neutral-900">
                        {time.day}
                      </div>
                      <div className="text-neutral-700">
                        {time.time}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="max-w-3xl mx-auto bg-wine-50 rounded-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-neutral-700 mb-8">
              Join our karate family and start your path to physical and mental excellence.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-wine-700 text-white rounded-lg hover:bg-wine-800 transition-colors"
            >
              Get Started
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </DefaultLayout>
  );
};

export default Programs;