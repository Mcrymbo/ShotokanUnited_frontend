import { motion } from 'framer-motion';
import { 
  Target, Compass, Heart, Users, 
  Award, Globe, Shield, BookOpen 
} from 'lucide-react';
import DefaultLayout from '../../layout/DefaultLayout';
import { mission_image, vision_image, values_image } from '../../assets';

const MissionVision = () => {
  const values = [
    {
      icon: Heart,
      title: 'Respect',
      description: 'Fostering mutual respect among practitioners and honoring the traditions of Shotokan Karate.'
    },
    {
      icon: Shield,
      title: 'Discipline',
      description: 'Promoting self-discipline and dedication in training, both physically and mentally.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive global community united by the practice of traditional karate.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for technical excellence and continuous improvement in all aspects of karate.'
    }
  ];

  const objectives = [
    {
      title: 'Technical Development',
      description: 'Maintain and advance the highest standards of Shotokan Karate technique and instruction.',
      points: [
        'Regular technical seminars and workshops',
        'Standardized grading systems',
        'Instructor development programs'
      ]
    },
    {
      title: 'Global Outreach',
      description: 'Expand our reach to make traditional karate accessible to practitioners worldwide.',
      points: [
        'International training camps',
        'Cross-cultural exchange programs',
        'Online learning resources'
      ]
    },
    {
      title: 'Youth Development',
      description: 'Nurture the next generation of karate practitioners through dedicated youth programs.',
      points: [
        'Youth-specific training methods',
        'Character development initiatives',
        'School outreach programs'
      ]
    }
  ];

  return (
    <DefaultLayout>
      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-wine-100 text-wine-800 rounded-full text-sm font-medium mb-6">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Preserving and Promoting Excellence in Shotokan Karate
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to preserve and promote the authentic principles and techniques of Shotokan Karate while fostering a global community of practitioners dedicated to personal growth and technical excellence.
              </p>
              <div className="space-y-4">
                {['Technical excellence', 'Character development', 'Global community', 'Traditional values'].map((point, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-2 w-2 bg-wine-600 rounded-full mr-3" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={mission_image}
                alt="Karate Training"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <Target className="h-12 w-12 text-wine-600" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <img
                src={vision_image}
                alt="Karate Vision"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <Compass className="h-12 w-12 text-wine-600" />
              </div>
            </motion.div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-wine-100 text-wine-800 rounded-full text-sm font-medium mb-6">
                Our Vision
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Shaping the Future of Traditional Karate
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We envision a world where Shotokan Karate continues to thrive as a respected martial art, enriching lives through its principles of discipline, respect, and continuous improvement.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: Globe, text: 'Global Recognition' },
                  { icon: Shield, text: 'Technical Standards' },
                  { icon: Users, text: 'Inclusive Community' },
                  { icon: BookOpen, text: 'Knowledge Preservation' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                  >
                    <item.icon className="h-6 w-6 text-wine-600" />
                    <span className="font-medium text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              These fundamental principles guide our organization and shape the development of our practitioners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-wine-600 mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Objectives Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Strategic Objectives
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our roadmap for achieving excellence and growth in traditional karate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {objective.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {objective.description}
                </p>
                <ul className="space-y-3">
                  {objective.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center text-gray-700">
                      <div className="h-2 w-2 bg-wine-600 rounded-full mr-3" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default MissionVision;