import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Pause, Play } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';

const reels = [
  {
    id: 1,
    videoUrl: 'https://res.cloudinary.com/dpqdendsm/video/upload/v1767754540/video1_sbi0uw.mp4',
    thumbnail: 'https://res.cloudinary.com/dpqdendsm/video/upload/so_0/v1767754540/video1_sbi0uw.jpg',
  },
  {
    id: 2,
    videoUrl: 'https://res.cloudinary.com/dpqdendsm/video/upload/v1767754334/video2_zhyrls.mp4',
    thumbnail: 'https://res.cloudinary.com/dpqdendsm/video/upload/so_0/v1767754334/video2_zhyrls.jpg',
  },
  {
    id: 3,
    videoUrl: 'https://res.cloudinary.com/dpqdendsm/video/upload/v1767755325/video3_zufl6v.mp4',
    thumbnail: 'https://res.cloudinary.com/dpqdendsm/video/upload/so_0/v1767755325/video3_zufl6v.jpg',
  },
  {
    id: 4,
    videoUrl: 'https://res.cloudinary.com/dpqdendsm/video/upload/v1767755680/video4_jqju8h.mp4',
    thumbnail: 'https://res.cloudinary.com/dpqdendsm/video/upload/so_0/v1767755680/video4_jqju8h.jpg',
  },
  {
    id: 5,
    videoUrl: 'https://res.cloudinary.com/dpqdendsm/video/upload/v1767755481/video5_lwjako.mp4',
    thumbnail: 'https://res.cloudinary.com/dpqdendsm/video/upload/so_0/v1767755481/video5_lwjako.jpg',
  },
  {
    id: 6,
    videoUrl: 'https://res.cloudinary.com/dpqdendsm/video/upload/v1767755089/video6_bdmfi4.mp4',
    thumbnail: 'https://res.cloudinary.com/dpqdendsm/video/upload/so_0/v1767755089/video6_bdmfi4.jpg',
  },
  {
    id: 7,
    videoUrl: 'https://res.cloudinary.com/dpqdendsm/video/upload/v1767754865/video7_oogkfh.mp4',
    thumbnail: 'https://res.cloudinary.com/dpqdendsm/video/upload/so_0/v1767754865/video7_oogkfh.jpg',
  },
  {
    id: 8,
    videoUrl: 'https://res.cloudinary.com/dpqdendsm/video/upload/v1767755922/video8_nimwvj.mp4',
    thumbnail: 'https://res.cloudinary.com/dpqdendsm/video/upload/so_0/v1767755922/video8_nimwvj.jpg',
  },
  {
    id: 9,
    videoUrl: 'https://res.cloudinary.com/dpqdendsm/video/upload/v1767756170/video9_ykvjdf.mp4',
    thumbnail: 'https://res.cloudinary.com/dpqdendsm/video/upload/so_0/v1767756170/video9_ykvjdf.jpg',
  },
];

