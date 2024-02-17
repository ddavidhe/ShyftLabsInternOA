import "./tables.css";
import React, { useState, useEffect } from "react";

const StudentsTable = ({ dataFetched }) => {
  const [students, setStudents] = useState([]); // Initialize students as an empty array

  useEffect(() => {
    // Fetch students when the component mounts
    const fetchStudents = async () => {
      const response = await fetch("http://localhost:3000/students");
      const students = await response.json();
      setStudents(students);
    };

    fetchStudents();
  }, [dataFetched]); // Empty dependency array means this effect runs once on mount

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Family Name</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{student.firstName}</td>
            <td>{student.familyName}</td>
            <td>{student.DOB}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentsTable;
