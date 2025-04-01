import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import DefaultLayout from '../../layout/DefaultLayout';
import { Link } from 'react-router-dom';
import { 
  Heart, Shield, Target, Star, 
  Award, Users, Clock, ChevronRight 
} from 'lucide-react';

const KidsKarate = () => {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Self-Discipline",
      description: "Development of focus, respect, and self-control through structured training."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Physical Fitness",
      description: "Improved strength, flexibility, coordination, and overall health."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal Setting",
      description: "Learning to set and achieve goals through belt progression system."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Confidence",
      description: "Building self-esteem and confidence through skill development."
    }
  ];

  const curriculum = [
    {
      level: "Beginner (White - Yellow Belt)",
      skills: [
        "Basic stances and movements",
        "Fundamental punches and kicks",
        "Simple blocking techniques",
        "Introduction to kata",
        "Basic dojo etiquette"
      ]
    },
    {
      level: "Intermediate (Orange - Green Belt)",
      skills: [
        "Advanced stances and combinations",
        "Basic sparring techniques",
        "Intermediate kata",
        "Self-defense basics",
        "Team exercises"
      ]
    },
    {
      level: "Advanced (Blue - Brown Belt)",
      skills: [
        "Complex combinations",
        "Advanced kata and applications",
        "Controlled sparring",
        "Leadership development",
        "Competition preparation"
      ]
    }
  ];

  const faqs = [
    {
      question: "What age can my child start karate?",
      answer: "We accept children from age 5 and up. Our program is specially designed to accommodate different age groups and developmental stages."
    },
    {
      question: "How often should my child train?",
      answer: "We recommend 2-3 sessions per week for optimal progress. This allows enough time for rest and other activities while maintaining consistent development."
    },
    {
      question: "Is karate safe for children?",
      answer: "Yes, our kids' program emphasizes safety first. All activities are age-appropriate and supervised by certified instructors with extensive experience teaching children."
    },
    {
      question: "What should my child wear to class?",
      answer: "Beginners can start with comfortable sports clothes. Once enrolled, students will need a karate gi (uniform), which can be purchased through our dojo."
    }
  ];

  return (
    <DefaultLayout>
      <Helmet>
        <title>Kids Karate Program - Shotokan United Kenya</title>
        <meta 
          name="description" 
          content="Our specialized kids karate program focuses on building confidence, discipline, and physical fitness in a fun and safe environment."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/assets/images/kids-karate-hero.jpg" // Replace with actual image
          alt="Kids Karate Training"
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
              Kids Karate Program
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Building confidence, discipline, and character through the art of karate
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
            Nurturing Tomorrow's Leaders
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-neutral-700">
            Our Kids Karate Program is specially designed to help children develop physical skills,
            mental discipline, and strong character in a fun and supportive environment. Through
            structured training and positive reinforcement, we help young students build confidence,
            respect, and self-control while learning the art of Shotokan Karate.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
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

        {/* Curriculum Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <span className="text-wine-700 font-bold tracking-wider uppercase">Learning Path</span>
            <h2 className="text-3xl font-bold text-neutral-900 mt-4 mb-6">Program Curriculum</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {curriculum.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {level.level}
                </h3>
                <ul className="space-y-3">
                  {level.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-neutral-700">
                      <ChevronRight className="w-4 h-4 text-wine-700 mt-1 flex-shrink-0" />
                      <span>{skill}</span>
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
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Class Schedule</h2>
            <p className="text-neutral-700">
              Classes are structured to accommodate different age groups and skill levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                Ages 5-8 (Little Dragons)
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-neutral-700">
                  <Clock className="w-4 h-4 text-wine-700" />
                  Monday & Wednesday: 4:00 PM - 5:00 PM
                </li>
                <li className="flex items-center gap-2 text-neutral-700">
                  <Clock className="w-4 h-4 text-wine-700" />
                  Saturday: 9:00 AM - 10:00 AM
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                Ages 9-12 (Junior Warriors)
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-neutral-700">
                  <Clock className="w-4 h-4 text-wine-700" />
                  Monday & Wednesday: 5:00 PM - 6:00 PM
                </li>
                <li className="flex items-center gap-2 text-neutral-700">
                  <Clock className="w-4 h-4 text-wine-700" />
                  Saturday: 10:00 AM - 11:00 AM
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <span className="text-wine-700 font-bold tracking-wider uppercase">FAQ</span>
            <h2 className="text-3xl font-bold text-neutral-900 mt-4 mb-6">
              Common Questions
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-lg font-bold text-neutral-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-neutral-700">
                  {faq.answer}
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
              Ready to Start Your Child's Journey?
            </h2>
            <p className="text-lg text-neutral-700 mb-8">
              Join our karate family and watch your child grow in confidence, discipline, and skill.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-wine-700 text-white rounded-lg hover:bg-wine-800 transition-colors"
              >
                Schedule a Trial Class
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

export default KidsKarate;