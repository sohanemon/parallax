import Image from 'next/image';
import hill from '../assets/hill.png';
import sky from '../assets/sky.jpg';

export default function Home() {
  return (
    <main className='relative'>
      <div
        style={{ backgroundImage: `url(${sky.src})` }}
        className='w-full h-screen bg-bottom bg-cover '
      >
        <Image src={hill} alt='hill' className='absolute -bottom-1/2' />
      </div>
    </main>
  );
}
