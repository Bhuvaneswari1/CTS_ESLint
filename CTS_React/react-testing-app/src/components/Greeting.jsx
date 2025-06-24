import React from 'react';

const Greeting = ({ isLoggedIn }) => {
  return <h1>{isLoggedIn ? 'Welcome' : 'Please Login'}</h1>;
};

export default Greeting;
