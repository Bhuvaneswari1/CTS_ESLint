import React, { useState } from "react"

interface Student{
    name:string,
    dept:string
}

const AddStudent = () => {
    const [student,setStudent] = useState<Student>({
        name:'',
        dept:''
    })

    const handleChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = e.target;
        setStudent(prev => ({...prev, [name]:value}))
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        alert(`Student Added: ${student.name} - ${student.dept}`)
        setStudent({name:'',dept:''})
    }
  return (
    <div>
        <h2>Add New Student</h2>
        <form className="w-50" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Student Name</label>
                <input type='text' className="form-control"
                name='name' value={student.name} onChange={handleChange}
                required />
            </div>
            <div className="mb-3">
                <label className="form-label">Department</label>
                <input type='text' className="form-control"
                name='dept' value={student.dept} onChange={handleChange}
                required />
            </div>
            <button type='submit' className="btn btn-primary">Add Student</button>
        </form>
    </div>
  )
}

export default AddStudent