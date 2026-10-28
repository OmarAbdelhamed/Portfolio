import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { services } from '../constants';
import { prefersReducedMotion } from '../hooks/usePageEffects';
import { ArrowIcon, StartButton } from './ui';

const NavButton = ({ setRef, accent, label, flip }) => (
  <button
    ref={setRef}
    type='button'
    aria-label={label}
    className={`flex h-12 w-12 items-center justify-center rounded-full border transition-opacity [&.is-disabled]:pointer-events-none [&.is-disabled]:opacity-40 ${
      accent
        ? 'border-accent bg-accent text-white'
        : 'border-[#0b0b0b26] bg-white text-[#0b0b0ba6]'
    }`}
  >
    <ArrowIcon className={`h-4 w-4 ${flip ? 'rotate-180' : ''}`} />
  </button>
);

const Services = () => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <section id='services' className='section overflow-hidden'>
      <div className='container-x'>
        <div
          data-fade
          className='relative flex h-[48rem] flex-col justify-between gap-6 sm:h-[38rem]'
        >
          <div className='z-[99] flex w-full items-center justify-between gap-6 md:absolute md:inset-x-0 md:top-0'>
            <h2 className='heading-h2 max-w-[23rem]'>My Services</h2>
            <div className='flex gap-3'>
              <NavButton setRef={setPrevEl} label='Previous service' flip />
              <NavButton setRef={setNextEl} label='Next service' accent />
            </div>
          </div>

          {prevEl && nextEl && (
            <Swiper
              className='services-swiper !m-0 h-full w-full'
              modules={[Navigation]}
              slidesPerView='auto'
              centeredSlides
              spaceBetween={8}
              speed={prefersReducedMotion() ? 0 : 600}
              grabCursor
              slideToClickedSlide
              navigation={{ prevEl, nextEl, disabledClass: 'is-disabled' }}
            >
              {services.map((service) => (
                <SwiperSlide key={service.title}>
                  <div className='service-card card flex w-full flex-col justify-between gap-6 p-6 md:p-8'>
                    <img src={service.icon} alt='' className='h-10 w-10 object-contain' />
                    <div className='flex flex-col'>
                      <h3 className='service-heading font-body font-normal leading-[1.6] tracking-[-0.03em]'>
                        {service.title}
                      </h3>
                      <div className='service-hidden'>
                        <div className='flex flex-col gap-6 pt-6'>
                          <p className='muted'>{service.description}</p>
                          <ul className='flex flex-col gap-4'>
                            {service.points.map((point, index) => (
                              <li key={point} className='flex font-semibold'>
                                <span className='w-6 text-white/40'>
                                  {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className='w-6 text-center text-white/25'>-</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                          <div>
                            <StartButton />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
