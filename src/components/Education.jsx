import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Vignan Foundation For Science Technology & Research',
      year: '2022 - 2026',
      achievements: ['CGPA: 7.02', 'Dean\'s List', 'Active in tech clubs'],
      icon: '🎓',
    },
    {
      degree: 'Intermediate (12th)',
      institution: '+2 S.L.D.F. High School Jayanagar , Sitamarhi',
      year: '2018 - 2020',
      achievements: ['Percentage: 78%', 'School Topper', 'Science Stream'],
      icon: '📚',
    },
    {
      degree: 'Matriculation (10th)',
      institution: 'S.L.D.F. High School Jayanagar , Sitamarhi',
      year: '2017 - 2018',
      achievements: ['Percentage: 65%',  'Merit Scholar'],
      icon: '⭐',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="education" className="py-20 bg-light dark:bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-12"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="relative pl-8 pb-8 border-l-2 border-accent last:border-l-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-5 h-5 bg-accent rounded-full -translate-x-2.5 border-4 border-light dark:border-primary"></div>

              <div className="group">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-accent font-semibold mt-1">{edu.institution}</p>
                  </div>
                  <span className="text-4xl opacity-50 group-hover:opacity-100 transition-opacity">
                    {edu.icon}
                  </span>
                </div>

                <p className="text-slate-500 dark:text-slate-400 font-medium mb-4">{edu.year}</p>

                <div className="flex flex-wrap gap-2">
                  {edu.achievements.map((achievement, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {achievement}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
