import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github, live } from '../assets';
import SectionWrapper from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { useEffect, useState } from 'react';


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  // Effect to detect screen size changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 800px)');

    // Set initial value
    setIsMobile(mediaQuery.matches);

    // Listen for screen size changes
    const handleMediaChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    // Cleanup event listener on unmount
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  return isMobile ? (
    <Tilt
      options={{ max: 35, scale: 1, speed: 450, reverse: true }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
    >
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
        />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div className='flex flex-col gap-2'>
            {live_link && (
              <div
                onClick={() => window.open(live_link, '_blank')}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-transparent'
              >
                <img
                  src={live}
                  alt='live demo'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            )}
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  ) : (
    <motion.div variants={fadeIn('up', 'spring', index * 0.3, 0.75)}>
      <Tilt
        options={{ max: 35, scale: 1, speed: 450, reverse: true }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div className='flex flex-col gap-2'>
              {live_link && (
                <div
                  onClick={() => window.open(live_link, '_blank')}
                  className=' w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-white opacity-80  '
                >
                  <img
                    src={live}
                    alt='live demo'
                    className='w-[30px] h-[30px] object-contain opacity-100'
                  />
                </div>
              )}
              <div
                onClick={() => window.open(source_code_link, '_blank')}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='github'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
const Works = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Effect to detect screen size changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 800px)');

    // Set initial value
    setIsMobile(mediaQuery.matches);

    // Listen for screen size changes
    const handleMediaChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    // Cleanup event listener on unmount
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Web Development Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        {isMobile ? (
          <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
        ) : (
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        )}
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
