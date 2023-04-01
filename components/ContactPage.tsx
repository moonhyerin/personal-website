import React from 'react';

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
      <button className='bg-[#ffb800] w-2/12 h-[50px] rounded-lg animate-bounce'>
        Send
      </button>
    </div>
  );
}

export default ContactPage;
