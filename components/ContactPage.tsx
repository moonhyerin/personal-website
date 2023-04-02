import React from 'react';
import Link from 'next/link';

function ContactPage() {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <p className='text-3xl font-bold'>Get In Touch</p>
      <p className='m-10 text-center'>
        I’m currently looking for any new opportunities!
        <br />
        My inbox is always open. 🌈
        <br />
        Whether you have a question or just want to say hi, I’ll try my best to
        get back to you!
      </p>
      <Link
        className='bg-[#ffb800] text-white border-none p-[10px] h-[50px] rounded-lg animate-bounce'
        href='https://linkedin.com/in/haileemoon'
        passHref={true}
      >
        Don't hesitate!
      </Link>
    </div>
  );
}

export default ContactPage;
