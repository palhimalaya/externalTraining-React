import React from 'react'


const Register = ({batch, faculty, college, students}) => {
  return (
    <div>
        <h1>Register</h1>
        <h2>Batch : {batch}</h2>
        <h2>Faculty : {faculty}</h2>
        <h2>College : {college}</h2>
        <h2>Students : </h2>
        {students.map(student =>  
        <div key={student.id}>{student.id}  {student.name}  {student.age}   {student.address}
        </div>)}
    </div>
  )
}

export default Register