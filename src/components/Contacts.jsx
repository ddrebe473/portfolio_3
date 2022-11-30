import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contacts() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_42w60vd', 'template_r1cw83b', form.current, 'P7VGPXbBGfCByWPXy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="contact pt-[5rem] mx-72">
        <h1 className="text text-5xl">Contact Me</h1>
          <label 
            htmlFor="fname">
          </label>
          <input type="text" name="to_name" defaultValue="Dylan" className="hidden"/>        
          <input 
          type="name" name="from_name" className="w-full" placeholder="Your Name" />
          <input 
          type="email" id="fname" name="user_email" className="w-full" placeholder="Your Email"/>
            <label htmlFor="subject">
            </label>
            <textarea id="subject" name="message" className="h-96"/>
          <input className=" text-2xl" type="submit" value="Send" />
      </div>
    </form>
  )
}

export default Contacts