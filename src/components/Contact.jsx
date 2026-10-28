import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { ArrowIcon, Tag } from './ui';

const inputClass =
  'w-full rounded-lg border border-line bg-surface px-4 py-3 text-white outline-none transition-colors placeholder:text-white/40 focus:border-accent';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs
      .send(
        'service_2i7v91z',
        'template_jxfnpdj',
        {
          from_name: form.name,
          to_name: 'Omar Ahmed',
          from_email: form.email,
          to_email: 'omar792001@gmail.com',
          message: form.message,
        },
        'p60X4esCLXUWVa7x9'
      )
      .then(
        () => {
          setStatus('sent');
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.log(error);
          setStatus('error');
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  return (
    <section id='contact' className='section'>
      <div className='container-x grid grid-cols-1 gap-12 lg:grid-cols-2'>
        <div data-fade className='flex flex-col items-start gap-6'>
          <Tag>Start a project</Tag>
          <h2 className='heading-h2'>Tell me about your project</h2>
          <p className='muted max-w-md'>
            Share a few details about what you want to build and I&apos;ll get
            back to you as soon as possible.
          </p>
        </div>

        <form data-fade onSubmit={handleSubmit} className='card grid grid-cols-1 gap-6 p-6 md:p-8'>
          <label className='flex flex-col gap-2'>
            <span>Your name</span>
            <input
              type='text'
              name='name'
              required
              value={form.name}
              onChange={handleChange}
              placeholder='What is your name?'
              className={inputClass}
            />
          </label>
          <label className='flex flex-col gap-2'>
            <span>Your email</span>
            <input
              type='email'
              name='email'
              required
              value={form.email}
              onChange={handleChange}
              placeholder='What is your email?'
              className={inputClass}
            />
          </label>
          <label className='flex flex-col gap-2'>
            <span>Your message</span>
            <textarea
              rows={6}
              name='message'
              required
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to build?'
              className={`${inputClass} min-h-[11.25rem]`}
            />
          </label>

          <button type='submit' className='btn w-fit' disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send message'}
            <ArrowIcon />
          </button>

          {status === 'sent' && (
            <p className='rounded-lg bg-[#ecfdf3] p-4 text-center text-[#027a48]'>
              Thank you. I will get back to you as soon as possible.
            </p>
          )}
          {status === 'error' && (
            <p className='rounded-lg bg-[#fef3f2] p-4 text-center text-[#b42318]'>
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
