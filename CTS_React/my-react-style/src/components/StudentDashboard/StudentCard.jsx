import React from 'react';

const StudentCard = ({ student, onMarkPresent }) => {
  return (
    <div style={{ border: '1px solid #aaa', padding: '10px', margin: '10px' }}>
      <h3>{student.name}</h3>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Contact:</strong> {student.contact}</p>
      <p><strong>Status:</strong> {student.present ? "✅ Present" : "❌ Absent"}</p>
      <button onClick={() => onMarkPresent(student.id)}>Mark Present</button>
    </div>
  );
};

export default StudentCard;
