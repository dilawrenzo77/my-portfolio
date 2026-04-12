"use client"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const Form = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      formRef.current,
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    )
    .then((result) => {
      console.log('Success:', result.text);
      setSubmitStatus('success');
      // Manual reset instead of formRef.current.reset()
      formRef.current.reset();
      // Clear any remaining values
      const formElements = formRef.current.elements;
      for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].type === 'text' || formElements[i].type === 'email' || formElements[i].tagName === 'TEXTAREA') {
          formElements[i].value = '';
        }
      }
    }, (error) => {
      console.log('Failed:', error.text);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

  return (
    <StyledWrapper>
      <div className="form-container">
        <form className="form" ref={formRef} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">How Can We Help You?</label>
            <textarea name="textarea" id="textarea" rows={10} cols={50} required defaultValue="" /> {/* Removed spaces */}
          </div>
          <button className="form-submit-btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
          {submitStatus === 'success' && (
            <div className="success-message">Email sent successfully!</div>
          )}
          {submitStatus === 'error' && (
            <div className="error-message">Failed to send. Please try again.</div>
          )}
        </form>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .form-container {
    width: 100%;
    background: linear-gradient(#211832, #211832) padding-box,
                linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
  }

  .form-container button:active {
    scale: 0.95;
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-container .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #717171;
    font-weight: 600;
    font-size: 12px;
  }

  .form-container .form-group input {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    color: #fff;
    font-family: inherit;
    background-color: transparent;
    border: 1px solid #414141;
  }

  .form-container .form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    resize: none;
    color: #fff;
    height: 96px;
    border: 1px solid #414141;
    background-color: transparent;
    font-family: inherit;
  }

  .form-container .form-group input::placeholder {
    color: #fff;
  }

  .form-container .form-group input:focus {
    outline: none;
    border-color: #e81cff;
  }

  .form-container .form-group textarea:focus {
    outline: none;
    border-color: #e81cff;
  }

  .form-container .form-submit-btn {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    align-self: flex-start;
    font-family: inherit;
    color: #000000;
    font-weight: 600;
    width: 40%;
    background: linear-gradient(to right, 
      #00F7FF,
      rgba(255, 75, 165, 0.8)
    );
    padding: 12px 16px;
    font-size: inherit;
    gap: 8px;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 12px;
  }

  .form-container .form-submit-btn:hover {
    background-color: #fff;
    border-color: #fff;
  }

  .form-container .form-submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .success-message {
    color: #4ade80;
    font-size: 14px;
    margin-top: 8px;
    text-align: center;
  }

  .error-message {
    color: #f87171;
    font-size: 14px;
    margin-top: 8px;
    text-align: center;
  }
`;

export default Form;
