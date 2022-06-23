import React, { useState } from "react";

const Register = ({ batch, faculty, college, students }) => {
  const [entry, setEntry] = useState(students);
  return (
    <div>
      <h1>Register</h1>
      <h2>Batch : {batch}</h2>
      <h2>Faculty : {faculty}</h2>
      <h2>College : {college}</h2>
      <h2>Students : </h2>
      {entry.map((student) => (
        <div key={student.id}>
          {student.id} {student.name} {student.age} {student.address}
        </div>
      ))}

      <button
        onClick={() => {
          setEntry([
            ...entry,
            {
              id: entry.length + 1,
              name: "John Doe",
              age: 22,
              address: "New York",
            },
          ]);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          setEntry([]);
        }}
      >
        Clear all
      </button>
    </div>
  );
};

export default Register;
