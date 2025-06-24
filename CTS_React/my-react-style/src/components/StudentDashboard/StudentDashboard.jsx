import React, { useState, useEffect, useRef } from 'react';
import StudentCard from './StudentCard';

const StudentDashboard = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice", email: "alice@mail.com", contact: "9876543210", present: false },
    { id: 2, name: "Bob", email: "bob@mail.com", contact: "8765432109", present: false },
    { id: 3, name: "Charlie", email: "charlie@mail.com", contact: "7654321098", present: false },
  ]);

  const [lastMarked, setLastMarked] = useState('');
  const inputRef = useRef(null);

  // useEffect for lifecycle - simulates auto-refresh
  useEffect(() => {
    console.log("📢 Dashboard mounted");

    const interval = setInterval(() => {
      console.log("🔄 Checking attendance status...");
    }, 5000);

    return () => {
      console.log("🧹 Cleaning up interval");
      clearInterval(interval);
    };
  }, []);

  const handleMarkPresent = (id) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === id ? { ...student, present: true } : student
      )
    );
    const name = students.find(s => s.id === id)?.name;
    const timestamp = new Date().toLocaleTimeString();
    setLastMarked(`${name} marked present at ${timestamp}`);
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🎓 Student Dashboard</h2>

      {students.map(student => (
        <StudentCard key={student.id} student={student} onMarkPresent={handleMarkPresent} />
      ))}

      <input
        ref={inputRef}
        value={lastMarked}
        readOnly
        style={{ width: '100%', marginTop: '20px', fontWeight: 'bold', padding: '10px' }}
      />
    </div>
  );
};

export default StudentDashboard;
