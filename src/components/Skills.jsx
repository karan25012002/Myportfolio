import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      name: 'AI/ML',
      skills: [
        { name: 'LangGraph', level: 75 },
        { name: 'Agentic LLMs', level: 80 },
        { name: 'Python', level: 85 },
        { name: 'TensorFlow', level: 70 },
      ],
    },
    {
      name: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS/Vercel', level: 80 },
        { name: 'Figma', level: 75 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-12"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={itemVariants}>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {category.name}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-accent">{skill.level}%</span>
                    </div>

                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Badges */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-700"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'React', 'Node.js', 'JavaScript', 'TypeScript', 'Tailwind CSS',
              'MongoDB', 'Express', 'Git', 'Docker', 'AWS', 'Python', 'AI/ML'
            ].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/50 dark:border-purple-400/50 rounded-full text-accent font-semibold"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
