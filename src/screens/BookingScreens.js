import { useState, useRef } from 'react';
import Button from 'react-bootstrap/esm/Button';
import emailjs from '@emailjs/browser';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-router-dom';

export default function BookingFormScreen() {
  const [state, setState] = useState({
    FullName: '',
    MobileNumber: '',
    email: '',
    description: '',
    cleaning: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(state)) 
    setIsSubmit(true);     
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.FullName) {
      errors.FullName = 'Username is required!';
    }
    if (!values.MobileNumber) {
      errors.MobileNumber = 'MobileNumber is required!';
    } else if (values.MobileNumber.length > 10) {
      errors.MobileNumber = 'MobileNumber must be 10 characters';
    } else if (values.MobileNumber.length < 10) {
      errors.MobileNumber = 'MobileNumber must be 10 characters';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }
    if (!values.cleaning) {
      errors.cleaning = 'Please select the type of cleaning required';
    }
  
    if (!values.description) {
      errors.description = 'Please describe about the job.';
    }
    return errors;
  };

  function sendEmail(){
      emailjs
      .sendForm(
        'service_nmk2gpb',
        'template_mu49wdx',
        form.current,
        'rTdvbEOK39QmS1FK8'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )   
  }

  return (
    <div>
      {Object.keys(formErrors).length === 0  && isSubmit ? (  
        <div>
          {sendEmail()}
          <MessageBox variant="success">
            <p>
              Your email has been sent,{' '}
              <br /> our team member will get back to you soon.
            </p>
          </MessageBox>
            
          <h2>Your details</h2>
          <h6>Name: {state.FullName}</h6>
          <h6>Mobile number: {state.MobileNumber}</h6>
          <h6>Email: {state.email}</h6>
          <h6>ComputerType: {state.cleaning}</h6>
          <h6>Description: {state.description}</h6>

          <Link className="nav-link" to="/home">
            <Button className="packages" variant="success">
              Return to Home
            </Button>
          </Link>
          
        </div>
      ) : (
        <div>
          <h5 style={{textAlign: "center"}}>Please fill the Form to book.</h5>
        </div>
      )}
      <form
      style={{marginLeft:"6rem"}}
        hidden={Object.keys(formErrors).length === 0 && isSubmit}
        ref={form}
        onSubmit={handleSubmit}
      >
        <h1>Book Us</h1>
        <label className="formBooking">
          FullName:{' '}
          <input
            type="text"
            name="FullName"
            value={state.FullName}
            onChange={handleChange}
          />
          <p style={{ color: 'red' }}>{formErrors.FullName}</p>
        </label>
        <br />
        <label className="formBooking">
          Mobile Number :{' '}
          <input
            type="Number"
            name="MobileNumber"
            value={state.MobileNumber}
            onChange={handleChange}
          />
          <p style={{ color: 'red' }}>{formErrors.MobileNumber}</p>
        </label>
        <br />
        <label className="formBooking">
          Email :{' '}
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
          <p style={{ color: 'red' }}>{formErrors.email}</p>
        </label>
        <br />
        <label className="formBooking">
        Please pick what you want to clean? :{' '}
          <select
            name="cleaning"
            value={state.cleaning}
            onChange={handleChange}
          >
            <option value="Select">Select</option>
            <option value="Daily Office">Daily Office</option>
            <option value="Transportation and infrastructure cleaning">Transportation and infrastructure cleaning</option>
            <option value="Hospitality and event cleaning">Hospitality and event cleaning</option>
            <option value="Industrial and manufacturing cleaning">Industrial and manufacturing cleaning</option>
            <option value="Food Hygenic Cleaning">Food Hygenic Cleaning</option>
            <option value="Healthcare Cleaning">Healthcare Cleaning</option>
            <option value="School Cleaning">School Cleaning</option>
            <option value="Strata Cleaning">Strata Cleaning</option>
            <option value="Real estate and Construction Cleaning">Real estate and Construction Cleaning</option>
            <option value="HouseKeeping">HouseKeeping</option>
            <option value="Others">Others</option>
          </select>
          <p style={{ color: 'red' }}>{formErrors.cleaning}</p>
        </label>
        <br />

        <label className="formBooking">
          Description of the computers Problem : <br />
          <textarea
            rows="5"
            cols="50"
            width="2400px"
            name="description"
            value={state.description}
            onChange={handleChange}
          />
          <p style={{ color: 'red' }}>{formErrors.description}</p>
        </label>
        <br />
        <Button
          type="submit"
          value="Send"
          className="formButton"
        >
          Book In{' '}
        </Button>
      </form>
    </div>
  );
      }
