import {Routes,Route, Link} from 'react-router-dom'
import Home from './components/Home'
import Students from './components/Students'
import AddStudent from './components/AddStudent'
import NotFound from './components/NotFound'

function App() {
  return (
    <>
      <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark px-4'>
        <Link className='navbar-brand' to='/'>StudentPortal</Link>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/students'>Students</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/add'>Add</Link>
            </li>
          </ul>
        </div>

      </nav>
      
        <div className='container mt-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/students' element={<Students />} />
            <Route path='/add' element={<AddStudent />} />
            <Route path='*' element={<NotFound message="Sorry, the page you're looking for doesn't exist"/>} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
