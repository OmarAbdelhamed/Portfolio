import { heroStats } from '../constants';
import { ArrowIcon, CountUp, StartButton, Tag } from './ui';

const Hero = () => (
  <section id='top' className='relative min-h-[100svh] overflow-hidden'>
    <video
      className='hero-bg absolute inset-0 h-full w-full object-cover'
      src='/hero.mp4'
      autoPlay
      muted
      loop
      playsInline
      preload='auto'
    />
    <div className='absolute inset-0 z-[2] bg-[linear-gradient(#000000d9_10%,#0009_50%,#000000d9)] md:bg-[linear-gradient(#0000_70%,#000),linear-gradient(90deg,#000_21%,#fff0)]' />

    <div className='relative z-[3] mx-auto flex min-h-[100svh] w-[90vw] max-w-[1280px] flex-col justify-start pb-[5%] pt-28 md:justify-center md:pt-0'>
      <div className='flex flex-col items-start gap-6'>
        <Tag>Software &amp; AI Engineer</Tag>
        <div className='flex flex-col gap-4'>
          <h1 className='font-heading text-[47px] leading-none tracking-[2px] md:text-[54px] lg:text-[4rem]'>
            Design. Build. Ship.
          </h1>
          <p className='max-w-[32rem] text-lg'>
            Omar Abdelhamed - Building web, mobile and AI products that people
            actually use.
          </p>
        </div>
        <div className='mt-2 flex flex-wrap items-center gap-x-7 gap-y-4'>
          <StartButton className='btn px-7 py-3.5 text-base font-medium lg:text-lg' />
          <a
            href='#work'
            className='hidden items-center gap-3.5 font-medium sm:inline-flex lg:text-lg'
          >
            View my work
            <ArrowIcon />
          </a>
        </div>
      </div>
    </div>

    <div className='absolute inset-x-0 bottom-0 z-[3] py-4'>
      <div className='mx-auto w-[90vw] max-w-[1280px]'>
        <div className='mt-4 h-px w-full bg-white/50' />
        <div className='grid grid-cols-2 gap-x-8 md:grid-cols-4'>
          {heroStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex h-28 items-center gap-3 md:h-40 md:gap-4 ${
                index % 2 === 1 ? 'border-l border-white/50 pl-2 md:pl-6' : ''
              } ${index === 2 ? 'md:border-l md:border-white/50 md:pl-6' : ''}`}
            >
              <img src={stat.icon} alt='' className='h-9 w-9 shrink-0 md:h-12 md:w-12' />
              <div className='flex flex-col'>
                <CountUp value={stat.value} suffix={stat.suffix} className='text-xl font-medium md:text-2xl' />
                <div className='text-sm text-white/80 md:text-base'>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
