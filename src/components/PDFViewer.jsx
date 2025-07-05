import React from 'react';
import { close } from '../assets';

const PDFViewer = ({ isOpen, onClose, pdfUrl }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-[#151030] rounded-lg max-w-4xl max-h-[90vh] w-full mx-4 flex flex-col'>
        {/* Header */}
        <div className='flex justify-between items-center p-4'>
          <div></div>
          <h2 className='text-xl font-bold text-slate-100'>
            Omar Abdelhamed - CV
          </h2>
          <button
            onClick={onClose}
            className='p-2  hover:text-black rounded-full transition-colors'
          >
            <img src={close} alt='Close' className='w-4 h-4' />
          </button>
        </div>

        {/* PDF Content */}
        <div className='flex-1 p-4'>
          <iframe
            src={pdfUrl}
            className='w-full h-[70vh] border-0 rounded'
            title='CV PDF'
          />
        </div>

        {/* Footer */}
        <div className='p-4  bg-[#151030] rounded-b-lg'>
          <div className='flex justify-between items-center'>
            <span className='text-sm text-slate-50'>
              View in full screen or download for better experience
            </span>
            <a
              href={pdfUrl}
              download='Omar_Abdelhamed_CV.pdf'
              className='bg-[#d80125c3] text-white px-4 py-2 rounded hover:bg-transparent hover:text-white transition-colors'
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
