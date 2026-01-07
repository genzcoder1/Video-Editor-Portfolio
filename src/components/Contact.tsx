import { motion } from 'motion/react';
import { Mail, MessageSquare, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#', color: 'from-purple-600 to-pink-600' },
  { icon: Youtube, label: 'YouTube', href: '#', color: 'from-red-600 to-red-500' },
  { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'from-blue-600 to-blue-500' },
];

export function Contact() {
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen py-32 px-4 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <div className="px-4 py-2 border border-pink-500/30 bg-pink-500/5 rounded-full">
              <span className="text-pink-400 uppercase tracking-wider text-sm">Let's Connect</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6">
            Ready to Create
            <span className="block text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text">
              Something Amazing?
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Let's collaborate and bring your vision to life through stunning cinematic visuals
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
            <div className="relative p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-600 to-pink-600 opacity-10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                >
                  <Mail className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-white text-2xl mb-3">Email Me</h3>
                <p className="text-gray-400 mb-4">Get in touch for project inquiries and collaborations</p>
                <a href="mailto:contact@videoeditor.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                  contact@videoeditor.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Message Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
            <div className="relative p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-600 to-cyan-400 opacity-10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                >
                  <MessageSquare className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-white text-2xl mb-3">Quick Message</h3>
                <p className="text-gray-400 mb-4">Send me a direct message for faster response</p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Start a conversation
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mb-16"
        >
          <p className="text-gray-400 mb-6">Follow my work and stay updated</p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setHoveredSocial(index)}
                  onHoverEnd={() => setHoveredSocial(null)}
                  className="relative group"
                >
                  <div className={`absolute -inset-2 bg-gradient-to-r ${social.color} rounded-full opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300`} />
                  <div className="relative w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: hoveredSocial === index ? 1 : 0,
                      y: hoveredSocial === index ? 0 : 10
                    }}
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
                  >
                    <span className="text-sm text-gray-400">{social.label}</span>
                  </motion.div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-10 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white rounded-full overflow-hidden group text-lg"
          >
            <span className="relative z-10">Start a Project</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-pink-600 to-purple-600"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 rounded-full"
                 style={{ boxShadow: '0 0 40px rgba(147, 51, 234, 0.6)' }}
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 border border-white/20 text-white rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors text-lg"
          >
            View Portfolio
          </motion.button>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-center mt-24 pt-12 border-t border-white/10"
        >
          <p className="text-gray-500 text-sm mb-2">
            © 2025 Cinematic Video Editor. Crafted with passion.
          </p>
          <p className="text-gray-600 text-xs">
            Turning visions into visual masterpieces
          </p>
        </motion.div>
      </div>
    </div>
  );
}
