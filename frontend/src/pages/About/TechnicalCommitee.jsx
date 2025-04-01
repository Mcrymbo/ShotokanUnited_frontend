import { motion } from 'framer-motion';
import DefaultLayout from '../../layout/DefaultLayout';
import { Helmet } from 'react-helmet-async';
import { Facebook, Instagram, Twitter, Mail, Award, Medal, Star, Users } from 'lucide-react';
import { joshua, joshua1, jason, jason1, musoga, langi, chairman } from '../../assets';

const TechnicalCommittee = () => {
  const committeeMembers = [
    {
      name: "Sensei Joshua Oude",
      rank: "4th Dan",
      position: "Chief Instructor",
      image: joshua,
      alternateImage: joshua1,
      bio: "Leading the technical development of Shotokan United Kenya with over 20 years of experience in traditional karate.",
      specializations: ["Kata", "Kumite", "Traditional Training"],
      achievements: [
        "HDKI International Instructor",
        "National Coach",
        "Technical Director"
      ],
      social: {
        twitter: "https://twitter.com/joshuaoude",
        facebook: "https://facebook.com/joshuaoude",
        instagram: "https://instagram.com/joshuaoude",
        email: "joshua@shotokanunited.co.ke"
      }
    },
    {
      name: "Sensei Jason Mwangi",
      rank: "3rd Dan",
      position: "Technical Director",
      image: jason,
      alternateImage: jason1,
      bio: "A dedicated instructor with expertise in competition training and youth development programs.",
      specializations: ["Competition Training", "Youth Development", "Kata"],
      achievements: [
        "National Team Competitor",
        "Youth Program Director",
        "Regional Tournament Champion"
      ],
      social: {
        facebook: "https://facebook.com/jasonmwangi",
        instagram: "https://instagram.com/jasonmwangi",
        email: "jason@shotokanunited.co.ke"
      }
    },
    {
      name: "Sensei Musoga",
      rank: "3rd Dan",
      position: "Senior Instructor",
      image: musoga,
      bio: "Specializing in traditional karate techniques and kata applications with extensive teaching experience.",
      specializations: ["Traditional Karate", "Kata Applications", "Self-Defense"],
      achievements: [
        "Senior Instructor Certification",
        "Regional Training Coordinator",
        "Traditional Kata Expert"
      ],
      social: {
        facebook: "https://facebook.com/musoga",
        email: "musoga@shotokanunited.co.ke"
      }
    },
    {
      name: "Sensei Langi",
      rank: "3rd Dan",
      position: "Competition Coach",
      image: langi,
      bio: "Leading our competition team with focus on modern training methods and athlete development.",
      specializations: ["Competition Kumite", "Athletic Training", "Team Development"],
      achievements: [
        "National Team Coach",
        "International Competition Medalist",
        "High Performance Director"
      ],
      social: {
        instagram: "https://instagram.com/langi",
        email: "langi@shotokanunited.co.ke"
      }
    },
    {
      name: "Sensei John Kamau",
      rank: "4th Dan",
      position: "Chairman",
      image: chairman,
      bio: "Providing strategic leadership and guidance to Shotokan United Kenya's technical development.",
      specializations: ["Strategic Leadership", "Organizational Development", "Traditional Karate"],
      achievements: [
        "HDKI Kenya Chairman",
        "International Relations Director",
        "Senior Technical Advisor"
      ],
      social: {
        email: "chairman@shotokanunited.co.ke"
      }
    }
  ];

  const stats = [
    {
      icon: <Award className="w-6 h-6" />,
      number: "75+",
      label: "Combined Years Experience"
    },
    {
      icon: <Medal className="w-6 h-6" />,
      number: "100+",
      label: "National Medals"
    },
    {
      icon: <Star className="w-6 h-6" />,
      number: "25+",
      label: "Certified Instructors"
    },
    {
      icon: <Users className="w-6 h-6" />,
      number: "500+",
      label: "Active Students"
    }
  ];

  return (
    <DefaultLayout>
      <Helmet>
        <title>Technical Committee - Shotokan United Kenya</title>
        <meta 
          name="description" 
          content="Meet our technical committee members who lead and guide Shotokan United Kenya's karate development."
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
              Technical Committee
            </h1>
            <p className="text-xl text-white/90">
              Meet our dedicated team of instructors leading Shotokan United Kenya
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-neutral-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-wine-100 flex items-center justify-center text-wine-700 mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-wine-700 mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Committee Members Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-wine-700 font-bold tracking-wider uppercase">Our Leaders</span>
          <h2 className="text-3xl font-bold text-neutral-900 mt-4 mb-6">Technical Excellence</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {committeeMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Member Image */}
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {member.alternateImage && (
                    <img 
                      src={member.alternateImage}
                      alt={`${member.name} - Action`}
                      className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Rank Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-gold/90 text-white text-sm font-bold rounded-full backdrop-blur-sm">
                      {member.rank}
                    </span>
                  </div>

                  {/* Social Links - Visible on Hover */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {member.social.twitter && (
                      <a 
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 rounded-full text-wine-700 hover:text-wine-800 transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.facebook && (
                      <a 
                        href={member.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 rounded-full text-wine-700 hover:text-wine-800 transition-colors"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.instagram && (
                      <a 
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 rounded-full text-wine-700 hover:text-wine-800 transition-colors"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.email && (
                      <a 
                        href={`mailto:${member.social.email}`}
                        className="p-2 bg-white/90 rounded-full text-wine-700 hover:text-wine-800 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Member Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-wine-700 font-semibold mb-4">
                    {member.position}
                  </p>
                  <p className="text-neutral-700 mb-4">
                    {member.bio}
                  </p>

                  {/* Specializations */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-neutral-900 mb-2">
                      Specializations
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specializations.map((spec, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-wine-50 text-wine-700 text-sm font-medium rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900 mb-2">
                      Key Achievements
                    </h4>
                    <ul className="list-disc list-inside text-neutral-700 text-sm space-y-1">
                      {member.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Join Section */}
      <div className="bg-wine-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Join Our Community
            </h2>
            <p className="text-neutral-700 mb-8">
              Train with our experienced instructors and become part of our growing karate family.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-wine-700 text-white rounded-lg hover:bg-wine-800 transition-colors"
            >
              Get Started
              <Award className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default TechnicalCommittee;