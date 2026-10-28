import { close } from '../assets';

const PDFViewer = ({ isOpen, onClose, pdfUrl }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm'>
      <div className='card mx-4 flex max-h-[90vh] w-full max-w-4xl flex-col'>
        {/* Header */}
        <div className='flex items-center justify-between p-4'>
          <h2 className='font-heading text-2xl'>Omar Abdelhamed - CV</h2>
          <button
            onClick={onClose}
            className='rounded-full p-2 transition-colors hover:bg-white/10'
            aria-label='Close'
          >
            <img src={close} alt='' className='h-4 w-4' />
          </button>
        </div>

        {/* PDF Content */}
        <div className='flex-1 px-4'>
          <iframe src={pdfUrl} className='h-[70vh] w-full rounded border-0' title='CV PDF' />
        </div>

        {/* Footer */}
        <div className='flex flex-wrap items-center justify-between gap-4 p-4'>
          <span className='muted text-sm'>
            View in full screen or download for better experience
          </span>
          <a href={pdfUrl} download='Omar_Abdelhamed_CV.pdf' className='btn'>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
