import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import DefaultLayout from '../../layout/DefaultLayout';
import { Link } from 'react-router-dom';
import { 
  Award, Shield, Globe, Users, 
  Sword, Book, Target, Medal,
  ChevronRight, Calendar, BadgeCheck,
  Briefcase, Heart
} from 'lucide-react';

const Benefits = () => {
  const mainBenefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Official Recognition",
      description: "Gain international recognition as an official HDKI affiliated dojo with certificates and credentials.",
      features: [
        "HDKI certification",
        "Official documentation",
        "International recognition",
        "Credibility enhancement"
      ]
    },
    {
      icon: <Book className="w-8 h-8" />,
      title: "Technical Resources",
      description: "Access comprehensive training materials and technical guidance from HDKI experts.",
      features: [
        "Training manuals",
        "Technical videos",
        "Online resources",
        "Expert guidance"
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Development Programs",
      description: "Participate in structured development programs for both instructors and students.",
      features: [
        "Instructor development",
        "Student progression",
        "Specialized workshops",
        "Grading systems"
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "International Network",
      description: "Connect with HDKI dojos and practitioners worldwide for knowledge exchange.",
      features: [
        "Global connections",
        "Cultural exchange",
        "Training opportunities",
        "International events"
      ]
    }
  ];

  const additionalBenefits = [
    {
      category: "Training & Development",
      benefits: [
        {
          icon: <Calendar className="w-6 h-6" />,
          title: "Regular Events",
          description: "Access to national and international training events, seminars, and workshops."
        },
        {
          icon: <BadgeCheck className="w-6 h-6" />,
          title: "Certification Programs",
          description: "Internationally recognized certification for both instructors and students."
        },
        {
          icon: <Briefcase className="w-6 h-6" />,
          title: "Professional Support",
          description: "Business development guidance and marketing support for your dojo."
        }
      ]
    },
    {
      category: "Competition & Recognition",
      benefits: [
        {
          icon: <Medal className="w-6 h-6" />,
          title: "Tournament Access",
          description: "Priority access to local and international competitions."
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "Achievement Recognition",
          description: "Official recognition of achievements and milestones."
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Community Events",
          description: "Participation in community-building events and social gatherings."
        }
      ]
    }
  ];

  const membershipPerks = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Insurance Coverage",
      description: "Comprehensive insurance coverage for your dojo and members."
    },
    {
      icon: <Sword className="w-6 h-6" />,
      title: "Equipment Discounts",
      description: "Special rates on training equipment and merchandise."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Marketing Support",
      description: "Marketing materials and promotional support for your dojo."
    }
  ];

  return (
    <DefaultLayout>
      <Helmet>
        <title>Affiliation Benefits - Shotokan United Kenya</title>
        <meta 
          name="description" 
          content="Discover the comprehensive benefits of affiliating with Shotokan United Kenya. Access international recognition, training resources, and more."
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
              Affiliation Benefits
            </h1>
            <p className="text-xl text-white/90">
              Discover the advantages of joining Shotokan United Kenya
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {mainBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="w-16 h-16 bg-wine-100 rounded-lg flex items-center justify-center text-wine-700 mb-6">
                {benefit.icon}
              </div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                {benefit.title}
              </h2>
              <p className="text-neutral-700 mb-6">
                {benefit.description}
              </p>
              <ul className="space-y-3">
                {benefit.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-neutral-700">
                    <ChevronRight className="w-4 h-4 text-wine-700" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits Sections */}
        {additionalBenefits.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <span className="text-wine-700 font-bold tracking-wider uppercase">
                {section.category}
              </span>
              <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {section.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-wine-100 rounded-lg flex items-center justify-center text-wine-700 mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-700">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Membership Perks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-wine-50 rounded-xl p-8 md:p-12 mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Additional Membership Perks
            </h2>
            <p className="text-neutral-700">
              Exclusive benefits available to affiliated dojos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPerks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6"
              >
                <div className="w-12 h-12 bg-wine-100 rounded-lg flex items-center justify-center text-wine-700 mb-4">
                  {perk.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {perk.title}
                </h3>
                <p className="text-neutral-700">
                  {perk.description}
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
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-lg text-neutral-700 mb-8">
              Start your affiliation journey today and access all these benefits
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/affiliation/form"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-wine-700 text-white rounded-lg hover:bg-wine-800 transition-colors"
              >
                Start Application
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                to="/affiliation/requirements"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-wine-700 text-wine-700 rounded-lg hover:bg-wine-50 transition-colors"
              >
                View Requirements
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </DefaultLayout>
  );
};

export default Benefits;