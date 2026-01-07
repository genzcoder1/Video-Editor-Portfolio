import { motion } from 'motion/react';
import { Video, Clapperboard, Briefcase, Wand2 } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Reel Editing',
    description: 'High-impact vertical content designed for maximum engagement on social platforms',
    features: ['Instagram Reels', 'TikTok Videos', 'YouTube Shorts', 'Trending Audio'],
    color: 'purple',
    gradient: 'from-purple-600 to-purple-900'
  },
  {
    icon: Clapperboard,
    title: 'Cinematic Videos',
    description: 'Narrative-driven storytelling with professional color grading and sound design',
    features: ['Commercial Ads', 'Music Videos', 'Documentaries', 'Cinematic Color'],
    color: 'pink',
    gradient: 'from-pink-600 to-pink-900'
  },
  {
    icon: Briefcase,
    title: 'Brand Content',
    description: 'Strategic video content that amplifies your brand identity and drives results',
    features: ['Product Videos', 'Brand Stories', 'Testimonials', 'Social Campaigns'],
    color: 'cyan',
    gradient: 'from-cyan-600 to-cyan-900'
  },
  {
    icon: Wand2,
    title: 'Motion Graphics',
    description: 'Dynamic animations and visual effects that bring your vision to life',
    features: ['Title Sequences', 'Logo Animations', 'Explainer Videos', 'VFX & Compositing'],
    color: 'purple',
    gradient: 'from-purple-600 to-pink-600'
  },
];

export function Services() {
  return (
    <div className="relative min-h-screen py-32 px-4 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl" />
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
            <div className="px-4 py-2 border border-pink-500/30 bg-pink-500/5 rounded-full">
              <span className="text-pink-400 uppercase tracking-wider text-sm">Services</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl text-white mb-6">
            What I
            <span className="block text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text">
              Create
            </span>
          </h2>
        </motion.div>

        {/* Floating 3D Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -15,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="relative group cursor-pointer"
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                
                {/* Card */}
                <div className="relative p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Title & Description */}
                    <h3 className="text-white text-3xl mb-4">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * idx }}
                          className="flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-8 px-6 py-3 bg-white/5 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors w-full"
                    >
                      Learn More
                    </motion.button>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-tl-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
