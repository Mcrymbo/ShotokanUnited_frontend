import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Us</h2>
        <p className="text-lg md:text-xl mb-8">Karate United Kenya is not just a project; it's a passion project born out of our collective love for martial arts and a desire to create a positive impact in our community. Our journey began several years ago when we first stepped onto the tatami and experienced the transformative power of karate.</p>
        <p className="text-lg md:text-xl mb-8">Driven by our shared vision to spread the benefits of karate and inspire others to pursue their martial arts journey, we embarked on this project to create a platform where enthusiasts and practitioners alike can come together, learn, grow, and connect.</p>
        <p className="text-lg md:text-xl mb-8">As students of Holberton School, this project serves as a culmination of our skills, knowledge, and dedication to our craft. It is with great pride that we present this Portfolio Project, showcasing our abilities and passion for web development.</p>
        <p className="text-lg md:text-xl mb-8">Connect with us on <a href="https://www.linkedin.com/" className="text-blue-500 underline">LinkedIn</a>, <a href="https://github.com/" className="text-blue-500 underline">GitHub</a>, and <a href="https://twitter.com/" className="text-blue-500 underline">Twitter</a> to learn more about our team members and stay updated on our latest projects.</p>
        <p className="text-lg md:text-xl mb-8">Visit our <a href="https://github.com/" className="text-blue-500 underline">GitHub repository</a> to explore the codebase and contribute to the project.</p>
        <p className="text-lg md:text-xl mb-8">Thank you for joining us on this journey!</p>
      </div>
    </section>
  );
};

export default AboutSection;