import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="about" className="py-20 bg-primary relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <motion.div 
        className="max-w-[1240px] mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-textPrimary mb-4">About Me</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded"></div>
        </motion.div>

        {/* Main Content - Centered */}
        <motion.div 
          variants={itemVariants} 
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h3 className="text-2xl font-semibold text-accent">
            Let me introduce myself
          </h3>
          
          <div className="space-y-6 text-textSecondary">
            <p>
              👋 I'm a passionate Full Stack Developer with over 1 years of experience in building 
              web applications. My journey in technology started when I wrote my first 
              "Hello World" program, and I've been hooked ever since.
            </p>
            <p>
              🎓 I am a B.Tech graduate of Nit Hamirpur and have worked with various 
              startups, helping them build scalable solutions and 
              deliver exceptional user experiences.
            </p>
            <p>
              🚀 I love learning new technologies and sharing knowledge with the developer 
              community through blog posts, open-source contributions, and mentoring.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 max-w-lg mx-auto py-8">
            <div className="text-center p-6 bg-secondary rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <h4 className="text-4xl font-bold text-accent mb-2">1+</h4>
              <p className="text-textSecondary">Years Experience</p>
            </div>
            <div className="text-center p-6 bg-secondary rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <h4 className="text-4xl font-bold text-accent mb-2">15+</h4>
              <p className="text-textSecondary">Projects Completed</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-4 pt-4"
          >
            <a 
              href="/path-to-resume.pdf" 
              className="px-8 py-3 bg-accent text-primary font-semibold rounded-full 
                hover:bg-accent/90 transition-all duration-300 transform hover:scale-105"
              download
            >
              Download Resume
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-accent text-accent font-semibold 
                rounded-full hover:bg-accent/10 transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;