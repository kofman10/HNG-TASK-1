import React from 'react'
import Footer from '../components/Footer'
import { useState, useEffect } from "react";


const Contact = () => {
 const name = 'Kajotoni Kofo'  
 const initialValues = { firstname: '', email: '', lastname: '', message: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues(initialValues)
    setFormErrors(validate(formValues));
  };


  const validate = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = "Firstname is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } 
     if (!values.lastname) {
      errors.lastname = "Lastname is required!";
    }
     if (!values.message) {
      errors.message = "Please enter a message";
    }
    
    return errors;
  };

  return (
      <>
    <div className = 'flex justify-center'>
    <div>
    <h1 className = 'font-semibold text-[36px] mt-[64px] ml-[16px]'>Contact Me</h1>
    <p className = 'mt-[16px] ml-[16px]'>Hi there, contact me to ask me about anything you have in mind. </p>
    <form className = ' mx-[16px]' onSubmit = {handleSubmit}>
    <div className = 'lg:flex items-center lg:space-x-6'>
      <div>
          <label htmlFor="firstname" className="block text-sm mt-[48px] lg:mt-[24px] font-medium text-gray-700 invalid:outline-red-300">Firstname</label>
          <div className="mt-[6px]">
            <input id="first_name" name="firstname" type="text"  className= "placeholder-gray-500 bg-inherit rounded-md border focus:outline-blue-300 w-full lg:w-[348px] p-2" placeholder = 'Enter your firstname' value={formValues.firstname} onChange = {handleChange} />
          </div>
                    <p className = 'text-red-500'>{formErrors.firstname}</p>

          </div>
            <div>
          <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mt-[24px]">Lastname</label>
          <div className="mt-1">
            <input id="last_name" name="lastname" type="text"  className="placeholder-gray-500 bg-inherit rounded-md border focus:outline-blue-300 w-full lg:w-[348px] p-2" placeholder = 'Enter your lastname' value={formValues.lastname} onChange = {handleChange} />
          </div>
          <p className = 'text-red-500'>{formErrors.lastname}</p>
        </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-[24px]">Email address</label>
          <div className="mt-1">
            <input id="email" name="email" type="email"  className="placeholder-gray-500 bg-inherit rounded-md border focus:outline-blue-300 w-full lg:w-[720px] p-2" placeholder = 'yourname@email.com' value={formValues.email} onChange = {handleChange} />
          </div>
          <p className = 'text-red-500'>{formErrors.email}</p>
        </div>
         <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mt-[24px]">Message</label>
          <div className="mt-1">
            <textarea id="message" name="message" type="text" placeholder = "Send me a message and I'll reply you as soon as possible..." className={!formErrors ? "placeholder-gray-500 bg-inherit rounded-md border border-red-300 outline-red-300 w-full lg:w-[720px]  h-20 p-2 rounded-md" : "placeholder-gray-500 bg-inherit rounded-md border focus:outline-blue-300 w-full lg:w-[720px]  h-20 p-2 rounded-md" } value={formValues.message} onChange = {handleChange} ></textarea>
          </div>
          <p className = 'text-red-500'>{formErrors.message}</p>
        </div>

     <div className = 'flex mt-[24px] '>
    <input id='checkbox' name = 'checkbox' type = 'checkbox'/>
    <label htmlFor = 'checkbox' className = 'ml-3  lg:mt-[0x]'>You agree to providing your data to {name} who may contact you. </label>
     </div>
        <button type = 'submit' id='btn__submit' href='/' className= "text-center bg-blue-600 h-[48px] p-3 w-full lg:w-[720px] rounded-[8px] mt-[32px]  text-white">Send message</button>
     </form>
     </div>
    </div>
         <Footer />
    </>
  )
}

export default Contact