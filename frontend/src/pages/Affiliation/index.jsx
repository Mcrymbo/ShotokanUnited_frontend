import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import DefaultLayout from '../../layout/DefaultLayout';
import { Shield, Users, Award, Globe, ChevronRight } from 'lucide-react';

const Affiliation = () => {
  const affiliationTypes = [
    {
      title: "Club Affiliation",
      path: "/affiliation/club",
      icon: <Shield className="w-6 h-6" />,
      description: "Join our network of affiliated dojos and become part of the HDKI Kenya family.",
      benefits: [
        "International recognition",
        "Technical support",
        "Access to events",
        "Grading opportunities"
      ]
    },
    {
      title: "Individual Membership",
      path: "/affiliation/individual",
      icon: <Users className="w-6 h-6" />,
      description: "Register as an individual practitioner and access our comprehensive training programs.",
      benefits: [
        "Personal development",
        "Competition eligibility",
        "Training resources",
        "Insurance coverage"
      ]
    }
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "International Recognition",
      description: "Official HDKI certification and recognition worldwide."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Network",
      description: "Connect with karate practitioners and dojos worldwide."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Technical Support",
      description: "Access to expert instruction and technical guidance."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Join a supportive community of dedicated practitioners."
    }
  ];

  return (
    <DefaultLayout>
      <Helmet>
        <title>Affiliation - Shotokan United Kenya</title>
        <meta 
          name="description" 
          content="Join Shotokan United Kenya and become part of the HDKI family. Club and individual affiliation options available."
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
              Join Our Community
            </h1>
            <p className="text-xl text-white/90">
              Become part of Kenya's premier Shotokan Karate organization
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Affiliation Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {affiliationTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-wine-100 rounded-lg flex items-center justify-center text-wine-700 mb-6">
                  {type.icon}
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {type.title}
                </h2>
                <p className="text-neutral-700 mb-6">
                  {type.description}
                </p>
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-neutral-900 mb-3">
                    Key Benefits
                  </h3>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-neutral-700">
                        <ChevronRight className="w-4 h-4 text-wine-700" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to={type.path}
                  className="inline-flex items-center gap-2 text-wine-700 font-semibold hover:text-wine-800 transition-colors"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <span className="text-wine-700 font-bold tracking-wider uppercase">Why Join Us</span>
            <h2 className="text-3xl font-bold text-neutral-900 mt-4 mb-6">
              Membership Benefits
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-wine-100 rounded-full flex items-center justify-center text-wine-700 mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-700">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto bg-wine-50 rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Ready to Join?
            </h2>
            <p className="text-lg text-neutral-700 mb-8">
              Take the first step towards becoming part of our growing karate community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/affiliation/club"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-wine-700 text-white rounded-lg hover:bg-wine-800 transition-colors"
              >
                Club Affiliation
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-wine-700 text-wine-700 rounded-lg hover:bg-wine-50 transition-colors"
              >
                Contact Us
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </DefaultLayout>
  );
};

export default Affiliation;