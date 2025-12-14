import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'e6d0858d-71ef-434e-85b3-47cd425a040f',
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Contact',
          message: formData.message,
          to_email: 'karanaryans2501@gmail.com',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setError('');

        // Reset form
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
          setSubmitted(false);
        }, 3000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to send message. Please try again.');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-12"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {/* Contact Info */}
          {[
            {
              icon: FiMail,
              label: 'Email',
              value: 'My Email',
              href: 'mailto:karanaryans2501@gmail.com',
            },
            {
              icon: FiPhone,
              label: 'Phone',
              value: '+91 9060535145',
              href: 'tel:+919060535145',
            },
            {
              icon: FiMapPin,
              label: 'Location',
              value: 'Patna ,Bihar, India',
              href: 'https://www.google.com/maps/place/Bazar+samiti+main+gate/@25.6061872,85.1709212,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed59007b8bd72b:0xb9b5bd624b2cf791!8m2!3d25.6061872!4d85.1734961!16s%2Fg%2F11vsgs5_8v?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
            },
          ].map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                href={contact.href}
                className="p-6 bg-light dark:bg-primary rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-accent transition-colors text-center group"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="text-accent text-xl" />
                </div>
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">
                  {contact.label}
                </p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  {contact.value}
                </p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Send Me a Message</h3>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 text-green-700 dark:text-green-300 rounded-lg"
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 text-red-700 dark:text-red-300 rounded-lg"
              >
                ✕ {error}
              </motion.div>
            )}

            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-light dark:bg-primary text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-light dark:bg-primary text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-light dark:bg-primary text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="6"
                className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 bg-light dark:bg-primary text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-accent transition-colors resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="button-primary w-full"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Social Links & Info */}
          <motion.div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Connect With Me
              </h3>

              <div className="space-y-4">
                <p className="text-slate-600 dark:text-slate-400">
                  Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities.
                </p>

                <div className="flex gap-4 pt-4">
                  {[
                    {
                      icon: FaGithub,
                      label: 'GitHub',
                      href: 'https://github.com/karan25012002',
                    },
                    {
                      icon: FaLinkedin,
                      label: 'LinkedIn',
                      href: 'https://www.linkedin.com/in/harendra-kumar-00130732a/',
                    },
                    {
                      icon: FaTwitter,
                      label: 'Twitter',
                      href: 'https://x.com/kumar_hare10148',
                    },
                    {
                      icon: FaInstagram,
                      label: 'Instagram',
                      href: 'https://www.instagram.com/karan25_____/',
                    },
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        whileHover={{ scale: 1.2, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-slate-100 dark:bg-primary rounded-full text-slate-900 dark:text-white hover:bg-accent hover:text-white transition-colors"
                        title={social.label}
                      >
                        <Icon size={24} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="p-6 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-purple-700">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                ⚡ Quick Response
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                I typically respond within 24 hours. Let's talk about your exciting projects!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
