import {Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import NameForm from './components/NameForm'
import LoginForm from './components/LoginForm'
import GenderForm from './components/GenderForm'
import SkillsForm from './components/SkillsForm'

function App() {
  
  return (
    <>
    <nav>
      <Link to='/'>Home</Link>&nbsp;
      <Link to='/name'>NameForm</Link>&nbsp;
      <Link to='/login'>Login</Link>&nbsp;
      <Link to='/gender'>Gender</Link>&nbsp;
      <Link to='/skills'>Skills</Link>&nbsp;

    </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/name' element={<NameForm />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/gender' element={<GenderForm />} />
        <Route path='/skills' element={<SkillsForm />} />
      </Routes>
    </>
  )
}

export default App
