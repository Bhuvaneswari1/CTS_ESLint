import React, { useState } from 'react'

const FeedbackForm = ({addFeedback}) => {
    const [form, setForm] = useState({
        name:'',
        product:'',
        rating:'',
        comment:''
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) =>{
        const {name, value} = e.target
        setForm((prev)=>({...prev, [name]:value}))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!form.name || !form.product || !form.rating){
            alert('Please fill all required fields')
            return;
        }
        addFeedback(form);
        setSubmitted(true)
        setForm({name:'',product:'',rating:'',comment:''})
    }
  return (
    <div className='mt-4'>
        <h4>Submit Feedback</h4>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <input className='form-control' name='name' 
                placeholder='Your name' value={form.name} onChange={handleChange} required/>
            </div>
            <div className='mb-3'>
                <input className='form-control' name='product' 
                placeholder='Product name' value={form.product} onChange={handleChange} required/>
            </div>
            <div className='mb-3'>
                <select className='form-select' name='rating' value={form.rating} onChange={handleChange} required>
                    <option value=''>Select Rating</option>
                    <option value='5'>Excellent</option>
                    <option value='4'>Very Good</option>
                    <option value='3'>Good</option>
                    <option value='2'>Fair</option>
                    <option value='1'>Poor</option>
                </select>
            </div>
            <div className='mb-3'>
                <textarea className="form-control" name="comment" 
                placeholder="Any comments?" value={form.comment} onChange={handleChange} />
            </div>

            <button className='btn btn-primary'>Submit</button>
        </form>
        {submitted && <div className='text-success mt-3'>✅ Feedback Submitted.</div>}
    </div>
  )
}

export default FeedbackForm