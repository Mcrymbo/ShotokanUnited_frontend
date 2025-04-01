import { motion } from 'framer-motion';
import { jka_rwanda, suk_team } from '../../assets';
import DefaultLayout from '../../layout/DefaultLayout';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Award, Shield, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

function About() {
  const coreValues = [
    {
      title: "Tradition",
      description: "We strive to preserve elements of traditional karate that enrich our practice and deepen our connection to its historical roots.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Transformation",
      description: "We aim to explore and examine karate principles, incorporating modern ideas to improve every aspect of our art and community.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Respect",
      description: "We build a group where meritocracy drives structural power, respect is earned and freely given, enabling individuals to realize their full potential.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Cooperation",
      description: "We build a community of like-minded karate-ka who support each other, collaborate on common goals, and participate in consensus-based decision-making.",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <DefaultLayout>
      <Helmet>
        <title>About - Shotokan United Kenya</title>
        <meta 
          name='description'
          content="Shotokan United Kenya - Join us and become part of a legacy of strength, discipline, and community."
        />
        <meta name="keywords" content="shotokan united kenya, karate kenya, Kenya karate" />
        <link rel="canonical" href="/about" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={suk_team}
          alt="Shotokan United Kenya Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wine-900/90 via-wine-900/50 to-transparent"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-0 left-0 right-0 p-8 md:p-16"
        >
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About Us</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Discover the spirit of Shotokan Karate in Kenya
            </p>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* About Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
        >
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-wine-100 rounded-full">
              <span className="text-wine-700 font-bold">Our Story</span>
            </div>
            <h2 className="text-3xl font-bold text-neutral-900">
              A Legacy of Excellence in Shotokan Karate
            </h2>
            <div className="space-y-4 text-neutral-700">
              <p>
                Shotokan United Kenya is a non-profit organization associated with Hombu Dojo Karate International (HDKI) in Ireland, one of the world's most prestigious and fast-growing Shotokan Karate organisations.
              </p>
              <p>
                Under the leadership of Sensei Joshua Oude (4th Dan) as Chief Instructor, supported by our Executive and Technical Committees, we provide comprehensive guidance and training in authentic Shotokan Karate.
              </p>
              <p>
                With over 20 dojos across Kenya, including presence in Nairobi, Mombasa, Eldoret, Kisumu, and Migori, we're committed to spreading the art of karate and positively impacting lives throughout the country.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src={jka_rwanda} 
              alt="Karate Training"
              className="rounded-lg shadow-xl w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 border-2 border-gold rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
          </div>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <span className="text-wine-700 font-bold tracking-wider uppercase">Our Principles</span>
            <h2 className="text-3xl font-bold text-neutral-900 mt-4 mb-6">Core Values</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-wine-100 rounded-lg flex items-center justify-center text-wine-700 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-neutral-700">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="bg-wine-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Karate Empowering Communities through Holistic Living
            </h2>
            <div className="space-y-4 text-neutral-700">
              <p>
                Karate serves as a catalyst for holistic community development, establishing accessible training centers that transcend mere martial arts instruction. These centers become more than spaces for physical empowerment, offering mental discipline and self-defense skills.
              </p>
              <p>
                As individuals progress in their karate journey, they assume leadership roles within the community, extending the principles of respect and continual self-improvement beyond the dojo.
              </p>
              <p>
                This holistic living philosophy permeates daily life, influencing familial, professional, and social relationships. The dojo becomes a hub for positive change, radiating empowerment throughout the community.
              </p>
            </div>
          </div>

          <div className="space-y-8 text-center">
            <h3 className="text-2xl font-bold text-wine-700">SHU-HA-RI</h3>
            <blockquote className="text-xl italic text-neutral-700">
              <p>"Teach good karate and be kind to people</p>
              <p>Have Karate Adventures</p>
              <p>Provide Opportunities"</p>
            </blockquote>
            <p className="text-right italic font-bold text-neutral-900">
              - Scott Langley Sensei
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <Link 
            to="/about/history" 
            className="inline-flex items-center gap-2 text-wine-700 font-semibold hover:text-wine-800 transition-colors"
          >
            Discover Our History
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </DefaultLayout>
  );
}

export default About;