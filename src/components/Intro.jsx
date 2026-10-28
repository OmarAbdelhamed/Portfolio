import { introPhone } from '../assets';
import { LogoRow } from './ui';

const Intro = () => (
  <section id='about' className='relative overflow-hidden bg-intro'>
    <div className='px-[5%] pb-28 pt-8 md:pt-32'>
      <div className='container-x relative z-[2] flex flex-col items-start gap-12 md:gap-16 lg:gap-24'>
        <h2
          data-fade
          className='max-w-full font-body text-[1.875rem] font-medium leading-[1.3] tracking-[-0.02em] sm:text-[2.25rem] md:max-w-[56%] lg:text-[3rem] xl:text-[3.5rem]'
        >
          Hi! I&apos;m Omar. A full-stack &amp; AI engineer{' '}
          <span className='text-[#f5f5f5]'>building web, mobile</span>{' '}
          <span className='text-blue'>and AI products end to end.</span>
        </h2>
        <div data-fade>
          <LogoRow />
        </div>
      </div>
    </div>
    <div className='pointer-events-none relative z-[1] mx-[5%] -mt-16 mb-12 h-64 md:absolute md:bottom-0 md:top-12 md:left-[62%] md:right-[3%] md:m-0 md:h-auto'>
      <img
        src={introPhone}
        alt='Hand holding a phone showing a mobile app'
        className='h-full w-full object-contain object-bottom md:object-right-bottom'
      />
    </div>
    <div className='pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(#000_10%,#0000_38%_71%,#000_97.5%)]' />
  </section>
);

export default Intro;
