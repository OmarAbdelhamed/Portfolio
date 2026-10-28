import { useEffect, useState } from 'react';
import { navLinks, cv } from '../constants';
import PDFViewer from './PDFViewer';
import { StartButton } from './ui';

const ENTER_AT = 24;
const EXIT_AT = 4;

const MenuIcon = ({ open }) => (
  <span className='relative block h-3 w-5' aria-hidden='true'>
    <span
      className={`absolute left-0 h-[1.5px] w-5 bg-white transition-transform duration-300 ${
        open ? 'top-1/2 rotate-45' : 'top-0'
      }`}
    />
    <span
      className={`absolute left-0 h-[1.5px] w-5 bg-white transition-transform duration-300 ${
        open ? 'top-1/2 -rotate-45' : 'bottom-0'
      }`}
    />
  </span>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPDF, setShowPDF] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      setScrolled((prev) => (prev ? y >= EXIT_AT : y > ENTER_AT));
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (link) => {
    setMenuOpen(false);
    if (link.id === 'cv') setShowPDF(true);
  };

  const renderLink = (link, className) =>
    link.id === 'cv' ? (
      <button key={link.id} type='button' className={className} onClick={() => handleLink(link)}>
        {link.title}
      </button>
    ) : (
      <a key={link.id} href={`#${link.id}`} className={className} onClick={() => handleLink(link)}>
        {link.title}
      </a>
    );

  return (
    <>
      <header className='pointer-events-none fixed inset-x-0 top-0 z-50 flex h-16 items-center px-[5%] md:h-[4.875rem]'>
        <div
          className={`nav-pill pointer-events-auto relative mx-auto mt-3 flex w-full items-center justify-between rounded-full py-2 pl-3 pr-2 md:mt-5 ${
            scrolled ? 'is-scrolled max-w-[22.5rem]' : 'max-w-[1280px]'
          }`}
        >
          <a href='#top' className='flex items-center gap-2' onClick={() => setMenuOpen(false)}>
            <span className='flex h-7 w-7 items-center justify-center rounded-full bg-white font-heading text-sm text-black'>
              OA
            </span>
            <span
              className={`overflow-hidden whitespace-nowrap font-medium transition-all duration-500 ${
                scrolled ? 'max-w-0 opacity-0' : 'max-w-[12rem] opacity-100'
              }`}
            >
              Omar Abdelhamed
            </span>
          </a>

          <nav
            className={scrolled ? 'hidden' : 'hidden items-center gap-2 lg:flex'}
            aria-label='Main'
          >
            {navLinks.map((link) =>
              renderLink(
                link,
                'rounded border border-transparent px-4 py-1.5 text-sm transition-colors hover:border-white'
              )
            )}
          </nav>

          <div className='flex items-center gap-2'>
            {scrolled && <span className='hidden h-[30px] w-px bg-[#7f838433] md:block' />}
            <button
              type='button'
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                scrolled ? '' : 'lg:hidden'
              }`}
              aria-expanded={menuOpen}
              aria-label='Toggle menu'
              onClick={() => setMenuOpen((open) => !open)}
            >
              <MenuIcon open={menuOpen} />
            </button>
            <StartButton
              className={`hidden items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm text-white transition-colors duration-500 sm:inline-flex ${
                scrolled
                  ? 'border-[#4271f4] bg-[#4271f4] hover:border-[#2748a1] hover:bg-[#2748a1]'
                  : 'border-transparent bg-transparent hover:border-white'
              }`}
            />
          </div>

          {menuOpen && (
            <nav
              className='absolute right-0 top-[calc(100%+0.75rem)] flex w-64 flex-col rounded-2xl border border-white/20 bg-[rgba(13,15,28,0.85)] p-3 backdrop-blur-xl'
              aria-label='Menu'
            >
              {navLinks.map((link) =>
                renderLink(
                  link,
                  'rounded-lg px-4 py-3 text-left text-lg transition-colors hover:bg-white/10'
                )
              )}
              <a
                href='#contact'
                className='btn mt-2 justify-center sm:hidden'
                onClick={() => setMenuOpen(false)}
              >
                Start your project
              </a>
            </nav>
          )}
        </div>
      </header>

      <PDFViewer isOpen={showPDF} onClose={() => setShowPDF(false)} pdfUrl={cv} />
    </>
  );
};

export default Navbar;
