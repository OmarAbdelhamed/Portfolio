import { Fragment, useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../hooks/usePageEffects';

const TOP = ['DESIGN', 'BUILD', 'TRAIN', 'SHIP', 'OPTIMISE', 'INTEGRATE'];
const BOTTOM = ['WEB', 'MOBILE', 'AI', 'SPEECH', 'VISION'];

const Line = ({ words }) =>
  words.map((word) => (
    <Fragment key={word}>
      {word} <span className='text-blue'>✦</span>{' '}
    </Fragment>
  ));

// Two headline bands that drift in opposite directions as the section scrolls past.
const Banner = () => {
  const sectionRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let frame;
    const update = () => {
      frame = null;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = 1 - (rect.top + rect.height) / (window.innerHeight + rect.height);
      const shift = (Math.min(Math.max(progress, 0), 1) - 0.5) * 30;
      topRef.current.style.transform = `translateX(${-shift}%)`;
      bottomRef.current.style.transform = `translateX(${shift}%)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} className='overflow-hidden py-16 md:py-24' aria-label='What I do'>
      <div className='flex flex-col whitespace-nowrap font-heading text-[3rem] leading-[1.2] md:text-[4rem] lg:text-[3.5rem] xl:text-[4rem]'>
        <h2 ref={topRef} className='will-change-transform'>
          <Line words={TOP} />
        </h2>
        <h2 ref={bottomRef} className='self-end will-change-transform'>
          <Line words={BOTTOM} />
        </h2>
      </div>
    </section>
  );
};

export default Banner;
