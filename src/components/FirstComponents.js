import React from 'react'

const First = ({title,name,age,subject,location,isStudent}) => {
  return (
    <div>
        <h1>I am first component</h1>
        <h2>{title}</h2>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <h2>{subject}</h2>
        {isStudent===true ?<button type="button">I am first</button>: 'none' }
        {subject.map(item => <li>{item}</li>)}
        <h3>Location : {location.city} and {location.country}</h3>
    </div>
  )
}
const Second = () => {
    return (
    <div><h1>Hello</h1></div>
)}
export {First, Second}
// export default First