import { motion } from 'motion/react';
import { Lightbulb, Scissors, Sparkles, CheckCircle } from 'lucide-react';

const processSteps = [
  {
    icon: Lightbulb,
    title: 'Concept',
    description: 'Understanding your vision, goals, and creative direction through detailed consultation',
    color: 'purple',
    gradient: 'from-purple-600 to-purple-400'
  },
  {
    icon: Scissors,
    title: 'Editing',
    description: 'Crafting the narrative through precise cuts, pacing, and visual storytelling techniques',
    color: 'pink',
    gradient: 'from-pink-600 to-pink-400'
  },
  {
    icon: Sparkles,
    title: 'Motion',
    description: 'Adding dynamic motion graphics, VFX, and cinematic color grading for visual impact',
    color: 'cyan',
    gradient: 'from-cyan-600 to-cyan-400'
  },
  {
    icon: CheckCircle,
    title: 'Delivery',
    description: 'Final touches, optimization, and delivery in your preferred format and resolution',
    color: 'purple',
    gradient: 'from-purple-600 to-pink-600'
  },
];

export function Process() {
  return (
    <div className="relative min-h-screen py-32 px-4 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
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
              <span className="text-purple-400 uppercase tracking-wider text-sm">My Process</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl text-white mb-6">
            From Vision to
            <span className="block text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text">
              Reality
            </span>
          </h2>
        </motion.div>

        {/* 3D Step Flow */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 hidden lg:block" 
               style={{ transform: 'translateY(-50%)' }}
          />

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60, rotateX: -20 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -20,
                    rotateY: 5,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="relative group"
                  style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                >
                  {/* Step Number Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.15, type: "spring" }}
                    className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center z-20 shadow-lg"
                    style={{ boxShadow: '0 0 30px rgba(147, 51, 234, 0.5)' }}
                  >
                    <span className="text-white text-xl">{index + 1}</span>
                  </motion.div>

                  {/* Card */}
                  <div className="relative p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm overflow-hidden h-full">
                    {/* Gradient Background */}
                    <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${step.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-white text-2xl mb-3">{step.title}</h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                    </div>

                    {/* Hover Glow */}
                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${step.gradient}`}
                         style={{ opacity: 0, mixBlendMode: 'screen' }}
                    />
                  </div>

                  {/* Animated Connector */}
                  {index < processSteps.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.15, duration: 0.8 }}
                      className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500/50 to-pink-500/50 origin-left z-10"
                      style={{ transform: 'translateY(-50%)' }}
                    >
                      {/* Arrow */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-pink-500/50" />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 mb-6">
            Ready to bring your creative vision to life?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/5 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
