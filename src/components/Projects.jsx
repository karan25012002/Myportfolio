import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projectsData = [
    {
      title: 'AI Chat Assistant with LangGraph',
      description: 'Intelligent conversational AI powered by LangGraph framework. Features multi-turn conversations, context awareness, and tool integration.',
      tech: ['React', 'Node.js', 'LangGraph', 'OpenAI API'],
      image: '🤖',
      github: '#',
      live: '#',
      featured: true,
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with product catalog, cart functionality, and payment integration using Stripe.',
      tech: ['React', 'Express', 'MongoDB', 'Tailwind CSS'],
      image: '🛒',
      github: '#',
      live: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team collaboration, and progress tracking.',
      tech: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      image: '✅',
      github: '#',
      live: '#',
    },
    {
      title: 'Personal Blog Platform',
      description: 'Markdown-based blog platform with dark mode, SEO optimization, and comment system.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
      image: '📝',
      github: '#',
      live: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasts, historical data, and interactive maps.',
      tech: ['React', 'Weather API', 'Mapbox', 'Tailwind CSS'],
      image: '🌤️',
      github: '#',
      live: '#',
    },
    {
      title: 'Agentic LLM Framework',
      description: 'Custom framework for building autonomous agents using LangGraph and multiple AI models.',
      tech: ['Python', 'LangGraph', 'LLM APIs', 'FastAPI'],
      image: '🧠',
      github: '#',
      live: '#',
      featured: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-20 bg-light dark:bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-12"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`group relative rounded-xl overflow-hidden bg-white dark:bg-secondary shadow-lg hover:shadow-2xl transition-shadow ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              {/* Background Image */}
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden relative">
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="text-8xl group-hover:scale-110 transition-transform"
                >
                  {project.image}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-800 text-white rounded-lg hover:bg-accent transition-colors"
                  >
                    <FiGithub /> Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors"
                  >
                    <FiExternalLink /> Live Demo
                  </motion.a>
                </div>
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <motion.div
                  animate={{ rotate: 12 }}
                  className="absolute top-4 right-4 px-3 py-1 bg-accent text-white font-bold rounded-full text-sm"
                >
                  Featured
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary inline-flex items-center gap-2"
          >
            View More Projects <FiExternalLink />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
