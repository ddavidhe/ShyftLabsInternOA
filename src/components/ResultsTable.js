import React, { useState, useEffect } from 'react';

const ResultsTable = ({ dataFetched }) => {
  const [results, setResults] = useState([]); // Initialize students as an empty array

  useEffect(() => {
    // Fetch students when the component mounts
    const fetchResults = async () => {
      const response = await fetch('http://localhost:3000/results');
      const courses = await response.json();
      setCourses(courses);
    };

    fetchCourses();
  }, [dataFetched]); // Empty dependency array means this effect runs once on mount

  return (
    <table>
      <thead>
        <tr>
          <th>Course Name</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((courses, index) => (
          <tr key={index}>
            <td>{courses.courseName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CoursesTable;