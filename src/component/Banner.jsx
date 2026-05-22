'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

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
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="w-full min-h-[80vh] overflow-hidden relative">

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true,
          el: '.custom-swiper-pagination'
        }}
        navigation={{
          nextEl: '.swiper-btn-next',
          prevEl: '.swiper-btn-prev'
        }}
      >

        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div className="max-w-7xl mx-auto min-h-[80vh] grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-8">

                {/* TEXT SECTION */}
                <motion.div
                  variants={containerVariants}
                  initial={false}
                  animate={isActive ? "visible" : "hidden"}
                  className="space-y-6 order-2 lg:order-1"
                >

                  <motion.div
                    variants={itemVariants}
                    className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full"
                  >
                    {slide.tag}
                  </motion.div>

                  <motion.h1
                    variants={itemVariants}
                    className="text-5xl font-bold"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    variants={itemVariants}
                    className="text-lg text-gray-500"
                  >
                    {slide.desc}
                  </motion.p>

                  <motion.div variants={itemVariants}>
                    <Link href="/allPets">
                      <button className="bg-pink-500 hover:bg-pink-600 hover:cursor-pointer text-white px-8 py-3 rounded-xl">
                        Adopt Now 🚀
                      </button>
                    </Link>
                  </motion.div>

                </motion.div>

                {/* IMAGE SECTION */}
                <div className="flex justify-center order-1 lg:order-2">

                  <motion.div
                    variants={imageVariants}
                    initial={false}
                    animate={isActive ? "visible" : "hidden"}
                    className="relative w-95 h-95"
                  >
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      fill
                      className="rounded-3xl object-cover"
                      priority={slide.id === 1}
                    />
                  </motion.div>

                </div>

              </div>
            )}
          </SwiperSlide>
        ))}

        {/* NAVIGATION */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50">

          <div className="custom-swiper-pagination mb-4"></div>

          <div className="flex gap-3 justify-center">

            <button className="swiper-btn-prev px-4 py-3 bg-white rounded-xl">
              ←
            </button>

            <button className="swiper-btn-next px-4 py-3 bg-white rounded-xl">
              →
            </button>

          </div>

        </div>

      </Swiper>

    </div>
  );
};

export default Banner;