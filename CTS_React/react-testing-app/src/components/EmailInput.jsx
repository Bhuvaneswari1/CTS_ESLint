import React, { useState } from 'react';

const EmailInput = () => {
  const [email, setEmail] = useState('');

  return (
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your email"
    />
  );
};

export default EmailInput;
