import React, { useState } from 'react'

const NameForm = () => {
    const [name, setName] = useState('')

    const handleChange = (e) =>setName(e.target.value);

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`Name submitted: ${name}`)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name: </label>
            <input type='text' value={name} onChange={handleChange} />
            <br /><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default NameForm