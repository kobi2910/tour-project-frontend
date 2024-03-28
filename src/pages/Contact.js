import React from 'react'
import { redirect } from 'react-router-dom'
import ContactUs from '../components/contactUsComponents/ContactUsComponent'

const Contact = () => {
  return (
    <div>
        <ContactUs/>
    </div>
  )
}

export default Contact

export const contactAction = async ({request}) => {
  console.log(request);
  const data = await request.formData();

  const submission = {
    name: data.get('name'),
    email: data.get('email') 
  }
  console.log(submission);
  
  return redirect('/');
}