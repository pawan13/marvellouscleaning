import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

 const BookingScreens = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nmk2gpb', 'template_mu49wdx', form.current, 'rTdvbEOK39QmS1FK8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Fullname</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Mobile Number</label>
      <input type="number" name="user_mobileNumber"/>
      <label>Please pick what you want to clean?</label>
      <select>
            <option value="School">School</option>
            <option value="Child care or age care">Child care or age care</option>
            <option value="Hospital">Hospital</option>
            <option value="Office or shopping center">Office or shopping center</option>
            <option value="Restaurant and bar ">Restaurant and bar </option>
            <option value="Strata Cleaning ">Strata Cleaning</option>
            <option value="Construction and Real State Cleaning ">Construction and Real state Cleaning</option>
      </select>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
export default BookingScreens