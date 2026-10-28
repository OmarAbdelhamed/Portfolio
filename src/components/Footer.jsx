import { socialLinks } from '../constants';
import { LogoRow, StartButton } from './ui';

const quickLinks = [
  { id: 'about', title: 'About' },
  { id: 'services', title: 'Services' },
  { id: 'work', title: 'Work' },
  { id: 'stack', title: 'Tools' },
  { id: 'testimonials', title: 'Testimonials' },
];

const Footer = () => (
  <footer className='px-[5%] pb-8'>
    <div className='card overflow-hidden rounded-2xl px-[5%] py-16'>
      <div className='container-x flex flex-col justify-between gap-10 lg:flex-row'>
        <div className='flex flex-col justify-between gap-10 lg:gap-32'>
          <div className='flex max-w-md flex-col gap-6'>
            <span className='flex h-16 w-16 items-center justify-center rounded-full bg-white font-heading text-2xl text-black'>
              OA
            </span>
            <h2 className='font-heading text-[1.5rem] leading-[1.4] md:text-[2.5rem] md:leading-[1.3]'>
              Let&apos;s build something people love to use.
            </h2>
            <div>
              <StartButton />
            </div>
          </div>
          <div className='flex flex-col gap-6'>
            <p>Trusted by teams from Bee2 AI and Huawei to independent businesses.</p>
            <LogoRow />
          </div>
        </div>

        <div className='relative -mx-[6%] h-60 overflow-hidden lg:-my-16 lg:mx-0 lg:h-auto lg:w-[21rem]'>
          <video
            className='h-full w-full object-cover'
            src='/hero.mp4'
            autoPlay
            muted
            loop
            playsInline
            preload='none'
          />
          <div className='absolute inset-0 bg-[linear-gradient(#000000d9_10%,#0009_50%,#000000d9)] opacity-85 lg:bg-[linear-gradient(#0000_70%,#000)] lg:opacity-100' />
        </div>

        <div className='flex flex-col justify-between gap-8'>
          <div className='flex max-w-[16rem] flex-col gap-3'>
            <div className='text-lg font-medium'>Quick links</div>
            <div className='flex flex-col'>
              {quickLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className='text-lg font-medium leading-[1.75] text-muted transition-colors hover:text-accent'
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-lg font-medium transition-colors hover:text-accent-soft'
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
    <p className='mt-6 text-center text-sm text-muted'>
      © {new Date().getFullYear()} Omar Abdelhamed
    </p>
  </footer>
);

export default Footer;
