import "./tables.css";
import React, { useState, useEffect } from "react";

const StudentsTable = ({ dataFetched }) => {
  const [students, setStudents] = useState([]); // Initialize students as an empty array

  // async function deleteStudent(index) {
  //   const studentToDelete = students[index];
  //   console.log("Student to delete: ", studentToDelete.id);
  //   try {
  //     const response = await fetch(`http://localhost:3000/students/${studentToDelete.id}`, {
  //       method: "DELETE",
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to delete student");
  //     }

  //     const updatedStudents = students.filter((student, i) => i !== index);
  //     setStudents(updatedStudents);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

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
          {/* <th>Delete</th> */}
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{student.firstName}</td>
            <td>{student.familyName}</td>
            <td>{student.DOB}</td>
            {/* <td>
              <button onClick={() => deleteStudent(index)}>Delete</button>
            </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentsTable;
