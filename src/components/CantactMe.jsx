import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import {Heading} from './'
import { laptop } from '../assets'

const CantactMe = () => {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [isValidEmail, setIsValidEmail] = useState(false)
  const handleEmailChange = (Event) => {
    setEmail(Event.target.value)
    setIsValidEmail(/\S+@\S+\.\S+/.test(Event.target.value))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const serviceID = 'service_1i7n45s'
    const templateID = 'template_ze3naea'
    const publicKey = 'fr3lGDAibPo_l5bbG'

    const templateParams = {
      from_name: subject,
      from_email: email,
      to_name: 'Bhautik',
      message: message
    }

    emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then( respons => {
      console.log("email sent successfully!", respons)
      setEmail('')
      setSubject('')
      setMessage('')
    })
    .catch( error => {
      console.log('error sending email', error)
    })

  }

  return (
    <div>
      <Heading title={"Contact Me"} subtitle={"For Any Project Knock Us"}/>
      <div className='flex gap-4 flex-col md:flex-row'>
        <h1 className='heading1 flex-1 self-center relative'>Get in Touch <br /> With Me <div className="blur_bg bottom-[-200px] right-0"/></h1>
        
        <div className='flex-1'>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col mb-8'>
              <label htmlFor="email" className='text-white text-2xl font-medium font-[Rubik] uppercase'>Email</label>
              <input required autoFocus type="email" value={email} onChange={handleEmailChange} id='email'placeholder="Enter your email address" 
              className={`${isValidEmail ? 'outline outline-offset-2 outline-4 outline-green-400' : 'outline outline-offset-2 outline-4 outline-red-400'} border-b bg-inherit border-neutral-400 rounded-br-lg p-1 text-lg`}/>
            </div>
            <div className='flex flex-col mb-8'>
              <label htmlFor="subject" className='text-white text-2xl font-medium font-[Rubik] uppercase'>Name</label>
              <input required type="text" value={subject} onChange={e => setSubject(e.target.value)} id='subject'className='border-b bg-inherit border-neutral-400 rounded-br-lg p-1'/>
            </div>
            <div className='flex flex-col mb-8'>
              <label htmlFor="message" className='text-white text-2xl font-medium font-[Rubik] uppercase'>Message</label>
              <textarea required id='message' value={message} onChange={e => setMessage(e.target.value)} rows={8} className='border-b bg-inherit border-neutral-400 rounded-br-lg p-1'/>
            </div>
            <button type='submit'  
            className={`button1 ${email && subject && message ? 'button1 cursor-pointer' : 'button1-low cursor-not-allowed'}`} disabled={!email || !subject || !message}>send</button>
          </form>
        </div>
      </div>
      <img src={laptop} alt="image" className='mt-10 rounded-[20px] object-contain max-h-[500px] m-auto'/>
    </div>
  )
}

export default CantactMe