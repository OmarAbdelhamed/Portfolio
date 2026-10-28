import { useState } from 'react';
import { faqs } from '../constants';

const TABS = [
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About me' },
];

const PlusIcon = ({ open }) => (
  <span className='relative flex h-4 w-4 shrink-0 items-center justify-center' aria-hidden='true'>
    <span className='absolute h-px w-3.5 bg-white' />
    <span
      className={`absolute h-3.5 w-px bg-white transition-transform duration-300 ${
        open ? 'rotate-90 opacity-0' : ''
      }`}
    />
  </span>
);

const FaqItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className='card w-full overflow-hidden bg-[radial-gradient(circle_at_0_0,#574aff29,#fff0)]'>
      <button
        type='button'
        className='flex w-full items-center justify-between gap-2 p-5 text-left'
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className='text-sm font-medium leading-[1.8] md:text-base'>{item.question}</span>
        <PlusIcon open={open} />
      </button>
      <div className={`faq-body ${open ? 'is-open' : ''}`}>
        <div className='overflow-hidden'>
          <p className='muted px-5 pb-5 pr-11 text-sm md:text-base'>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [tab, setTab] = useState(TABS[0].id);

  return (
    <section id='faq' className='section'>
      <div className='container-x grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.55fr]'>
        <div data-fade className='flex flex-col gap-8'>
          <h2 className='heading-h2'>Frequently Asked Questions</h2>
          <div className='flex flex-wrap gap-4' role='tablist'>
            {TABS.map(({ id, label }) => (
              <button
                key={id}
                type='button'
                role='tab'
                aria-selected={tab === id}
                onClick={() => setTab(id)}
                className={`w-full rounded-full border border-line-strong px-4 py-2 text-sm leading-[1.7] transition-colors sm:w-auto ${
                  tab === id ? 'bg-[#f5f5f5] text-black' : 'bg-white/[0.06] hover:bg-[#f5f5f5] hover:text-black'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <div data-fade className='grid grid-cols-1 gap-3'>
          {faqs[tab].map((item) => (
            <FaqItem key={item.question} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
