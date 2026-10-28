import { experiences } from '../constants';
import { Tag } from './ui';

// Oldest first, one card per row along a vertical line; each card fades in as it scrolls into view.
const Experience = () => (
  <section id='experience' className='section'>
    <div className='container-x flex flex-col gap-12'>
      <div data-fade className='flex max-w-2xl flex-col items-start gap-6'>
        <Tag>Experience</Tag>
        <h2 className='heading-h2'>Where I&apos;ve worked and studied</h2>
      </div>
      <ol className='relative mx-auto flex w-full max-w-4xl flex-col gap-6 border-l border-line pl-6 md:pl-10'>
        {experiences.map((item) => (
          <li key={`${item.title}-${item.company_name}`} data-fade className='relative'>
            <span className='absolute -left-[calc(1.5rem+5px)] top-9 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_4px_#000] md:-left-[calc(2.5rem+5px)]' />
            <article className='card flex flex-col gap-6 p-6 md:p-8'>
              <div className='flex items-start justify-between gap-4'>
                <div className='flex flex-col gap-2'>
                  <span className='eyebrow text-accent-soft'>{item.date}</span>
                  <h3 className='font-body text-2xl font-medium leading-[1.3]'>{item.title}</h3>
                  <p className='muted'>{item.company_name}</p>
                </div>
                <div
                  className='flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg'
                  style={{ background: item.iconBg }}
                >
                  <img src={item.icon} alt={item.company_name} className='h-3/4 w-3/4 object-contain' />
                </div>
              </div>
              <ul className='flex flex-col gap-3 text-sm text-white/70 md:text-base'>
                {item.points.map((point) => (
                  <li key={point} className='flex gap-3'>
                    <span className='mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent' />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
