import { motion } from 'motion/react';
import { Film, Scissors, Sparkles, Palette, Zap, Camera } from 'lucide-react';

const expertiseItems = [
  { 
    icon: Film, 
    title: 'Cinematic Editing', 
    description: 'Crafting narrative-driven sequences with professional color grading',
    color: 'purple'
  },
  { 
    icon: Scissors, 
    title: 'Reel Production', 
    description: 'High-energy vertical content optimized for social platforms',
    color: 'pink'
  },
  { 
    icon: Sparkles, 
    title: 'Motion Graphics', 
    description: 'Dynamic animations and visual effects that elevate storytelling',
    color: 'cyan'
  },
  { 
    icon: Palette, 
    title: 'Color Grading', 
    description: 'Professional color correction and cinematic look development',
    color: 'purple'
  },
  { 
    icon: Zap, 
    title: 'VFX & Compositing', 
    description: 'Seamless visual effects integration and post-production magic',
    color: 'pink'
  },
  { 
    icon: Camera, 
    title: 'Brand Content', 
    description: 'Compelling commercial videos that drive engagement',
    color: 'cyan'
  },
];

const skills = [
  'Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Final Cut Pro',
  'Motion Graphics', 'Color Grading', 'Sound Design', 'VFX Compositing',
  'Cinematic Storytelling', 'Reel Editing', 'Brand Content', 'Social Media',
  '3D Animation', 'Typography', 'Video Optimization', 'Creative Direction'
];

export function Expertise() {
  return (
    <div className="relative min-h-screen py-32 px-4 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <div className="px-4 py-2 border border-purple-500/30 bg-purple-500/5 rounded-full">
              <span className="text-purple-400 uppercase tracking-wider text-sm">Expertise</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl text-white mb-6">
            Master of the
            <span className="block text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text">
              Visual Craft
            </span>
          </h2>
        </motion.div>

        {/* 3D Icon Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {expertiseItems.map((item, index) => {
            const Icon = item.icon;
            const colorClasses = {
              purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', shadow: 'rgba(147, 51, 234, 0.4)' },
              pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400', shadow: 'rgba(244, 114, 182, 0.4)' },
              cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', shadow: 'rgba(34, 211, 238, 0.4)' },
            }[item.color];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02
                }}
                className="relative group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className={`p-8 rounded-2xl ${colorClasses.bg} border ${colorClasses.border} backdrop-blur-sm transition-all duration-500 group-hover:shadow-2xl`}
                     style={{ 
                       boxShadow: `0 0 0 ${colorClasses.shadow}`,
                       transition: 'box-shadow 0.5s ease'
                     }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.boxShadow = `0 20px 60px ${colorClasses.shadow}`;
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.boxShadow = `0 0 0 ${colorClasses.shadow}`;
                     }}
                >
                  {/* Icon Container with 3D Effect */}
                  <motion.div
                    whileHover={{ rotateY: 360 }}
                    transition={{ duration: 0.8 }}
                    className={`w-16 h-16 ${colorClasses.bg} rounded-xl flex items-center justify-center mb-6 border ${colorClasses.border}`}
                  >
                    <Icon className={`w-8 h-8 ${colorClasses.text}`} />
                  </motion.div>

                  <h3 className="text-white text-2xl mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                       style={{
                         background: `radial-gradient(circle at center, ${colorClasses.shadow}, transparent 70%)`
                       }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skill Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden py-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />
          
          <motion.div
            animate={{
              x: [0, -1920]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex gap-6 whitespace-nowrap"
          >
            {[...skills, ...skills, ...skills].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotateZ: 2 }}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
                style={{
                  transform: `perspective(1000px) rotateX(${Math.sin(index) * 2}deg)`
                }}
              >
                <span className="text-white">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
