import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  const benefits = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Expert Instruction",
      description: "Learn from certified Shotokan instructors with decades of experience"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Traditional Values",
      description: "Embrace discipline, respect, and continuous improvement"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Supportive Community",
      description: "Join a welcoming family of dedicated karate practitioners"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with Pattern */}
      {/* <div className="absolute inset-0 bg-tertiary">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 pattern-shuriken pattern-white pattern-bg-transparent 
          pattern-size-4 pattern-opacity-10"></div>
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Begin Your Karate Journey Today
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12">
              Join Shotokan United and discover the transformative power of traditional karate. 
              Start your path to physical and mental excellence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link 
                to="/auth/register"
                className="btn btn-lg bg-wine hover:bg-wine/90 text-white/80 gap-2 group px-8"
              >
                Start Training
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact"
                className="btn btn-lg btn-outline outline-wine text-gray-800 hover:text-gray-700 hover:bg-wine/10 gap-2 px-8"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
          
        </div>
      </div>

      {/* Decorative Elements */}
      {/* <div className="absolute -left-24 -bottom-24 w-2/3 h-96 bg-gray-800/80 rounded-full blur-3xl"></div>
      <div className="absolute -right-24 -top-24 w-2/3 h-96 bg-wine-800/20 rounded-full blur-3xl"></div> */}
    </section>
  );
};

export default CallToAction;