import "./Results.css";
import ResultsTable from "./ResultsTable";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Results = () => {
  const [courseNameValue, setCourseNameValue] = useState("");
  const [studentNameValue, setStudentNameValue] = useState("");
  const [dataFetched, setDataFetched] = useState(0);

  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [scores, setScores] = useState("");

  const listScores = ["A", "B", "C", "D", "E", "F"];

  useEffect(() => {
    // Function to fetch students
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:3000/students");
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchStudents();
  }, []);

  useEffect(() => {
    // Function to fetch students
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:3000/courses");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCourses();
  }, []);

  async function addResult(courseName, studentName, score) {
    const jsonData = JSON.stringify({ courseName, studentName, score });

    try {
      const response = await fetch("http://localhost:3000/results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: jsonData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await fetchResultData();
      toast.success("Result added successfully!");
    } catch (error) {
      console.error("Error in addResult: ", error);
    }
  }

  const fetchResultData = async () => {
    try {
      const response = await fetch("http://localhost:3000/results");
      const results = await response.json();
      setDataFetched(dataFetched + 1);
      console.log(results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    if (!studentNameValue || !courseNameValue || !scores) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }
    addResult(courseNameValue, studentNameValue, scores);
  };

  return (
    <div style={{ marginLeft: "300px" }}>
      <h2>Results</h2>
      <ToastContainer position="top-right" autoClose={1500} />
      <form onSubmit={handleSubmit}>
        <div className="select-container">
          <label>
            Student:
            <select
              value={studentNameValue}
              onChange={(e) => setStudentNameValue(e.target.value)}
            >
              <option value="" disabled selected>
                Select your option
              </option>
              {students.map((student, index) => (
                <option key={index} value={student.firstName}>
                  {student.firstName}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="select-container">
          <label>
            Course:
            <select
              value={courseNameValue}
              onChange={(e) => setCourseNameValue(e.target.value)}
            >
              <option value="" disabled selected>
                Select your option
              </option>
              {courses.map((course, index) => (
                <option key={index} value={course.courseName}>
                  {course.courseName}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="select-container">
          <label>
            Score:
            <select value={scores} onChange={(e) => setScores(e.target.value)}>
              <option value="" disabled selected>
                Select your option
              </option>
              {listScores.map((score, index) => (
                <option key={index} value={score}>
                  {score}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      <ResultsTable dataFetched={dataFetched} />
    </div>
  );
};

export default Results;
