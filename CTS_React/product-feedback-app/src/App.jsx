import {Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import Product from './components/Product'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import { useState } from 'react'

function App() {
  const [feedbacks, setFeedbacks] = useState([])

  const addFeedback = (feedback) =>{
    setFeedbacks((prev => [...prev, feedback]))
  }

  return (
    <div className='container-fluid mt-3 px-3'>
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark w-100'>
      <Link to='/' className='navbar-brand'>FeedbackApp</Link>
      <ul className='navbar-nav ms-auto'>
        <li className='nav-item'><Link className='nav-link' to='/'>Home</Link></li>
        <li className='nav-item'><Link className='nav-link' to='/product'>Product</Link></li>
        <li className='nav-item'><Link className='nav-link' to='/feedback'>Add Feedback</Link></li>
        <li className='nav-item'><Link className='nav-link' to='/feedback-all'>Feedback List</Link></li>
      </ul>

    </nav>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/feedback' element={<FeedbackForm addFeedback={addFeedback} />} />
      <Route path='/feedback-all' element={<FeedbackList feedbacks={feedbacks} />} />
     </Routes>
    </div>
  )
}

export default App
