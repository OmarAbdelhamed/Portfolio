import { testimonials } from '../constants';

const Testimonials = () => (
  <section id='testimonials' className='section'>
    <div className='container-x flex flex-col gap-12'>
      <h2 data-fade className='heading-h1 text-center'>
        What Clients Say
      </h2>
      <div data-fade className='mx-auto grid w-full max-w-3xl grid-cols-1 gap-5'>
        {testimonials.map((item) => (
          <div key={item.name} className='card flex flex-col justify-between gap-10 p-6 md:p-10'>
            <p className='text-xl leading-normal md:text-2xl'>&quot;{item.testimonial}&quot;</p>
            <div className='flex items-center gap-4'>
              <div className='h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-[#f4f4f5]'>
                <img src={item.image} alt={item.name} className='h-full w-full object-cover' />
              </div>
              <div>
                <div className='text-xl font-semibold'>{item.name}</div>
                <div className='font-medium'>
                  {item.designation}, {item.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
