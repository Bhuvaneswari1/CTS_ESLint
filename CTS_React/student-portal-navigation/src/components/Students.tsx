const Students = () => {
    const studentList = [
        {id:1, name:'Alice', dept:'CSE'},
        {id:2, name:'Bob', dept:'ECE'},
        {id:3, name:'Charlie', dept:'IT'},
        {id:4, name:'James', dept:'EEE'},
        {id:5, name:'Nancy', dept:'Mech'}
    ]
  return (
    <div>
        <h2>Student List</h2>
        <table className="table table-bordered">
            <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Department</th>
                </tr>
            </thead>
            <tbody>
                {studentList.map(s=>(
                    <tr key={s.id}>
                        <td>{s.id}</td>
                        <td>{s.name}</td>
                        <td>{s.dept}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
export default Students