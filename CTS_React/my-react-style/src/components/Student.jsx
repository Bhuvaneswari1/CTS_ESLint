import React from 'react'

const Student = (props) => {
  return (
    <div>
        <p>FirstName: {props.firstName}</p>
        <p>LastName: {props.lastName}</p>
        <p>Contact: {props.contact}</p>
        {/* <p>Email: {props.email}</p> */}
    </div>
  )
}

export default Student