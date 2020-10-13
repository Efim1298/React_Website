import React from 'react';
import './Form2.css';

const FormSuccess2 = () => {
  return (
    <div className='form-content-right2'>
      <h1 className='form-success2'>We have received your request!</h1>
      <img className='form-img-2' src={require('../../images/img-3.svg')} aria-hidden alt='success-image' />
    </div>
  );
};

export default FormSuccess2;
