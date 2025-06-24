import React from 'react';

const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
