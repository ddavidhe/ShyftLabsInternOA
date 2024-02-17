import "./Students.css"
import ResultsTable from "./ResultsTable";
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Results = () => {
  const [courseNameValue, setCourseNameValue] = useState('');
  const [studentNameValue, setStudentNameValue] = useState('');
  const [dataFetched, setDataFetched] = useState(0);

  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [scores, setScores] = useState('');

  const listScores = ['A', 'B', 'C', 'D', 'E', 'F'];

  useEffect(() => {
    // Function to fetch students
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:3000/students');
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchStudents();
  }, []);

  useEffect(() => {
    // Function to fetch students
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:3000/courses');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Results</h2>
      <form>
        <label>
          Student:
          <select value={studentNameValue} onChange={e => setStudentNameValue(e.target.value)}>
            {students.map((student, index) => (
              <option key={index} value={student.firstName}>
                {student.firstName}
              </option>
            ))}
          </select>
        </label>
        <label>
          Course:
          <select value={courseNameValue} onChange={e => setCourseNameValue(e.target.value)}>
            {courses.map((course, index) => (
              <option key={index} value={course.courseName}>
                {course.courseName}
              </option>
            ))}
          </select>
        </label>
        <label>
          Score:
          <select value={scores} onChange={e => setScores(e.target.value)}>
            {listScores.map((score, index) => (
              <option key={index} value={score}>
                {score}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
}

export default Results;
