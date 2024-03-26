import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useHistory } from 'react-router-dom';

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
   <form className='ui inverted form' ref={form} onSubmit={sendEmail}>
     <div className='field'>
        <label>Name</label>
        <input type="text" name="from_name" />
     </div>
     <div className='field'>
        <label>Email</label>
        <input type="text" name="reply_to" />
     </div>
     <div className='field'>
        <label>Message</label>
        <textarea type="text" name="message" />
     </div>
     <button className="ui button fluid violet" type="submit">Send Email</button>
   </form>
 );
};

export default ContactForm;