export function ReelShowcase() {
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<typeof reels[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set());
  
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = (reelId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    
    Object.keys(videoRefs.current).forEach((key) => {
      const videoId = parseInt(key);
      if (videoId !== reelId && videoRefs.current[videoId]) {
        videoRefs.current[videoId]?.pause();
        videoRefs.current[videoId]!.currentTime = 0;
      }
    });

    const video = videoRefs.current[reelId];
    if (video) {
      video.muted = false;
      video.volume = 1.0;
      video.play().catch(console.error);
      setPlayingVideoId(reelId);
    }
  };

  const handlePauseClick = (reelId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    
    const video = videoRefs.current[reelId];
    if (video) {
      video.pause();
      video.currentTime = 0;
      video.muted = true;
      setPlayingVideoId(null);
    }
  };

  const handleVideoEnd = (reelId: number) => {
    setPlayingVideoId(null);
    const video = videoRefs.current[reelId];
    if (video) {
      video.currentTime = 0;
      video.muted = true;
    }
  };

  const handleOpenModal = (reel: typeof reels[0]) => {
    if (playingVideoId !== null) {
      const video = videoRefs.current[playingVideoId];
      if (video) {
        video.pause();
        video.currentTime = 0;
        video.muted = true;
      }
      setPlayingVideoId(null);
    }
    
    setSelectedVideo(reel);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
      modalVideoRef.current.currentTime = 0;
    }
    setTimeout(() => {
      setSelectedVideo(null);
    }, 300);
  };

  useEffect(() => {
    if (isModalOpen && modalVideoRef.current) {
      modalVideoRef.current.play().catch(console.error);
    }
  }, [isModalOpen, selectedVideo]);

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => {
        if (playingVideoId !== null) {
          const video = videoRefs.current[playingVideoId];
          if (video) {
            video.pause();
            video.currentTime = 0;
            video.muted = true;
          }
          setPlayingVideoId(null);
        }
      });
    }
  }, [swiper, playingVideoId]);

  const handleVideoLoaded = (reelId: number) => {
    setLoadedVideos(prev => new Set([...prev, reelId]));
  };

  return (
    <div className="relative min-h-screen py-32 px-4 bg-black overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <div className="px-4 py-2 border border-cyan-500/30 bg-cyan-500/5 rounded-full">
              <span className="text-cyan-400 uppercase tracking-wider text-sm">Featured Work</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl text-white mb-6">
            Recent
            <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text">
              Creations
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore a selection of my latest cinematic work, from high-energy reels to brand storytelling
          </p>
        </motion.div>

        {/* Video Slider with Swiper */}
        <div className="relative px-4 md:px-8 lg:px-16 py-12">
          <Swiper
            onSwiper={setSwiper}
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
            loop={true}
            lazy={true}
            className="!pb-16"
          >
            {reels.map((reel, index) => {
              const isPlaying = playingVideoId === reel.id;
              const isLoaded = loadedVideos.has(reel.id);
              
              return (
                <SwiperSlide key={reel.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    className="relative group h-full"
                  >
                    {/* Video Card Container */}
                    <div className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-lg h-full flex flex-col">
                      {/* Video Container */}
                      <div className="relative w-full" style={{ aspectRatio: '9/16' }}>
                        {/* Loading Spinner */}
                        {!isLoaded && (
                          <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
                            <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
                          </div>
                        )}
                        
                        {/* Thumbnail Image - Shows when video is not playing */}
                        {!isPlaying && (
                          <img 
                            src={reel.thumbnail}
                            alt={`Video ${reel.id} thumbnail`}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                          />
                        )}

                        {/* Video Element - Hidden until playing */}
                        <motion.video
                          ref={(el) => {
                            videoRefs.current[reel.id] = el;
                            if (el && !isPlaying) {
                              el.muted = true;
                              el.volume = 1.0;
                            }
                          }}
                          preload="none"
                          loop
                          muted={true}
                          playsInline
                          className="w-full h-full object-cover"
                          style={{
                            opacity: isPlaying ? 1 : 0,
                          }}
                          onEnded={() => handleVideoEnd(reel.id)}
                          onLoadedData={() => handleVideoLoaded(reel.id)}
                        >
                          <source src={reel.videoUrl} type="video/mp4" />
                          Your browser does not support the video tag.
                        </motion.video>

                        {/* Dark overlay - More visible when paused */}
                        <motion.div
                          className="absolute inset-0 bg-black/30"
                          animate={{
                            opacity: isPlaying ? 0 : 0.3,
                          }}
                          transition={{ duration: 0.3 }}
                        />

                        {/* Play/Pause Button Overlay */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                          <AnimatePresence mode="wait">
                            {isPlaying ? (
                              // Pause Button - Shows when video is playing
                              <motion.button
                                key={`pause-${reel.id}`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => handlePauseClick(reel.id, e)}
                                className="w-16 h-16 md:w-20 md:h-20 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent border-2 border-white/30"
                                aria-label="Pause video"
                              >
                                <Pause className="w-6 h-6 md:w-8 md:h-8 text-white" fill="white" />
                              </motion.button>
                            ) : (
                              // Play Button - Shows when video is paused/stopped
                              <motion.button
                                key={`play-${reel.id}`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ 
                                  opacity: 1, 
                                  scale: hoveredIndex === index ? 1.1 : 1 
                                }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => handlePlayClick(reel.id, e)}
                                className="w-16 h-16 md:w-20 md:h-20 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent border-2 border-white/30"
                                aria-label="Play video"
                              >
                                <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="white" />
                              </motion.button>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Full Screen Button - Opens modal */}
                        <button
                          onClick={() => handleOpenModal(reel)}
                          className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white flex items-center justify-center transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
                          aria-label="Open full screen"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            onClick={() => swiper?.slidePrev()}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white border border-gray-200 text-gray-800 rounded-full shadow-lg transition-all flex items-center justify-center hover:scale-110 cursor-pointer"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => swiper?.slideNext()}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white border border-gray-200 text-gray-800 rounded-full shadow-lg transition-all flex items-center justify-center hover:scale-110 cursor-pointer"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center items-center gap-2 mt-8"></div>
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full relative overflow-hidden group font-semibold text-lg shadow-2xl shadow-purple-500/30"
          >
            <span className="relative z-10">View Full Portfolio</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Full Screen Video Modal */}
      <Dialog open={isModalOpen} onOpenChange={(open) => {
        if (!open) handleCloseModal();
      }}>
        <DialogContent
          className="max-w-7xl w-[95vw] p-0 bg-black border-0 overflow-hidden rounded-2xl shadow-2xl"
          onInteractOutside={(e) => e.preventDefault()}
        >
          {selectedVideo && (
            <div className="relative bg-black">
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-black/70 hover:bg-black/90 border-2 border-white/30 text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 shadow-xl"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video Player with Audio - Full Screen Style */}
              <div className="relative w-full bg-black flex items-center justify-center" style={{ minHeight: '80vh', maxHeight: '90vh' }}>
                <video
                  ref={modalVideoRef}
                  controls
                  autoPlay
                  loop
                  playsInline
                  muted={false}
                  className="w-full h-full object-contain"
                  style={{ maxHeight: '90vh' }}
                  preload="auto"
                  onLoadedData={() => {
                    if (modalVideoRef.current) {
                      modalVideoRef.current.play().catch(console.error);
                    }
                  }}
                >
                  <source src={selectedVideo.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Custom Styles */}
      <style>{`
        .swiper-pagination-bullet-custom {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .swiper-pagination-bullet-active-custom {
          width: 24px;
          border-radius: 4px;
          background: linear-gradient(to right, #a855f7, #ec4899);
        }
      `}</style>
    </div>
  );
}