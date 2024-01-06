import {FiMail} from 'react-icons/fi'
import {FaWhatsapp, FaGithub, FaInstagram} from 'react-icons/fa'
import {AiOutlineLinkedin} from 'react-icons/ai'

import "./index.css"

import Header from "../Header"

const Contact = () => (
    <div>
        <Header />
        <div className='contact-cont'>
            <div className='contact-sub-cont'>
                <div>
                    <article className='contact-article'>
                        <div className='contact-icon-cont'>
                            <FiMail className='contact-icon' />
                            <h2 className='contact-icon-text'>Email</h2>
                        </div>
                        <h4 className='contact-text'>kirankadali33344@gmail.com</h4>
                        <a href="mailto:kirankadali33344@gmail.com"
                        className='contact-a-elem'
                        target="_blank"
                        rel="noreferrer"
                        >
                            Send a message
                        </a>       
                    </article>
                    <article className='contact-article'>
                        <div className='contact-icon-cont'>
                            <FaWhatsapp className='contact-icon' />
                            <h2 className='contact-icon-text'>Whatsapp</h2>
                        </div>
                        <h4 className='contact-text'>+91 8106122504</h4>
                        <a href='https://wa.me/918106122504'
                        className='contact-a-elem' 
                        target='_blank'
                        rel='noreferrer'
                        >
                            Send a message
                        </a>
                    </article>
                </div>
                <img className='contact-image' src="https://www.shutterstock.com/image-photo/contact-us-customer-support-hotline-600nw-2067737414.jpg" alt="contact" />
            </div>
            <div className='contact-bottom-cont'>
                <div className='contact-bottom-icon-cont'>
                    <FaGithub className='contact-bottom-icon' />
                </div>
                <div className='contact-bottom-icon-cont'>
                    <AiOutlineLinkedin className='contact-bottom-icon' />
                </div>
                <div className='contact-bottom-icon-cont'>
                    <FaInstagram className='contact-bottom-icon' />
                </div>
            </div>
        </div>
    </div>
)

export default Contact