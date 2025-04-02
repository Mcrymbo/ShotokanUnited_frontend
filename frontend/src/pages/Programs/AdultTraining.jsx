import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import DefaultLayout from '../../layout/DefaultLayout';
import { Link } from 'react-router-dom';
import { teamSpirit1 } from '@/assets';
import { 
  Target, Shield, Sword, Dumbbell, 
  Brain, Heart, Clock, ChevronRight, 
  Award, Users 
} from 'lucide-react';

const AdultTraining = () => {
  const trainingAspects = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Traditional Karate",
      description: "Master authentic Shotokan techniques, kata, and principles passed down through generations."
    },
    {
      icon: <Sword className="w-6 h-6" />,
      title: "Self-Defense",
      description: "Develop practical self-defense skills applicable in real-world situations."
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Physical Fitness",
      description: "Enhance strength, flexibility, and cardiovascular endurance through dynamic training."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Mental Development",
      description: "Cultivate focus, discipline, and mental resilience through martial arts practice."
    }
  ];

  const trainingLevels = [
    {
      level: "Beginner Program",
      duration: "3-6 months",
      focus: [
        "Basic stances and movements",
        "Fundamental striking techniques",
        "Core kata: Heian Shodan",
        "Basic sparring concepts",
        "Physical conditioning"
      ]
    },
    {
      level: "Intermediate Program",
      duration: "6-18 months",
      focus: [
        "Advanced combinations",
        "Intermediate kata series",
        "Technical sparring",
        "Self-defense applications",
        "Competition preparation"
      ]
    },
    {
      level: "Advanced Program",
      duration: "18+ months",
      focus: [
        "Complex techniques",
        "Advanced kata and bunkai",
        "Free sparring",
        "Teaching methodology",
        "Tournament participation"
      ]
    }
  ];

  const schedule = [
    {
      type: "Regular Training",
      sessions: [
        { day: "Monday & Wednesday", time: "6:00 PM - 7:30 PM", level: "All Levels" },
        { day: "Tuesday & Thursday", time: "7:00 PM - 8:30 PM", level: "Advanced" },
        { day: "Saturday", time: "10:00 AM - 12:00 PM", level: "All Levels" }
      ]
    },
    {
      type: "Special Training",
      sessions: [
        { day: "Friday", time: "6:00 PM - 7:30 PM", level: "Competition Team" },
        { day: "Sunday", time: "8:00 AM - 10:00 AM", level: "Black Belt Class" }
      ]
    }
  ];

  return (
    <DefaultLayout>
      <Helmet>
        <title>Adult Training Program - Shotokan United Kenya</title>
        <meta 
          name="description" 
          content="Comprehensive adult karate training program at Shotokan United Kenya. Traditional techniques, self-defense, and physical fitness."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={teamSpirit1} // Replace with actual image
          alt="Adult Karate Training"
          className="w-full h-full object-cover object-[20%_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wine-900/90 via-wine-900/50 to-transparent"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-0 left-0 right-0 p-8 md:p-16"
        >
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Adult Training Program
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Master the art of Shotokan Karate through comprehensive training
            </p>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Overview Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-wine-700 font-bold tracking-wider uppercase">Program Overview</span>
          <h2 className="text-3xl font-bold text-neutral-900 mt-4 mb-6">
            Complete Martial Arts Development
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-neutral-700">
            Our Adult Training Program offers a comprehensive approach to karate training,
            combining traditional techniques with modern training methods. Whether your goal
            is self-defense, physical fitness, or competitive success, our structured
            curriculum provides the path to achieve your martial arts objectives.
          </p>
        </motion.div>

        {/* Training Aspects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {trainingAspects.map((aspect, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-wine-100 rounded-lg flex items-center justify-center text-wine-700 mb-4">
                {aspect.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {aspect.title}
              </h3>
              <p className="text-neutral-700">
                {aspect.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Training Levels Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <span className="text-wine-700 font-bold tracking-wider uppercase">Training Path</span>
            <h2 className="text-3xl font-bold text-neutral-900 mt-4 mb-6">Program Levels</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {level.level}
                </h3>
                <p className="text-wine-700 font-medium mb-4">
                  Duration: {level.duration}
                </p>
                <ul className="space-y-3">
                  {level.focus.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-neutral-700">
                      <ChevronRight className="w-4 h-4 text-wine-700 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Schedule Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-wine-50 rounded-xl p-8 md:p-12 mb-24"
        >
          <div className="text-center mb-12">
            <Clock className="w-12 h-12 text-wine-700 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Training Schedule</h2>
            <p className="text-neutral-700">
              Flexible training times to accommodate your busy schedule
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {schedule.map((type, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {type.type}
                </h3>
                <div className="space-y-4">
                  {type.sessions.map((session, idx) => (
                    <div key={idx} className="border-l-4 border-wine-700 pl-4">
                      <div className="font-semibold text-neutral-900">
                        {session.day}
                      </div>
                      <div className="text-neutral-700">
                        {session.time}
                      </div>
                      <div className="text-wine-700 text-sm">
                        {session.level}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={teamSpirit1} // Replace with actual image
                alt="Karate Training Benefits"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Training Benefits
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-wine-100 rounded-lg flex items-center justify-center text-wine-700 mt-1">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">
                      Physical Wellness
                    </h3>
                    <p className="text-neutral-700">
                      Improve cardiovascular health, strength, flexibility, and overall fitness
                      through dynamic training methods.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-wine-100 rounded-lg flex items-center justify-center text-wine-700 mt-1">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">
                      Mental Fortitude
                    </h3>
                    <p className="text-neutral-700">
                      Develop focus, discipline, and mental resilience through traditional
                      martial arts training.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-wine-100 rounded-lg flex items-center justify-center text-wine-700 mt-1">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">
                      Self-Defense Skills
                    </h3>
                    <p className="text-neutral-700">
                      Learn practical self-defense techniques and develop situational awareness
                      for real-world application.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Begin Your Karate Journey Today
            </h2>
            <p className="text-lg text-neutral-700 mb-8">
              Join our community of dedicated practitioners and start your path to mastery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-wine-700 text-white rounded-lg hover:bg-wine-800 transition-colors"
              >
                Start Training
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-wine-700 text-wine-700 rounded-lg hover:bg-wine-50 transition-colors"
              >
                View All Programs
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </DefaultLayout>
  );
};

export default AdultTraining;