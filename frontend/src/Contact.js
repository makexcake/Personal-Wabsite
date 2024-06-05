import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <h2>Contact Me</h2>
      <p>Email: [your email address]</p>
      <p>Phone: [your phone number]</p>
      <p>Location: [your location]</p>
      <a href="path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer">
        Download Resume
      </a>
    </div>
  );
}

export default Contact;