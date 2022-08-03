import React from 'react'
import './contact.css'
import { BiMailSend } from 'react-icons/bi'
import { SiMessenger } from 'react-icons/si'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BiMailSend className='contact__option-icon' />
            <h4>Email</h4>
            <h5>recargamarcas6@gmail.com</h5>
            <a href='mailto:recargamarcas6@gmail.com' target='__blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <SiMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>recargamarcas6@gmail.com</h5>
            <a href='https://m.me/DIAMANTESZINACANTEPEC' target='__blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatssApp</h4>
            <h5>+521258769258</h5>
            <a href='https://api.whatsapp.com/send?phone=+527221656341'>Send a Message</a>
          </article>
        </div>
        {/* END THE CONTACT OPTIONS */}
        <form action="">
          <input type='text' name='name' placeholder='Your Full Name' required  />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary button__form'  >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact