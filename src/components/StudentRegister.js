import React, { useState, useRef } from "react";

const Register = ({ batch, faculty, college, students }) => {
  const [entry, setEntry] = useState(students);
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [address, setAddress] = useState("");

  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const addressRef = useRef(null);

  const handlePressEnterAtName = (e) => {
    if (e.key === "Enter") {
      ageRef.current.focus();
    }
  };

  const handlePressEnterAtAge = (e) => {
    if (e.key === "Enter") {
      addressRef.current.focus();
    }
  };

  const handlePressEnterAtAddress = (e) => {
    if (e.key === "Enter") {
      setEntry([
        ...entry,
        {
          id: entry.length + 1,
          name: name,
          age: age,
          address: address,
        },
      ]);
      nameRef.current.focus();
    }
    setName("");
    setAge("");
    setAddress("");
  };

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
      <form action="">
        <input
          onKeyUp={handlePressEnterAtName}
          value={name}
          ref={nameRef}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
        />
        <input
          onKeyUp={handlePressEnterAtAge}
          value={age}
          ref={ageRef}
          onChange={(e) => {
            setAge(e.target.value);
          }}
          type="date"
        />
        <input
          onKeyUp={handlePressEnterAtAddress}
          value={address}
          ref={addressRef}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          type="text"
        />
      </form>
      <button
        onClick={() => {
          setEntry([
            ...entry,
            {
              id: entry.length + 1,
              name: name,
              age: age,
              address: address,
            },
          ]);
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          setEntry([]);
          setName("");
          setAge("");
          setAddress("");
        }}
      >
        Clear all
      </button>

      <div>
        <form action="">
          <h3>Input Types</h3>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <input
            type="checkbox"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <input
            type="color"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <input
            type="date"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <input
            type="datetime-local"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <input
            type="email"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <input
            type="file"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <input
            type="hidden"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <input
            type="month"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <input
            type="number"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <input
            type="password"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <input
            type="radio"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <input
            type="range"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <input
            type="reset"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <input
            type="search"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <input
            type="submit"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <input
            type="tel"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <input
            type="time"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
