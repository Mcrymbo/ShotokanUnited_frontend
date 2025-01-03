import React, { useRef } from 'react';
import Navbar from "../components/Navbar";
import { useForm } from 'react-hook-form';
import { auth } from '../hooks';
import { teamSpirit1 } from "../assets";
import { motion, useInView } from 'framer-motion';
import { Facebook, Youtube, Twitter, Phone, Mail, MapPin } from 'lucide-react';
// Map for Icons
const Icons = {
    Facebook: Facebook,
    Youtube: Youtube,
    Twitter: Twitter,
    Call: Phone,
    Email: Mail,
    Location: MapPin
}

function Contact() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await auth.post("/api/message/", data);
            console.log(response.data);
        } catch (error) {
            console.error(error.message);
        }
      reset();
    };
    const containerRef = useRef(null);
    const formRef = useRef(null);
    const contactInfoRef = useRef(null);
    const socialRef = useRef(null);
    const officeRef = useRef(null);
    const mapRef = useRef(null);

    const containerInView = useInView(containerRef, { once: true, margin: "0px 0px -20% 0px" });
    const formInView = useInView(formRef, { once: true, margin: "0px 0px -20% 0px" });
    const contactInfoInView = useInView(contactInfoRef, { once: true, margin: "0px 0px -20% 0px" });
    const socialInView = useInView(socialRef, { once: true, margin: "0px 0px -20% 0px" });
    const officeInView = useInView(officeRef, { once: true, margin: "0px 0px -20% 0px" });
    const mapInView = useInView(mapRef, { once: true, margin: "0px 0px -20% 0px" });


    const heroVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
    };
    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5,  }
        }
    };

    const contactVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.3 }
        }
    };


  return (
      <motion.div
        className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    >
        <Navbar />
        <motion.div
          className='relative'
          ref={containerRef}
          variants={heroVariants}
          initial="hidden"
          animate={containerInView ? "visible" : "hidden"}
        >
            <img src={teamSpirit1} alt="about shotokan united karate kenya"
            width={100}
            height={100}
            className='w-full md:h-[480px] object-cover'
            />
            <div className='absolute inset-0 bg-black opacity-40 h-full'></div>
            <div className='absolute inset-0 flex flex-col items-center justify-center text-center p-6'>
                <h1 className='sr-only'>hdki Kenya</h1>
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <h2 className="text-5xl font-extrabold text-gray-900 mb-4
                        bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-purple-600">
                    Get In Touch
                    </h2>
                    <p className="text-2xl text-white">
                        We're here to answer any questions you may have. Reach out and let's connect!
                    </p>
                </div>
            </div>
        </motion.div>

        <motion.div
          className="mb-4 md:p-4"
           variants={sectionVariants}
            initial="hidden"
            animate={containerInView ? "visible" : "hidden"}
        >
            {/* Contact Grid */}
            <div className="grid md:grid-cols-2 gap-12 bg-white rounded-t-2xl shadow-t-2xl p-8 md:p-16">
            {/* Contact Form */}
            <motion.div 
              className="space-y-6"
                ref={formRef}
                variants={contactVariants}
                initial="hidden"
                animate={formInView ? "visible" : "hidden"}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg
                        focus:outline-none focus:border-blue-500 transition duration-300"
                    />
                    {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input
                    type="email"
                    id="email"
                    {...register("email", {required: "email is required", pattern: /^\S+@\S+$/i })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg
                        focus:outline-none focus:border-blue-500 transition duration-300"
                    placeholder="your.email@example.com"
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                </div>
                <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea
                    id="message"
                    {...register("message", {required: "message is required"})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg
                        focus:outline-none focus:border-blue-500 transition duration-300 h-32"
                    placeholder="Your message..."
                    ></textarea>
                    {errors.message && <span className="text-red-500">{errors.message.message}</span>}
                </div>
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-600 via-purple-400 to-orange-300
                    text-white py-3 rounded-lg hover:opacity-90 transition duration-300
                    transform hover:scale-105 focus:outline-none focus:ring-2
                    focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Send Message
                </button>
                </form>
            </motion.div>

                {/* Contact Info */}
                <div className="space-y-8">
                   <motion.div
                      className="bg-gray-100 rounded-t-2xl p-6 shadow-b-md"
                        ref={contactInfoRef}
                        variants={contactVariants}
                        initial="hidden"
                        animate={contactInfoInView ? "visible" : "hidden"}
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                            <Icons.Call size={28} className="text-blue-500"/>
                            <span className="text-gray-700">+254 755 257 267</span>
                            </div>
                            <div className="flex items-center space-x-4">
                            <Icons.Email size={28} className="text-red-500" />
                            <span className="text-gray-700">info@shotokanunitedkenya.org</span>
                            </div>
                            <div className="flex items-center space-x-4">
                            <Icons.Location size={28} className="text-green-600" />
                            <span className="text-gray-700">3, 49 Parklands Rd, Nairobi</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Social Media */}
                    <motion.div
                    className="bg-gray-100 rounded-2xl p-6 shadow-md"
                     ref={socialRef}
                     variants={contactVariants}
                    initial="hidden"
                    animate={socialInView ? "visible" : "hidden"}
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h3>
                        <div className="flex space-x-6 justify-center">
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              className="hover:scale-110 transition duration-300 cursor-pointer"
                            >
                            <Icons.Facebook size={28} className="text-blue-600" />
                            </motion.div>
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                                className="hover:scale-110 transition duration-300 cursor-pointer"
                            >
                            <Icons.Youtube size={28} className="text-red-600" />
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                className="hover:scale-110 transition duration-300 cursor-pointer"
                            >
                                <Icons.Twitter size={28} className="text-black" />
                            </motion.div>
                        </div>
                    </motion.div>
                    {/* Office Hours */}
                    <motion.div
                       className="bg-gray-100 rounded-2xl p-6 shadow-md"
                       ref={officeRef}
                       variants={contactVariants}
                       initial="hidden"
                       animate={officeInView ? "visible" : "hidden"}
                    >
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Office Hours</h3>
                        <div className="space-y-2">
                            <div>
                                <p className="font-semibold text-gray-700">Monday - Friday</p>
                                <p className="text-gray-600">9:00 AM - 4:00 PM</p>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-700">Saturday</p>
                                <p className="text-gray-600">2:00 PM - 4:00 PM</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Map Section */}
            <motion.div
             className="mt-2 rounded-b-2xl overflow-hidden shadow-b-2xl"
               ref={mapRef}
               variants={sectionVariants}
            initial="hidden"
             animate={mapInView ? "visible" : "hidden"}
             >
                <div className="w-full h-[500px]">
                    <iframe
                    src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=3,%2049%20Parklands%20Rd,%20Nairobi%20'NAIROBI+(Shotokan%20United)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen=""
                    className="border-0"
                    />
                </div>
            </motion.div>
        </motion.div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto text-center">
            <p>© 2024 Shotokan United. All Rights Reserved.</p>
            </div>
        </footer>
        </motion.div>
  );
}

export default Contact;