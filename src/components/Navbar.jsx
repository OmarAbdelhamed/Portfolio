import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks, cv } from '../constants/index';
import { logo, menu, close } from '../assets';
import { PDFViewer } from './';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(true);
  const [showPDF, setShowPDF] = useState(false);

  const handleNavClick = (link) => {
    if (link.id === 'cv') {
      setShowPDF(true);
    } else {
      setActive(link.title);
    }
  };

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
      >
        <div className='w-full flex  justify-between items-center max-w-7xl mx-auto'>
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt='logo' className='w-16 h-16 object-contain' />
            <p className='text-white text-[18px] font-bold cursor-pointer flex '>
              OA&nbsp;
              <span className='sm:block'>| Omar Ahmed</span>
            </p>
          </Link>
          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? 'text-white' : 'text.secondary'
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => handleNavClick(link)}
              >
                {link.id === 'cv' ? (
                  <span>{link.title}</span>
                ) : (
                  <a href={`#${link.id}`}>{link.title}</a>
                )}
              </li>
            ))}
          </ul>
          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
              src={toggle ? menu : close}
              alt='menu'
              className='w-[28px] h-[28px] object-contain cursor-pointer'
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? 'flex' : 'hidden'
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className='list-none flex sm:flex justify-end items-center flex-col gap-4'>
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? 'text-white' : 'text.secondary'
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      handleNavClick(link);
                    }}
                  >
                    {link.id === 'cv' ? (
                      <span>{link.title}</span>
                    ) : (
                      <a href={`#${link.id}`}>{link.title}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* PDF Viewer Popup */}
      <PDFViewer
        isOpen={showPDF}
        onClose={() => setShowPDF(false)}
        pdfUrl={cv}
      />
    </>
  );
};

export default Navbar;
