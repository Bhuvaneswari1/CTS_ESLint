import React from 'react';

const EmailValidator = ({ email }) => {
  const isValid = email.includes('@');
  return <p>{isValid ? 'Valid Email' : 'Invalid Email'}</p>;
};

export default EmailValidator;
