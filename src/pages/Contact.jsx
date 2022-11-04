import React from 'react'
import Footer from '../components/Footer'

const Contact = () => {
  return (
      <>
    <div className = 'flex justify-center'>
    <div>
    <h1 className = 'font-semibold text-[36px] mt-[64px] ml-[16px]'>Contact Me</h1>
    <p className = 'mt-[16px] ml-[16px]'>Hi there, contact me to ask me about anything you have in mind. </p>
    <form className = ' mx-[16px] '>
    <div className = 'lg:flex items-center lg:space-x-6'>
      <div>
          <label htmlFor="firstname" className="block text-sm mt-[48px] lg:mt-[24px] font-medium text-gray-700">Firstname</label>
          <div className="mt-[6px]">
            <input id="first_name" name="firstname" type="text"  required className="placeholder-gray-500 bg-inherit rounded-md border focus:outline-blue-300 w-full lg:w-[348px] p-2" placeholder = 'Enter your firstname'/>
          </div>
          </div>
            <div>
          <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mt-[24px]">Lastname</label>
          <div className="mt-1">
            <input id="last_name" name="lastname" type="text"  required className="placeholder-gray-500 bg-inherit rounded-md border focus:outline-blue-300 w-full lg:w-[348px] p-2" placeholder = 'Enter your firstname'/>
          </div>
        </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-[24px]">Email address</label>
          <div className="mt-1">
            <input id="email" name="email" type="email"  required className="placeholder-gray-500 bg-inherit rounded-md border focus:outline-blue-300 w-full lg:w-[720px] p-2" placeholder = 'yourname@email.com'/>
          </div>
        </div>
         <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mt-[24px]">Message</label>
          <div className="mt-1">
            <textarea id="message" name="message" type="text" placeholder = "Send me a message and I'll reply you as soon as possible..." required className="placeholder-gray-500 bg-inherit rounded-md border focus:outline-blue-300 w-full lg:w-[720px]  h-20 p-2 rounded-md"></textarea>
          </div>
        </div>

     <div className = 'flex mt-[24px] '>
    <input id='checkbox' name = 'checkbox' type = 'checkbox' className = 'relative mb-3 lg:mb-0'/>
    <p className = 'ml-3  lg:mt-[0px]'>You agree to providing your data to {name} who may contact you. </p>
     </div>
        <button type = 'submit' id='btn__submit' href='/contact' className="text-center bg-blue-600 h-[48px] p-3 w-[343px] lg:w-[720px] rounded-[8px] mt-[32px]  text-white">Send message</button>
     </form>
     </div>
    </div>
         <Footer />
    </>
  )
}

export default Contact