import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    degree: 'Bachelor of Technology',
    institution: 'NIT Hamirpur',
    duration: '2019 – 2023',
    description: 'Major in Mechanical Engineering.',
    gpa: '8.66 / 10',
  },
  {
    degree: 'Higher Secondary (CBSE)',
    institution: 'St. Paul Public School',
    duration: '2017 – 2019',
    description: 'Physics, Chemistry, and Mathematics.',
    gpa: '88%',
  },
  {
    degree: 'High School (ICSE)',
    institution: "Victoria Boys' School",
    duration: '2010 – 2017',
    description: 'Maths, Science, Social Studies, English.',
    gpa: '94.2%',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-surface">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-xs tracking-widest text-primary uppercase mb-3">Background</p>
          <h2 className="font-display font-bold text-3xl text-on-surface tracking-tight">Education</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-outline-variant md:-translate-x-1/2" />

          <div className="space-y-10">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-5 md:left-1/2 top-5 w-5 h-5 rounded-full bg-primary-bright border-2 border-surface -translate-x-1/2 z-10 flex items-center justify-center">
                  <FaGraduationCap className="text-on-primary" size={9} />
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-1/2" />

                {/* Card */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-surface-container border border-outline-variant rounded-lg p-5 hover:border-primary-bright transition-all duration-300">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-display font-semibold text-base text-on-surface leading-snug">{item.degree}</h3>
                      <span className="font-mono text-xs text-primary whitespace-nowrap mt-0.5">{item.duration}</span>
                    </div>
                    <p className="font-body text-sm text-primary-bright mb-2">{item.institution}</p>
                    <p className="font-body text-sm text-on-surface-variant mb-3">{item.description}</p>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-surface-high border border-outline-variant text-on-surface-variant">
                      GPA: {item.gpa}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
