import React, { useState } from 'react'

const SkillsForm = () => {
    const [skills, setSkills] = useState([])

    const handleChange = (e) =>{
        const value=e.target.value;
        //setSkills(prev=>[...prev,value])
        setSkills(prev =>
            prev.includes(value)
            ?prev.filter(skill=>skill!==value)
            :[...prev,value]
        )

    }
  return (
    <div>
        <form>
            <label>Select Skills: </label>
            <input type='checkbox' value='React' onChange={handleChange} />React
            <input type='checkbox' value='Node' onChange={handleChange} />Node
            <input type='checkbox' value='MongoDB' onChange={handleChange} />MongoDB
            <p>Select Skills: {skills}</p>
        </form>
    </div>
  )
}

export default SkillsForm