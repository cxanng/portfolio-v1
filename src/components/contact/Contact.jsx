import './contact.css'
import { AiOutlinePhone } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai'
import { MdOutlineFacebook } from 'react-icons/md';
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { RiContactsBook2Fill } from 'react-icons/ri';
import img from '../../img/contact-me.jpg'

const Contact = () => {
  const formRef = useRef();
  const handleSubmit = e => {
    e.preventDefault();
    emailjs.sendForm('service_4ds8y9i', 'template_5ti0dtt', formRef.current, 'user_ecuHhlaqwL4srIjqsphKM')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <div className="contact" id='contact'>
      <h1 className="contact-title">Contact me</h1>
      <p className="contact-desc">Let's keep in touch</p>
      <div className="contact-container">
        <div className="contact-form">
          <div className="contact-left">
            <h2 className='contact-form-title'>My contacts <RiContactsBook2Fill className='icon'/></h2>
            <div className="contact-number">
              <AiOutlinePhone className='icon'/> 
              +358 46 587 7511
            </div>
            <div className="contact-item-links">
              <div className="contact-item">
                <a href="https://www.linkedin.com/in/anhnguyen942/" target="_blank" rel="noopener noreferrer">
                  <FaGithub className='icon'/>
                </a>
              </div>
              <div className="contact-item">
                <a href="https://www.instagram.com/__justta/" target="_blank" rel="noopener noreferrer">
                  <AiFillInstagram className='icon'/>
                </a>
              </div>
              <div className="contact-item">
                <a href="https://www.facebook.com/Xoiganktem/" target="_blank" rel="noopener noreferrer">
                  <MdOutlineFacebook className='icon'/>
                </a>
              </div>
              <div className="contact-item">
                <a href="https://github.com/cxanng" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className='icon'/>
                </a>
              </div>
            </div> 
            <p className='contact-send'>Send your email here:</p>
            <img src={img} alt="" />
          </div>
          <div className="contact-right">
            <form ref={formRef} onSubmit={handleSubmit}>
              <label htmlFor="user_name">Name</label>
              <input type="text" name='user_name'/>
              <label htmlFor="user_email">Email</label>
              <input type="text" name='user_email'/>
              <label htmlFor="user_subject">Subject</label>
              <input type="text" name='user-subject'/>
              <label htmlFor="message">Message</label>
              <textarea name="message" rows="5"></textarea>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
