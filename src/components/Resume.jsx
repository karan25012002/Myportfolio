import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const Resume = () => {
  const [pdfUrl] = useState('/resume.pdf');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="resume" className="py-20 bg-light dark:bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Resume</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-12"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {/* Quick Stats */}
          {[
            { label: 'Experience', value: '2+ Years', icon: '💼' },
            { label: 'Projects', value: '10+', icon: '🚀' },
            { label: 'Certifications', value: '6', icon: '🏆' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="p-6 bg-white dark:bg-secondary rounded-lg shadow-md text-center"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <p className="text-slate-600 dark:text-slate-400 text-sm uppercase tracking-wider mb-2">
                {stat.label}
              </p>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Resume Preview */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-white dark:bg-secondary rounded-lg shadow-xl overflow-hidden">
            {/* PDF Viewer */}
            <iframe 
              src={pdfUrl} 
              className="w-full h-96 md:h-[600px]"
              title="Resume"
              style={{ border: 'none' }}
            />
          </div>
        </motion.div>

        {/* Download Button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={pdfUrl}
            download="Harendra_Kumar_Resume.pdf"
            className="button-primary flex items-center justify-center gap-2"
          >
            <FiDownload /> Download Resume
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary flex items-center justify-center gap-2"
          >
            View in New Tab
          </motion.a>
        </motion.div>

        {/* Resume Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-700"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            Key Highlights
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Technical Skills',
                items: ['Full Stack Development', 'React.js & Node.js', 'Database Design', 'Cloud Services'],
              },
              {
                title: 'Professional Experience',
                items: ['Freelance Developer', 'Tech Community Member', 'Open Source Contributor', 'Project Lead'],
              },
              {
                title: 'AI/ML Expertise',
                items: ['LangGraph Framework', 'Agentic LLMs', 'AI Integration', 'Model Training'],
              },
              {
                title: 'Soft Skills',
                items: ['Problem Solving', 'Team Collaboration', 'Communication', 'Leadership'],
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-white dark:bg-secondary rounded-lg border-l-4 border-accent"
              >
                <h4 className="font-bold text-slate-900 dark:text-white mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-slate-600 dark:text-slate-400">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
