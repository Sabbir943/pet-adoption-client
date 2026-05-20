'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slideData = [
  {
    id: 1,
    tag: "🐾 Loyal Companion",
    title: "Find Your Perfect Golden Companion",
    desc: "Loyal, energetic, and full of pure love. Give a beautiful Golden Retriever the safe, warm forever home they truly deserve.",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1000&auto=format&fit=crop",
    alt: "Cute Golden Retriever Puppy"
  },
  {
    id: 2,
    tag: "🐱 Gentle Soul",
    title: "Bring Home a Fluffy Bundle of Joy",
    desc: "Calm, curious, and perfectly litter-trained. This sweet little kitten is waiting to fill your quiet evenings with gentle purrs.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop",
    alt: "Fluffy Little Kitten"
  },
  {
    id: 3,
    tag: "🐶 Vibrant Melody",
    title: "Brighten Your Days with Gentle Chirps",
    desc: "Smart, interactive, and beautifully colorful. Add life and a touch of nature's cheerful music to your living room today.",
    image: "https://i.ibb.co.com/xqmKk9KH/i-Stock-1271793136.webp",
    alt: "Beautiful Dog Portrait"
  },
  {
    id: 4,
    tag: "🛡️ Brave Guard",
    title: "A Fearless Friend to Watch Over You",
    desc: "Highly intelligent, protective, and easily trainable. This active German Shepherd is ready to be your ultimate lifetime protector.",
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?q=80&w=1000&auto=format&fit=crop",
    alt: "German Shepherd Guard Dog"
  },
  {
    id: 5,
    tag: "🐇 Quiet Comfort",
    title: "A Soft, Quiet Friend for Your Home",
    desc: "Gentle, silent, and incredibly soft. Perfect for cozy spaces, this adorable little bunny brings immediate peace and happiness.",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=1000&auto=format&fit=crop",
    alt: "Fluffy White Bunny"
  }
];

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -2 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 80, damping: 14, delay: 0.1 } }
  };

  return (
    <div className="w-full min-h-[80vh] relative overflow-hidden bg-transparent">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
        speed={800}
        loop={true}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
        navigation={{ nextEl: '.swiper-btn-next', prevEl: '.swiper-btn-prev' }}
        className="w-full min-h-[80vh]"
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full min-h-[80vh] px-6 sm:px-12 lg:px-16 pt-8 pb-32 lg:py-12">
                
                {/* Text Content */}
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate={isActive ? "visible" : "hidden"}
                  className="space-y-6 text-center lg:text-left order-2 lg:order-1"
                >
                  <motion.span 
                    variants={itemVariants}
                    className="inline-flex items-center bg-pink-500/10 text-pink-500 border border-pink-500/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide"
                  >
                    {slide.tag}
                  </motion.span>

                  {/* text-foreground ব্যবহার করায় লাইট/ডার্ক মোডে অটো কালার এডজাস্ট হবে */}
                  <motion.h1 
                    variants={itemVariants}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-foreground"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p 
                    variants={itemVariants}
                    className="text-base sm:text-lg text-foreground/70 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                  >
                    {slide.desc}
                  </motion.p>

                  <motion.div variants={itemVariants} className="pt-2">
                    <Link href="/pets">
                      <motion.button 
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-pink-500 hover:bg-pink-600 text-white font-bold text-base sm:text-lg px-8 py-3.5 rounded-2xl shadow-xl shadow-pink-500/20 transition-all duration-300"
                      >
                        Adopt Now 🚀
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Animated Image Container */}
                <div className="flex justify-center items-center order-1 lg:order-2">
                  <motion.div 
                    variants={imageVariants}
                    initial="hidden"
                    animate={isActive ? "visible" : "hidden"}
                    className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md aspect-square rounded-[2.5rem] bg-foreground/5 p-4 border border-foreground/10 shadow-2xl dark:shadow-pink-500/5"
                  >
                    <div className="w-full h-full rounded-[2rem] overflow-hidden bg-muted relative group">
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </motion.div>
                </div>

              </div>
            )}
          </SwiperSlide>
        ))}

        {/* Custom Navigation Middle Bottom */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 w-auto">
          <div className="custom-swiper-pagination flex gap-2 justify-center"></div>
          
          <div className="flex items-center gap-3 p-1">
            <button className="swiper-btn-prev w-11 h-11 rounded-xl bg-background hover:bg-pink-500 hover:text-white text-foreground flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer font-bold shadow-md border border-foreground/10">
              ←
            </button>
            <button className="swiper-btn-next w-11 h-11 rounded-xl bg-background hover:bg-pink-500 hover:text-white text-foreground flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer font-bold shadow-md border border-foreground/10">
              →
            </button>
          </div>
        </div>
      </Swiper>

      <style jsx global>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          background: currentColor !important;
          opacity: 0.2;
          width: 8px;
          height: 8px;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background: #ec4899 !important;
          opacity: 1;
          width: 24px !important;
        }
      `}</style>
    </div>
  );
};

export default Banner;