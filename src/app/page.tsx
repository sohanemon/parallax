'use client';
import { motion, useAnimate, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import hill from '../assets/hill.png';
import sky from '../assets/sky.jpg';

export default function Home() {
  const { scrollY } = useScroll();
  const [scope, animate] = useAnimate();

  const y = useTransform(scrollY, [0, 5000], ['0%', '100%']);
  const sunY = useTransform(scrollY, [0, 500], ['0%', '500%']);
  const sunX = useTransform(scrollY, [0, 500], ['0%', '-500%']);
  const sunColor = useTransform(scrollY, [0, 500], ['#ff0', '#f00']);

  function handleAnimation() {
    animate('#image', { opacity: 0.1 });
  }

  return (
    <main className='relative'>
      <div
        ref={scope}
        style={{
          backgroundImage: `url(${sky.src})`,
        }}
        className='w-full h-screen bg-bottom bg-cover '
      >
        <motion.div
          style={{ y: sunY, x: sunX, backgroundColor: sunColor }}
          className='absolute w-32 rounded-full right-10 top-10 aspect-square'
        />
        <motion.div
          style={{ y }}
          className='absolute -bottom-1/2'
          onClick={() => handleAnimation()}
        >
          <Image id='image' src={hill} alt='hill' />
        </motion.div>
      </div>
    </main>
  );
}
