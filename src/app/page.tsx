'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import hill from '../assets/hill.png';
import sky from '../assets/sky.jpg';

export default function Home() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 5000], ['0%', '100%']);
  const sunY = useTransform(scrollY, [0, 500], ['0%', '500%']);
  const sunX = useTransform(scrollY, [0, 500], ['0%', '-500%']);
  const sunScale = useTransform(scrollY, [0, 500], [0.6, 1.5]);
  const sunColor = useTransform(scrollY, [0, 500], ['#ff0', '#f00']);

  return (
    <main className='relative'>
      <div
        style={{
          backgroundImage: `url(${sky.src})`,
        }}
        className='w-full h-screen bg-bottom bg-cover '
      >
        <motion.div
          style={{
            y: sunY,
            x: sunX,
            backgroundColor: sunColor,
            scale: sunScale,
          }}
          className='absolute w-32 rounded-full right-10 top-10 aspect-square'
        />
        <motion.div
          style={{ y }}
          className='absolute -bottom-28 md:-bottom-1/3 xl:-bottom-1/2'
        >
          <Image id='image' src={hill} alt='hill' />
        </motion.div>
      </div>
    </main>
  );
}
