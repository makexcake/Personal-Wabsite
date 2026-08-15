import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';

function Contact(): JSX.Element {
  const [animateContact, setAnimateContact] = useState<boolean>(false);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateContact(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const current = contactRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <div className="Contact" ref={contactRef}>
      <div className={`contact-wrapper ${animateContact ? 'animate' : ''}`}>
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-subtitle">Feel free to reach out on LinkedIn for collaboration or questions</div>
        </div>

        <div className="contact-container">
          <div className="contact-info">

            <div className="contact-method">
              <div className="contact-icon">💼</div>
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/vitaly-nudelman-932750264/" target="_blank" rel="noopener noreferrer">
                  Vitaly Nudelman
                </a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">💻</div>
              <div className="contact-details">
                <h3>GitHub</h3>
                <a href="https://github.com/vitalynudelman" target="_blank" rel="noopener noreferrer">
                  github.com/vitalynudelman
                </a>
              </div>
            </div>

            <div className="resume-download">
              <h3>My Resume</h3>
              <a
                href="resume/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="download-button"
              >
                <span className="download-icon">📄</span>
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="resume-preview">
          <h3>Resume Preview</h3>
          <div className="pdf-container">
            <iframe
              src="resume/resume.pdf"
              title="Resume Preview"
              width="100%"
              height="600px"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
