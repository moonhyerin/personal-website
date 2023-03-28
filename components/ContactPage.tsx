import React from 'react';
import Button from '@mui/material/Button';

import styles from './ContactPage.module.css';

function ContactPage() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Get In Touch</p>
      <p>
        I’m currently looking for any new opportunities! My inbox is always
        open. Whether you have a question or just want to say hi, I’ll try my
        best to get back to you!
      </p>
      <a href='#'>hrmoon081632@gmail.com</a>
    </div>
  );
}

export default ContactPage;
