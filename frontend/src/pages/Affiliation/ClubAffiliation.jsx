import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import DefaultLayout from '../../layout/DefaultLayout';
import { 
  Shield, Award, Globe, Users, 
  CheckCircle, ChevronRight, Mail, 
  Calendar, BadgeCheck 
} from 'lucide-react';
import { jos_mus_jka, k_flag } from "../../assets";

const ClubAffiliation = () => {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Complete Membership Package",
      description: "Insurance coverage, coaching license, first aid certification, and child safeguarding certification."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Regular Training Events",
      description: "Access to nationwide kata and kumite courses led by SUK/HDKI-K instructors."
    },
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "International Certification",
      description: "HDKI-approved Kyu/Dan gradings with internationally recognized certifications."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Competition Opportunities",
      description: "Participate in local and international championships representing your club."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Professional Development",
      description: "Access to HDKI internships and workshops at headquarters in Dublin."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Technical Support",
      description: "Guidance from our Technical Committee dedicated to upholding Budo karate standards."
    }
  ];

  const requirements = [
    "Valid dojo registration",
    "Qualified head instructor (minimum rank required)",
    "Adequate training facility",
    "Commitment to HDKI standards",
    "Annual membership renewal",
    "Regular participation in events"
  ];

  const process = [
    {
      step: 1,
      title: "Initial Application",
      description: "Submit your club's details and documentation for review."
    },
    {
      step: 2,
      title: "Technical Assessment",
      description: "Evaluation of training facilities and instruction standards."
    },
    {
      step: 3,
      title: "Documentation",
      description: "Complete necessary paperwork and agreements."
    },
    {
      step: 4,
      title: "Approval & Integration",
      description: "Receive official affiliation and begin HDKI membership."
    }
  ];

  return (
    <DefaultLayout>
      <Helmet>
        <title>Club Affiliation - Shotokan United Kenya</title>
        <meta 
          name="description" 
          content="Affiliate your club with Shotokan United Kenya and become part of the HDKI family. Access international certification, training events, and more."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src={k_flag}
          alt="Shotokan United Kenya Flag"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wine-900/90 via-wine-900/50 to-transparent"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-0 left-0 right-0 p-8 md:p-16"
        >
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Club Affiliation
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Join Kenya's premier Shotokan karate organization
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
        >
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-wine-100 rounded-full">
              <span className="text-wine-700 font-bold">HDKI Representative</span>
            </div>
            <h2 className="text-3xl font-bold text-neutral-900">
              Join the HDKI Family
            </h2>
            <div className="space-y-4 text-neutral-700">
              <p>
                We are proud to be the official representative of the{' '}
                <a 
                  href="https://hdki.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-wine-700 hover:text-wine-800 font-medium"
                >
                  Hombu Dojo Karate International (HDKI)
                </a>
                {' '}in Kenya, one of the world's fastest-growing Shotokan karate organizations.
              </p>
              <p>
                Through our affiliation program, your club gains access to international
                recognition, comprehensive support, and numerous development opportunities.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src={jos_mus_jka}
              alt="HDKI Training"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 border-2 border-gold rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <span className="text-wine-700 font-bold tracking-wider uppercase">Membership Benefits</span>
            <h2 className="text-3xl font-bold text-neutral-900 mt-4 mb-6">
              Why Affiliate With Us
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
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

        {/* Requirements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="bg-wine-50 rounded-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Affiliation Requirements
              </h2>
              <p className="text-neutral-700">
                Ensure your club meets these basic requirements before applying
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((requirement, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-wine-700 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <span className="text-wine-700 font-bold tracking-wider uppercase">How to Join</span>
            <h2 className="text-3xl font-bold text-neutral-900 mt-4 mb-6">
              Affiliation Process
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-wine-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-700">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-neutral-700 mb-8">
              Contact our Technical Director, Goodric Musoga, to begin your affiliation process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:gmusoga@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-wine-700 text-white rounded-lg hover:bg-wine-800 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Technical Director
              </a>
              <Link
                to="/affiliation/form"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-wine-700 text-wine-700 rounded-lg hover:bg-wine-50 transition-colors"
              >
                Start Application
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </DefaultLayout>
  );
};

export default ClubAffiliation;