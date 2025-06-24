import {Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  
  return (
    <>
      <nav><h3>
        <Link to='/'>Home</Link>&nbsp;
        <Link to='/about'>About</Link>&nbsp;
        <Link to='/contact'>Contact</Link>&nbsp;
        </h3>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
    </>
  )
}

export default App
