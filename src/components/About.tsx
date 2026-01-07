import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <div ref={containerRef} className="relative min-h-screen py-32 px-4 bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute top-40 -right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: useTransform(y, v => -v) }}
          className="absolute bottom-40 -left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <motion.div 
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Image Container */}
              <motion.div
                className="relative overflow-hidden rounded-2xl"
              >
                <ImageWithFallback
                  src={new URL('../img/image .JPG', import.meta.url).href}
                  alt="Cinematic Video Production"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </motion.div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-6 -right-6 px-6 py-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-2xl"
                style={{ boxShadow: '0 0 60px rgba(147, 51, 234, 0.6)' }}
              >
                <div className="text-white">
                  <div className="text-3xl">5+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <div className="px-4 py-2 border border-cyan-500/30 bg-cyan-500/5 rounded-full">
                <span className="text-cyan-400 uppercase tracking-wider text-sm">About Me</span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl text-white"
            >
              Creative Professional
              <span className="block text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
                Visual Storyteller
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-gray-400 text-lg"
            >
              <p>
                I specialize in transforming creative visions into stunning visual narratives 
                through the art of <span className="text-purple-400">cinematic editing</span>, 
                <span className="text-cyan-400"> motion graphics</span>, and dynamic storytelling.
              </p>
              <p>
                From high-energy reels to emotionally-driven brand content, I craft each frame 
                with precision, blending technical expertise with artistic vision to create 
                content that captivates and resonates.
              </p>
            </motion.div>

            {/* Specializations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: 'Cinematic Reels', color: 'purple' },
                { label: 'Motion Graphics', color: 'pink' },
                { label: 'Brand Content', color: 'cyan' },
                { label: 'Visual Storytelling', color: 'purple' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group"
                >
                  <div className={`w-2 h-2 rounded-full bg-${item.color}-400 group-hover:w-3 transition-all`} 
                       style={{ 
                         backgroundColor: item.color === 'purple' ? '#c084fc' : 
                                         item.color === 'pink' ? '#f472b6' : '#22d3ee',
                         boxShadow: `0 0 10px ${item.color === 'purple' ? '#c084fc' : 
                                                item.color === 'pink' ? '#f472b6' : '#22d3ee'}`
                       }} 
                  />
                  <span className="text-white">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
