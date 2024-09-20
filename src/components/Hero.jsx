import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { github, linkedin, upworkicon } from '../assets';
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 z-10 top-[120px] h-[200px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#d80024]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient ' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#d80024]'>Omar</span>
          </h1>
          <p className='{`${styles.heroSubText} mt-2 text-white-100`}'>
            I develop 3d visual websites, user
            <br className='sm:block hidden' />
            interfaces web & mobile applications
          </p>
          <div className='flex flex-row items-center mt-3'>
            <div className=' inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() =>
                  window.open('https://github.com/OmarAbdelhamed', '_blank')
                }
                className='black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='github'
                  className='w-4/5 h-4/5 object-contain'
                />
              </div>
            </div>
            <div className=' inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/omar-abdelhamed-b85a45221/',
                    '_blank'
                  )
                }
                className='black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={linkedin}
                  alt='Linkedin'
                  className='w-4/5 h-4/5 object-contain'
                />
              </div>
            </div>
            <div className=' inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() =>
                  window.open(
                    'https://www.upwork.com/freelancers/~0161e28e4f2f904b8c',
                    '_blank'
                  )
                }
                className='gray-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={upworkicon}
                  alt='upwork'
                  className='w-4/5 h-4/5 object-contain'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about' aria-label='About Section Scroll Link'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};
export default Hero;
