import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BaseUrl } from '../../index.js';


  // this function takes the data from the form
  //  and sends it to the server
const ContactUs = () => {
  const nav = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    // data is the data from the form
    const data = {
      name: e.target[0].value,
      email: e.target[1].value,
      subject: e.target[2].value, // e.target[2].value is the value of the input with the index of 2 in the form [name, email, subject, message
      message: e.target[3].value,
    };
    try {
      await axios.post(BaseUrl  + 'contact_us/new_msg/', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert('Your message has been sent');
      nav('/');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('There was an error sending your message');
    }
  };

  return (
    <div className= 'form-container'>
      <h1>Contact Us</h1>
      <form onSubmit={handelSubmit}>

        <label> name </label>
        <input type="text"/>

        <label> email </label>
        <input type="email" />

        <label> subject </label>
        <input type="text"/>

        <label> message </label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button className='btn--primary' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
  
