import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'

const ContactForm = () => {
  const form = useRef();
  const history = useHistory();

  const sendEmail = (e) => {
    e.preventDefault();
    if(window.confirm("Are you sure you want to send this email?")){ 
    emailjs.sendForm('service_lxlkefd', 'template_2otsc6s', form.current, '_IYx2GgfgT2t7OQBr')
      .then((result) => {
        alert("Your Message Has Been Sent")
        history.push("/")
      }, (error) => {
        alert("Your Message Cannot Be Sent")
      });
    };
  };

  return (
    <FormContainer>
      <StyledForm ref={form} onSubmit={sendEmail}>
        <div className='field'>
          <StyledLabel>Name</StyledLabel>
          <StyledInput type='text' name='from_name' />
        </div>
        <div className='field'>
          <StyledLabel>Email</StyledLabel>
          <StyledInput type='text' name='reply_to' />
        </div>
        <div className='field'>
          <StyledLabel>Message</StyledLabel>
          <textarea style={{ width: '90%', height: '150px', padding: '10px', fontSize: '18px', marginBottom: '10px' }} type='text' name='message' />
        </div>
        <button className='ui button fluid violet' type='submit'>
          Send Email
        </button>
      </StyledForm>
    </FormContainer>
  );
};

export default ContactForm;

const FormContainer = styled.div`
  background-image: url('https://wallpapercave.com/wp/wp4511445.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  width: 400px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
`;

const StyledInput = styled.input`
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 18px; 
`;

const StyledLabel = styled.label`
  font-size: 20px; 
`;