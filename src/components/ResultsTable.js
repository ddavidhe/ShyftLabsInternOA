import React, { useState, useEffect } from 'react';

const ResultsTable = ({ dataFetched }) => {
  const [results, setResults] = useState([]); // Initialize students as an empty array

  useEffect(() => {
    // Fetch students when the component mounts
    const fetchResults = async () => {
      const response = await fetch('http://localhost:3000/results');
      const results = await response.json();
      setResults(results);
    };

    fetchResults();
  }, [dataFetched]); // Empty dependency array means this effect runs once on mount

  return (
    <table>
      <thead>
        <tr>
          <th>Course Name</th>
          <th>Student Name</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {results.map((results, index) => (
          <tr key={index}>
            <td>{results.courseName}</td>
            <td>{results.studentName}</td>
            <td>{results.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;