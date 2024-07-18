import React, { useEffect, useState } from 'react';
import { formInputData } from '../../utils/formInputData';
import FormInput from '../../atoms/FormInput/FormInput';
import PageHeading from '../../atoms/PageHeading/PageHeading';
import './contactMePage.css';
import Button from '../../atoms/Button/Button';
import { useNavigate } from 'react-router-dom';

function ContactMePage() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, navigate]);

  return (
    <section className='contact-me-form'> 
      <PageHeading heading="Let's Talk"/>
      {isSubmitted ? (
        <h2 className='thank-you-message'>Thank you for submitting!</h2>
      ) : (
        <form className='contact-author' onSubmit={handleSubmit}>
          {formInputData.map((input, index) => (
            <FormInput 
              label={input.label} 
              type={input.type} 
              id={input.id} 
              required={input.required} 
              key={index}
            />
          ))}
          <Button label='Submit'/>
        </form>
      )}
    </section>
  );
}

export default ContactMePage;
