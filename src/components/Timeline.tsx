import { motion } from 'motion/react';
import { GraduationCap, Briefcase } from 'lucide-react';

const timelineEvents = [
  {
    year: '2018 - 2021',
    type: 'education',
    icon: GraduationCap,
    title: 'Bachelor of Computer Applications (BCA)',
    institution: 'University',
    description: 'Comprehensive studies in computer science, multimedia, and digital technologies',
    color: 'purple'
  },
  {
    year: '2019 - 2020',
    type: 'training',
    icon: Briefcase,
    title: 'Graphic Design & Video Editing Training',
    institution: 'Professional Academy',
    description: 'Intensive training in Adobe Creative Suite, motion graphics, and cinematic editing techniques',
    color: 'cyan'
  },
  {
    year: '2021 - 2023',
    type: 'experience',
    icon: Briefcase,
    title: 'Freelance Video Editor',
    institution: 'Independent',
    description: 'Worked with diverse clients creating reels, commercials, and brand content across platforms',
    color: 'pink'
  },
  {
    year: '2023 - Present',
    type: 'experience',
    icon: Briefcase,
    title: 'Senior Cinematic Editor',
    institution: 'Creative Agency',
    description: 'Leading video projects, motion graphics, and visual storytelling for premium brands',
    color: 'purple'
  },
];

export function Timeline() {
  return (
    <div className="relative min-h-screen py-32 px-4 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-purple-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <div className="px-4 py-2 border border-cyan-500/30 bg-cyan-500/5 rounded-full">
              <span className="text-cyan-400 uppercase tracking-wider text-sm">Journey</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl text-white mb-6">
            Education &
            <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/20 via-pink-500/20 to-cyan-500/20" />

          {/* Timeline Events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isLeft = index % 2 === 0;
              
              const colorClasses = {
                purple: { 
                  bg: 'bg-purple-500/10', 
                  border: 'border-purple-500/30', 
                  text: 'text-purple-400',
                  gradient: 'from-purple-600 to-purple-400',
                  shadow: 'rgba(147, 51, 234, 0.5)'
                },
                pink: { 
                  bg: 'bg-pink-500/10', 
                  border: 'border-pink-500/30', 
                  text: 'text-pink-400',
                  gradient: 'from-pink-600 to-pink-400',
                  shadow: 'rgba(244, 114, 182, 0.5)'
                },
                cyan: { 
                  bg: 'bg-cyan-500/10', 
                  border: 'border-cyan-500/30', 
                  text: 'text-cyan-400',
                  gradient: 'from-cyan-600 to-cyan-400',
                  shadow: 'rgba(34, 211, 238, 0.5)'
                },
              }[event.color];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ 
                        scale: 1.02,
                        y: -5,
                        rotateY: isLeft ? 3 : -3
                      }}
                      transition={{ duration: 0.3 }}
                      className="relative group"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* Glow Effect */}
                      <div className={`absolute -inset-1 bg-gradient-to-r ${colorClasses.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                      
                      {/* Card */}
                      <div className={`relative p-6 ${colorClasses.bg} border ${colorClasses.border} rounded-2xl backdrop-blur-sm`}>
                        {/* Year Badge */}
                        <div className="mb-4">
                          <span className={`${colorClasses.text} text-sm uppercase tracking-wider`}>
                            {event.year}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-white text-2xl mb-2">{event.title}</h3>
                        
                        {/* Institution */}
                        <p className={`${colorClasses.text} mb-3`}>{event.institution}</p>
                        
                        {/* Description */}
                        <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>

                        {/* Corner Accent */}
                        <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${colorClasses.gradient} opacity-5 rounded-tr-2xl`} />
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 z-10"
                  >
                    <div className={`w-full h-full bg-gradient-to-br ${colorClasses.gradient} rounded-full flex items-center justify-center shadow-lg border-4 border-black`}
                         style={{ boxShadow: `0 0 30px ${colorClasses.shadow}` }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </motion.div>

                  {/* Empty Space for Alternating Layout */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24"
        >
          {[
            { number: '500+', label: 'Projects Completed' },
            { number: '50+', label: 'Happy Clients' },
            { number: '5+', label: 'Years Experience' },
            { number: '1M+', label: 'Views Generated' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm"
            >
              <div className="text-4xl text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
