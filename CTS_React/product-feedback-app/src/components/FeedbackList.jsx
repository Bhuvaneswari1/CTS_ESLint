import React from 'react'

const FeedbackList = ({feedbacks}) => {
  return (
    <div className='mt-4'>
        <h4>All Feedbacks</h4>
        {feedbacks.length === 0 ?(
            <p className='text-muted'>No Feedback submitted yet.</p>
        ):(
            <ul className='list-group'>
                {feedbacks.map((fb,index)=>(
                    <li key={index} className='list-group-item'>
                        <strong>{fb.name}</strong> rated <b>{fb.product}</b> as <b>{fb.rating}/5</b>
                        <br />
                        <span className='text-muted'>"{fb.comment}"</span>
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default FeedbackList