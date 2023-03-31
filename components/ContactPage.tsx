import React from 'react';
import Button from '@mui/material/Button';

function ContactPage() {
  return (
    <div className='h-screen flex flex-col text-center justify-center'>
      <p className='text-3xl font-bold'>Get In Touch</p>
      <p>
        I’m currently looking for any new opportunities! My inbox is always
        open. Whether you have a question or just want to say hi, I’ll try my
        best to get back to you!
      </p>
      <Button>🌈</Button>
      <a href='#'>hrmoon081632@gmail.com</a>
    </div>
  );
}

export default ContactPage;
