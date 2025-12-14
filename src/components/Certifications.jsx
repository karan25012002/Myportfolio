import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiDownload } from 'react-icons/fi';

const Certifications = () => {
  const certificationsData = [
    {
      name: 'Full Stack Web Development',
      platform: 'Udemy',
      year: '2024',
      credentialId: 'UC-1234567890',
      icon: '🚀',
      url: '#',
    },
    {
      name: 'React.js Mastery',
      platform: 'Coursera',
      year: '2024',
      credentialId: 'COUR-2024-789',
      icon: '⚛️',
      url: '#',
    },
    {
      name: 'AI and Machine Learning Fundamentals',
      platform: 'Andrew Ng - Coursera',
      year: '2024',
      credentialId: 'ML-2024-456',
      icon: '🤖',
      url: '#',
    },
    {
      name: 'LangGraph & Agentic LLMs',
      platform: 'DeepLearning.AI',
      year: '2024',
      credentialId: 'LLM-2024-123',
      icon: '🧠',
      url: '#',
    },
    {
      name: 'AWS Cloud Practitioner',
      platform: 'Amazon Web Services',
      year: '2023',
      credentialId: 'AWS-CP-2023',
      icon: '☁️',
      url: '#',
    },
    {
      name: 'Google Cloud Associate Developer',
      platform: 'Google Cloud',
      year: '2023',
      credentialId: 'GCP-2023-789',
      icon: '🔧',
      url: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-12"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-accent dark:hover:border-blue-400 transition-colors bg-slate-50 dark:bg-primary"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest bg-slate-200 dark:bg-slate-800 px-3 py-1 rounded-full">
                  {cert.year}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                {cert.name}
              </h3>

              <p className="text-sm text-accent font-semibold mb-3">
                {cert.platform}
              </p>

              <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 font-mono">
                ID: {cert.credentialId}
              </p>

              <motion.a
                whileHover={{ x: 5 }}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-blue-600 font-semibold"
              >
                View Certificate <FiExternalLink size={16} />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Download All Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-secondary inline-flex items-center gap-2"
          >
            <FiDownload /> Download All Certificates
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
