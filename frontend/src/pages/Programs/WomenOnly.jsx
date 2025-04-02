import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import DefaultLayout from '../../layout/DefaultLayout';
import { Link } from 'react-router-dom';
import { ladiesTeam1 } from '@/assets';
import { 
  Shield, Heart, Target, Users, 
  Award, Clock, ChevronRight, 
  Star, Flame, Sparkles 
} from 'lucide-react';

const WomenOnly = () => {
  const programBenefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Self-Defense",
      description: "Learn practical and effective self-defense techniques designed specifically for women."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Fitness & Health",
      description: "Improve strength, flexibility, and overall fitness through dynamic training."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Confidence",
      description: "Build self-confidence and mental strength in a supportive environment."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community",
      description: "Join a supportive community of women dedicated to personal growth and empowerment."
    }
  ];

  const programFeatures = [
    {
      title: "Specialized Training",
      points: [
        "Women-specific self-defense scenarios",
        "Technique adaptations for female practitioners",
        "Strength and conditioning exercises",
        "Flexibility and mobility work"
      ]
    },
    {
      title: "Personal Development",
      points: [
        "Confidence building exercises",
        "Mental resilience training",
        "Leadership development",
        "Goal setting and achievement"
      ]
    },
    {
      title: "Technical Skills",
      points: [
        "Traditional kata practice",
        "Practical self-defense applications",
        "Sparring techniques",
        "Competition preparation"
      ]
    }
  ];

  const schedule = [
    {
      day: "Tuesday & Thursday",
      sessions: [
        { time: "10:00 AM - 11:30 AM", type: "Morning Session" },
        { time: "5:00 PM - 6:30 PM", type: "Evening Session" }
      ]
    },
    {
      day: "Saturday",
      sessions: [
        { time: "9:00 AM - 10:30 AM", type: "All Levels" },
        { time: "2:00 PM - 3:30 PM", type: "Advanced Training" }
      ]
    }
  ];

  const testimonials = [
    {
      quote: "This program has not only taught me self-defense but has given me the confidence to face any challenge in life.",
      author: "Sarah M.",
      role: "Program Member - 2 years"
    },
    {
      quote: "The supportive environment and expert instruction have made my karate journey both enjoyable and empowering.",
      author: "Jane K.",
      role: "Brown Belt"
    },
    {
      quote: "I've gained strength, flexibility, and a wonderful community of supportive women.",
      author: "Lisa W.",
      role: "Program Member - 1 year"
    }
  ];

  return (
    <DefaultLayout>
      <Helmet>
        <title>Women's Karate Program - Shotokan United Kenya</title>
        <meta 
          name="description" 
          content="Specialized karate training program for women at Shotokan United Kenya. Build confidence, strength, and self-defense skills in a supportive environment."
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={ladiesTeam1} // Replace with actual image
          alt="Women's Karate Training"
          className="w-full h-full object-cover object-[20%_36%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wine-900/90 via-wine-900/50 to-transparent"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-0 left-0 right-0 p-8 md:p-16"
        >
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Women's Karate Program
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Empowerment through martial arts training
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
            Strength & Empowerment
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-neutral-700">
            Our Women's Karate Program offers a unique training environment designed
            specifically for women. Combining traditional karate training with practical
            self-defense and fitness, we focus on building confidence, strength, and
            community in a supportive atmosphere.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {programBenefits.map((benefit, index) => (
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

        {/* Program Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <span className="text-wine-700 font-bold tracking-wider uppercase">Program Features</span>
            <h2 className="text-3xl font-bold text-neutral-900 mt-4 mb-6">
              Comprehensive Training
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {feature.title}
                </h3>
                <ul className="space-y-3">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-neutral-700">
                      <ChevronRight className="w-4 h-4 text-wine-700 mt-1 flex-shrink-0" />
                      <span>{point}</span>
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
              Flexible training times to fit your busy schedule
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {schedule.map((day, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {day.day}
                </h3>
                <div className="space-y-4">
                  {day.sessions.map((session, idx) => (
                    <div key={idx} className="border-l-4 border-wine-700 pl-4">
                      <div className="font-semibold text-neutral-900">
                        {session.time}
                      </div>
                      <div className="text-wine-700">
                        {session.type}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <span className="text-wine-700 font-bold tracking-wider uppercase">Testimonials</span>
            <h2 className="text-3xl font-bold text-neutral-900 mt-4 mb-6">
              Success Stories
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="mb-4">
                  <Sparkles className="w-8 h-8 text-gold" />
                </div>
                <blockquote className="text-neutral-700 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-bold text-neutral-900">
                    {testimonial.author}
                  </div>
                  <div className="text-wine-700 text-sm">
                    {testimonial.role}
                  </div>
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
          className="text-center"
        >
          <div className="max-w-3xl mx-auto bg-wine-50 rounded-xl p-8 md:p-12">
            <Flame className="w-12 h-12 text-wine-700 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Start Your Journey Today
            </h2>
            <p className="text-lg text-neutral-700 mb-8">
              Join our community of strong, empowered women and discover the transformative
              power of karate training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-wine-700 text-white rounded-lg hover:bg-wine-800 transition-colors"
              >
                Book a Trial Class
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

export default WomenOnly;