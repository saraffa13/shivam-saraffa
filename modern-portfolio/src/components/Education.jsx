import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: 'Bachelor of Technology',
    institution: 'NIT Hamirpur',
    duration: '2019 - 2023',
    description: 'Major in Mechanical Engineering.',
    gpa: '8.66 / 10',
  },
  {
    degree: 'Higher Secondary (CBSE)',
    institution: 'St. Paul Public School',
    duration: '2017 - 2019',
    description: 'Physics, Chemistry, and Mathematics.',
    gpa: '88%',
  },
  {
    degree: 'High School (ICSE)',
    institution: "Victoria Boys' School",
    duration: '2010 - 2017',
    description: 'Maths, Science, Social Studies, English.',
    gpa: '94.2%',
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-surface py-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">Background</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-on-surface">Education</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-outline-variant md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-10">
            {educationData.map((item, index) => (
              <motion.article
                key={item.institution}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col items-start gap-8 md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-5 top-5 z-10 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-surface bg-primary-bright md:left-1/2">
                  <GraduationCap className="text-on-primary" size={11} />
                </div>
                <div className="hidden w-1/2 md:block" />
                <div className={`w-full pl-12 md:w-1/2 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="rounded-lg border border-outline-variant bg-surface-container p-5 transition-all duration-300 hover:border-primary-bright">
                    <div className="mb-2 flex items-start justify-between gap-4">
                      <h3 className="font-display text-base font-semibold leading-snug text-on-surface">{item.degree}</h3>
                      <span className="mt-0.5 whitespace-nowrap font-mono text-xs text-primary">{item.duration}</span>
                    </div>
                    <p className="mb-2 text-sm text-primary-bright">{item.institution}</p>
                    <p className="mb-3 text-sm text-on-surface-variant">{item.description}</p>
                    <span className="rounded border border-outline-variant bg-surface-high px-2 py-0.5 font-mono text-xs text-on-surface-variant">
                      GPA: {item.gpa}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
