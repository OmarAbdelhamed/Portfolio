import { useEffect, useRef, useState } from 'react';
import { StartButton, Tag } from './ui';

const DURATION = 8000;

const projectLinks = (project) => {
  const links = [
    { label: 'Visit', url: project.live_link || project.project_link },
    { label: 'Demo', url: project.demo_link },
    { label: 'Code', url: project.source_code_link },
  ];
  const seen = new Set();
  return links.filter(({ url }) => {
    if (!url || seen.has(url)) return false;
    seen.add(url);
    return true;
  });
};

// Auto-advancing tabs: the active tab fills with a progress bar, panes crossfade.
const ProjectTabs = ({ id, tag, title, description, projects }) => {
  const [active, setActive] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [progress, setProgress] = useState(false);
  const timer = useRef();

  const select = (index) => {
    setActive(index);
    setCycle((n) => n + 1);
  };

  useEffect(() => {
    // Reset the bar to empty, then let it fill over DURATION on the next frame.
    setProgress(false);
    let frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => setProgress(true));
    });
    timer.current = setTimeout(() => {
      setActive((index) => (index + 1) % projects.length);
      setCycle((n) => n + 1);
    }, DURATION);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer.current);
    };
  }, [cycle, projects.length]);

  return (
    <section id={id} className='section'>
      <div className='container-x'>
        <div className='card grid grid-cols-1 gap-6 bg-[radial-gradient(circle_at_12%_8%,#574aff1f,#0000_50%)] p-4 lg:grid-cols-2'>
          <div
            data-fade
            className='flex flex-col justify-between gap-8 px-[3%] pt-6 lg:gap-40 lg:px-10 lg:py-16'
          >
            <div className='flex flex-col gap-8 lg:gap-16'>
              <div>
                <Tag>{tag}</Tag>
              </div>
              <div className='flex flex-col gap-6'>
                <h2 className='heading-h2'>{title}</h2>
                <p className='muted'>{description}</p>
                <div className='flex flex-wrap gap-4'>
                  <StartButton />
                </div>
              </div>
            </div>
            <div className='flex flex-wrap gap-2' role='tablist'>
              {projects.map((project, index) => (
                <button
                  key={project.name}
                  type='button'
                  role='tab'
                  aria-selected={index === active}
                  onClick={() => select(index)}
                  style={{
                    '--progress': index === active && progress ? 1 : 0,
                    '--tab-duration': `${DURATION}ms`,
                  }}
                  className={`auto-tab rounded-[2rem] bg-white/[0.08] px-5 py-3 text-sm font-semibold transition-colors duration-300 ${
                    index === active ? 'text-white' : 'text-white/65 hover:text-white'
                  } ${index === active && progress ? '' : 'is-resetting'}`}
                >
                  {project.name}
                </button>
              ))}
            </div>
          </div>

          <div
            data-fade
            className='relative flex h-[41rem] flex-col sm:h-[38rem] lg:h-auto lg:min-h-[44rem]'
          >
            {projects.map((project, index) => (
              <div
                key={project.name}
                role='tabpanel'
                aria-hidden={index !== active}
                className={`auto-pane overflow-hidden rounded-lg bg-surface bg-[radial-gradient(circle_at_30%_55%,#574aff33,#0000_60%)] px-6 py-10 md:px-10 ${
                  index === active ? 'is-active' : ''
                }`}
              >
                <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(#00000080,#0000_38%_62%,#0009)]' />
                <div className='relative z-[1] flex h-full flex-col justify-end gap-8 md:gap-16'>
                  <div className='flex min-h-0 flex-1 items-center justify-center'>
                    <img
                      src={project.image}
                      alt={project.name}
                      loading='lazy'
                      className='pane-image max-h-full max-w-full rounded-md object-contain'
                    />
                  </div>
                  <div className='pane-content flex flex-col gap-8 md:gap-16'>
                    <div className='flex max-w-[28rem] flex-col gap-4'>
                      <div className='flex items-center justify-between gap-3'>
                        <div className='eyebrow'>
                          {String(index + 1).padStart(2, '0')} /{' '}
                          {String(projects.length).padStart(2, '0')}
                        </div>
                        <div className='flex gap-4'>
                          {projectLinks(project).map((link) => (
                            <a
                              key={link.label}
                              href={link.url}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='text-[#0263ff] transition-colors hover:text-[#7289ff]'
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                      <h3 className='font-body text-[1.75rem] font-normal leading-[1.25] tracking-[-0.035em] md:text-[2.25rem] lg:text-[2.5rem]'>
                        {project.name}
                      </h3>
                      <p className='line-clamp-3 text-sm text-white/80 md:text-base'>
                        {project.description}
                      </p>
                    </div>
                    <div className='flex flex-wrap gap-2'>
                      {project.tags.map((tag) => (
                        <span key={tag.name} className='pill'>
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTabs;
