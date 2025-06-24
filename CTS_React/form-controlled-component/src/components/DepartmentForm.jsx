
const DepartmentForm = () => {
    const [department, setDeparment] = useState('')
  return (
    <div>
        <form>
            <label>Select Department: </label><br />
            <select value={department} onChange={(e)=>setDeparment(e.target.value)}>
                <option value=''>--Select--</option>
                <option value='CSE'>CSE</option>
                <option value='ECE'>ECE</option>
                <option value='EEE'>EEE</option>
                <option value='Mech'>Mech</option>
                <option value='IT'>IT</option>
            </select>
            <p>Selected Department: {department}</p>
        </form>
    </div>
  )
}

export default DepartmentForm