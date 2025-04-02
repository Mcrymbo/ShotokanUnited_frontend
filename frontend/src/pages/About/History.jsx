import { motion } from 'framer-motion';
import DefaultLayout from '../../layout/DefaultLayout';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Calendar, Award, Medal } from 'lucide-react';

const History = () => {
  const timeline = [
    {
      year: "2008",
      title: "Foundation",
      description: "Establishment of JKA Kenya with the first dojo in Nairobi.",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      year: "2010",
      title: "JKA Affiliation",
      description: "Official Affiliation with JKA with the first dojo in Nairobi.",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      year: "2015",
      title: "Foundation",
      description: "Establishment of Shotokan United Kenya with the first dojo in Nairobi.",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      year: "2020",
      title: "HDKI Affiliation",
      description: "Official affiliation with Hombu Dojo Karate International (HDKI) Ireland.",
      icon: <Award className="w-5 h-5" />
    },
    {
      year: "2021",
      title: "Regional Expansion",
      description: "Expansion to major cities including Mombasa, Eldoret, and Kisumu.",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      year: "2022",
      title: "Digital Transformation",
      description: "Introduction of virtual training programs and online community engagement.",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      year: "2025",
      title: "Championship Success",
      description: "First international championship medals and recognition.",
      icon: <Medal className="w-5 h-5" />
    }
  ];

  return (
    <DefaultLayout>
      <Helmet>
        <title>Our History - Shotokan United Kenya</title>
        <meta 
          name="description" 
          content="Discover the journey of Shotokan United Kenya from its foundation to becoming a leading karate organization."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative py-20 bg-wine-700">
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
              Our History
            </h1>
            <p className="text-xl text-white/90">
              A journey of dedication, growth, and excellence in Shotokan Karate
            </p>
          </motion.div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {timeline.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-wine-200"></div>
              
              {/* Timeline Dot */}
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-wine-700 border-4 border-white"></div>

              {/* Content */}
              <div className="bg-white rounded-xl shadow-lg p-6 ml-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-block px-3 py-1 bg-wine-100 text-wine-700 rounded-full font-bold">
                    {event.year}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-wine-100 flex items-center justify-center text-wine-700">
                    {event.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-neutral-700">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Legacy Section */}
      <div className="bg-neutral-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-wine-700 font-bold tracking-wider uppercase">Our Legacy</span>
            <h2 className="text-3xl font-bold text-neutral-900 mt-4 mb-6">
              Building a Lasting Impact
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-neutral-700 mb-12">
              From our humble beginnings to our current position as a leading karate organization in Kenya,
              our journey has been marked by dedication, perseverance, and a commitment to excellence.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "20+", label: "Active Dojos" },
                { number: "1000+", label: "Students Trained" },
                { number: "50+", label: "Certified Instructors" },
                { number: "100+", label: "Tournament Medals" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-wine-700 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-neutral-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default History;