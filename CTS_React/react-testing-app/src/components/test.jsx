// test.jimport React from 'react';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
//import Button from './Button.jsx';
//import Counter from './Counter.jsx';
//import Form from './Form.jsx';
//import EmailInput from './EmailInput.jsx';
//import EmailValidator from './EmailValidator.jsx';
//import Greeting from './Greeting.jsx';
import Welcome from './Welcome.jsx'; 

// 1. Unit Testing - Sum function
const sum = (a, b) => a + b;
test('1. sum adds numbers', () => {
  expect(sum(2, 3)).toBe(5);
});

// 2. Unit Testing - Greeting function
const greet = (name) => `Hello, ${name}`;
test('2. greet returns correct string', () => {
  expect(greet('Alice')).toBe('Hello, Alice');
});

// 3. Component Testing - Simple Button
const Button = ({ label }) => <button>{label}</button>;
test('3. renders Button with label', () => {
  render(<Button label="Click Me" />);
  expect(screen.getByText('Click Me')).toBeInTheDocument();
});

// 4. Component Testing - Conditional Rendering
const Greeting = ({ isLoggedIn }) => <h1>{isLoggedIn ? 'Welcome' : 'Please Login'}</h1>;
test('4. shows correct greeting', () => {
  render(<Greeting isLoggedIn={false} />);
  expect(screen.getByText('Please Login')).toBeInTheDocument();
});

// 5. Form Input Test
const EmailInput = () => {
  const [email, setEmail] = React.useState('');
  return <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />;
};
test('5. updates email on input', () => {
  render(<EmailInput />);
  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'test@example.com' } });
  expect(input.value).toBe('test@example.com');
});

// 6. Form Validation Message
const EmailValidator = ({ email }) => {
  const isValid = email.includes('@');
  return <p>{isValid ? 'Valid Email' : 'Invalid Email'}</p>;
};
test('6. validates email format', () => {
  render(<EmailValidator email="abc@xyz.com" />);
  expect(screen.getByText('Valid Email')).toBeInTheDocument();
});

// 7. Form Submit
const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={e => { e.preventDefault(); onSubmit(); }}>
      <button type="submit">Submit</button>
    </form>
  );
};
test('7. calls submit handler', () => {
  const mockSubmit = jest.fn();
  render(<Form onSubmit={mockSubmit} />);
  fireEvent.click(screen.getByText('Submit'));
  expect(mockSubmit).toHaveBeenCalled();
});

// 8. Event Handler Testing
const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};
test('8. increments counter', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText('Increment'));
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});

// 9. Mock API Call
const fetchData = async () => {
  const res = await fetch('/api/data');
  return res.json();
};
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve({ message: 'Hello' }) })
);
test('9. fetches data from API', async () => {
  const data = await fetchData();
  expect(data.message).toBe('Hello');
});

// 10. DOM Rendering Check
test('10. renders welcome message', () => {
  render(<Welcome />);
  expect(screen.getByText('Welcome to React Testing')).toBeInTheDocument();
});
