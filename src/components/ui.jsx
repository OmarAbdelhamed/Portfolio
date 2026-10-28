import useCountUp from '../hooks/useCountUp';
import { companyLogos } from '../constants';

// Logos are colored PNGs, so each sits on a light chip to stay readable on black.
export const LogoRow = ({ className = '' }) => (
  <div className={`flex flex-wrap items-center gap-x-6 gap-y-4 md:gap-x-8 ${className}`}>
    {companyLogos.map((company) => (
      <div
        key={company.name}
        className='flex h-10 items-center rounded-md bg-white/90 px-2 opacity-80 transition-opacity hover:opacity-100 md:h-12'
      >
        <img
          src={company.logo}
          alt={`${company.name} logo`}
          loading='lazy'
          className='h-7 w-auto object-contain md:h-9'
        />
      </div>
    ))}
  </div>
);

export const ArrowIcon = ({ className = 'h-4 w-4' }) => (
  <svg viewBox='0 0 16 16' fill='none' className={className} aria-hidden='true'>
    <path
      d='M3 8h10m0 0L9 4m4 4-4 4'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const Tag = ({ children }) => (
  <div className='tag'>
    <span className='tag-dot' />
    {children}
  </div>
);

export const StartButton = ({ label = 'Start your project', className = 'btn' }) => (
  <a href='#contact' className={className}>
    {label}
    <ArrowIcon />
  </a>
);

export const CountUp = ({ value, suffix = '', prefix = '', className }) => {
  const [ref, current] = useCountUp(value);
  return (
    <span ref={ref} className={className}>
      {prefix}
      {current}
      {suffix}
    </span>
  );
};
