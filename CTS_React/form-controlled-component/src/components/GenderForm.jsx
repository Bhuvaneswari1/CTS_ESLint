import React, { useState } from 'react'

const GenderForm = () => {
    const [gender, setGender] = useState('')
  return (
    <div>
        <form>
            <label>Select Gender:</label>
            <input type='radio' value='Male' checked = {gender === 'Male'}
            onChange = {()=>setGender('Male')} />Male
             <input type='radio' value='Female' checked = {gender === 'Female'}
            onChange = {()=>setGender('Female')} />Female
            <p>Selected: {gender}</p>
        </form>
    </div>
  )
}

export default GenderForm