
import './App.css'
import { sum } from './components/sum'
import { greet } from './components/greet'
import Button from './components/Button'
import EmailInput from './components/EmailInput'
import EmailValidator from './components/EmailValidator'
import Greeting from './components/Greeting'


function App() {
  

  return (
    <>
      <sum />
      <greet />
      <Button />
      <Counter />
      <Form />
      <EmailInput />
      <EmailValidator />
      <Greeting />
      
    </>
  )
}

export default App
