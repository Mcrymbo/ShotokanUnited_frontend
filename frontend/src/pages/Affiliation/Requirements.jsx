import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import DefaultLayout from '../../layout/DefaultLayout';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, AlertCircle, Info, 
  ChevronRight, FileText, Users,
  Building, Award, Shield, Book,
  Calendar, DollarSign
} from 'lucide-react';

const Requirements = () => {
  const essentialRequirements = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Training Facility",
      requirements: [
        "Adequate training space (minimum size requirements)",
        "Proper flooring suitable for karate practice",
        "Basic safety equipment and first aid kit",
        "Changing facilities and amenities"
      ],
      critical: true
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Qualified Instruction",
      requirements: [
        "Head instructor minimum rank of 1st Dan",
        "Valid instructor certification",
        "First aid certification",
        "Child protection certification (if teaching minors)"
      ],
      critical: true
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Legal & Insurance",
      requirements: [
        "Valid business registration",
        "Public liability insurance",
        "Compliance with local regulations",
        "Student insurance coverage"
      ],
      critical: true
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Technical Standards",
      requirements: [
        "Adherence to HDKI technical standards",
        "Regular training schedule",
        "Proper curriculum implementation",
        "Grading system compliance"
      ],
      critical: true
    }
  ];

  const ongoingRequirements = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Regular Participation",
      description: "Active participation in HDKI events and training seminars"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Continuous Development",
      description: "Regular instructor and student development programs"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Documentation",
      description: "Maintaining updated student records and gradings"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Financial Obligations",
      description: "Timely payment of annual fees and memberships"
    }
  ];

  const documents = [
    "Dojo registration certificate",
    "Instructor qualifications",
    "Insurance certificates",
    "Business registration",
    "First aid certifications",
    "Child protection certifications",
    "Training facility documentation",
    "Current student roster"
  ];

  return (
    <DefaultLayout>
      <Helmet>
        <title>Affiliation Requirements - Shotokan United Kenya</title>
        <meta 
          name="description" 
          content="Learn about the requirements for affiliating your dojo with Shotokan United Kenya. Essential criteria and documentation needed."
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
              Affiliation Requirements
            </h1>
            <p className="text-xl text-white/90">
              Essential criteria for joining Shotokan United Kenya
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Essential Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <span className="text-wine-700 font-bold tracking-wider uppercase">Core Criteria</span>
            <h2 className="text-3xl font-bold text-neutral-900 mt-4 mb-6">
              Essential Requirements
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {essentialRequirements.map((requirement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-wine-100 rounded-lg flex items-center justify-center text-wine-700">
                    {requirement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {requirement.title}
                    </h3>
                    {requirement.critical && (
                      <span className="inline-flex items-center gap-1 text-sm text-wine-700">
                        <AlertCircle className="w-4 h-4" />
                        Critical Requirement
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3">
                  {requirement.requirements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-neutral-700">
                      <CheckCircle className="w-5 h-5 text-wine-700 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ongoing Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <span className="text-wine-700 font-bold tracking-wider uppercase">Maintenance</span>
            <h2 className="text-3xl font-bold text-neutral-900 mt-4 mb-6">
              Ongoing Requirements
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ongoingRequirements.map((requirement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-wine-100 rounded-lg flex items-center justify-center text-wine-700 mb-4">
                  {requirement.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {requirement.title}
                </h3>
                <p className="text-neutral-700">
                  {requirement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Required Documents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="bg-wine-50 rounded-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Required Documentation
              </h2>
              <p className="text-neutral-700">
                Please prepare the following documents for your application
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents.map((document, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-white p-4 rounded-lg"
                >
                  <FileText className="w-5 h-5 text-wine-700" />
                  <span className="text-neutral-700">{document}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-wine-100 rounded-lg flex items-center justify-center text-wine-700">
                <Info className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  Important Notes
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-neutral-700">
                    <CheckCircle className="w-5 h-5 text-wine-700 flex-shrink-0 mt-0.5" />
                    All requirements must be met before application approval
                  </li>
                  <li className="flex items-start gap-2 text-neutral-700">
                    <CheckCircle className="w-5 h-5 text-wine-700 flex-shrink-0 mt-0.5" />
                    Regular audits may be conducted to ensure compliance
                  </li>
                  <li className="flex items-start gap-2 text-neutral-700">
                    <CheckCircle className="w-5 h-5 text-wine-700 flex-shrink-0 mt-0.5" />
                    Requirements may be updated based on HDKI guidelines
                  </li>
                </ul>
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
              Ready to Apply?
            </h2>
            <p className="text-lg text-neutral-700 mb-8">
              If you meet these requirements, start your application process today
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

export default Requirements;
