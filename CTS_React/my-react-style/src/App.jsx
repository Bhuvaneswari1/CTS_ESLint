import './App.css'
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent'
import Third from './components/Third'
import Fourth from './components/Fourth'
import Fifth from './components/Fifth'
import Sixth from './components/Sixth'
import ClassComp from './components/ClassComp'
import DisplayBlock from './components/displayBlock'
import Student from './components/Student'
import NestedComp from './components/NestedComp'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Header from './components/lifecycle/Constructor'
import Derived from './components/lifecycle/Derived'
import ComponentUpdate from './components/lifecycle/ComponentUpdate'
import Container from './components/lifecycle/Container'
import Example1 from './components/Hooks/Example1'
import Example2 from './components/Hooks/Example2'
import Example3 from './components/Hooks/Example3'
import Timer from './components/Hooks/Timer'
import StudentDashboard from './components/StudentDashboard/StudentDashboard'

function App() {
 
  return (
    <>
      {/* <FirstComponent />
      <SecondComponent />
      <Third />
      <Fourth />
      <Fifth /> */}
      {/* <Sixth />
      <ClassComp />
      <DisplayBlock />
      <Student 
      firstName = "John"
      lastName = 'Doe'
      email = 'johndoe@example.com' />
      <NestedComp /> */}

      {/* <LoginForm /> 
      <RegisterForm />
      <Header />
      <Derived favcol='yellow'/>
      <ComponentUpdate />
      <Container />
      <Example1 />
      <Example2 />
      <Example3 />
      <Timer />*/}
      <StudentDashboard />
    </>
  )
}

export default App
