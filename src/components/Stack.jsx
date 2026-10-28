import { integrations, technologies } from '../constants';

// Alternate my tech icons with the tool integrations, then split across two rows.
const icons = technologies.flatMap((tech, index) => [tech, integrations[index]]).filter(Boolean);
const half = Math.ceil(icons.length / 2);
const rows = [icons.slice(0, half), icons.slice(half)];

const TickerRow = ({ items, reverse }) => (
  <div className='ticker flex w-full overflow-hidden'>
    <div className={`ticker-track flex shrink-0 ${reverse ? 'is-reverse' : ''}`}>
      {/* Two identical halves so the -50% loop is seamless */}
      {[...items, ...items, ...items, ...items].map((tech, index) => (
        <div
          key={`${tech.name}-${index}`}
          className='flex min-w-[150px] items-center justify-center px-3 py-6 md:min-w-[12.5rem]'
        >
          <img
            src={tech.icon}
            alt={index < items.length ? tech.name : ''}
            title={tech.name}
            loading='lazy'
            className={`h-11 w-11 object-contain transition-transform duration-300 hover:scale-110 ${
              tech.invert ? 'invert' : ''
            }`}
          />
        </div>
      ))}
    </div>
  </div>
);

const Stack = () => (
  <section id='stack' className='section'>
    <div className='relative flex items-center justify-center'>
      <div className='absolute z-[2] flex h-48 w-48 items-center justify-center rounded-full border border-white/10 bg-[#2121214d] bg-[radial-gradient(circle_at_50%_42%,#1212125c,#1212122e_62%,#574aff29)] p-8 text-center shadow-[0_0_80px_#ffffff0d] backdrop-blur-[0.5rem] md:h-80 md:w-80'>
        <h2 className='font-heading text-2xl leading-[1.15] md:text-[2.5rem]'>
          Your Stack, Connected.
        </h2>
      </div>
      <div className='flex w-full flex-col justify-between gap-12 py-8'>
        {rows.map((items, index) => (
          <TickerRow key={index} items={items} reverse={index === 1} />
        ))}
      </div>
    </div>
    <p className='mx-auto mt-8 max-w-[32rem] text-center text-lg text-white/70 md:mt-12 md:text-xl'>
      I work with tools you want and need
    </p>
  </section>
);

export default Stack;
