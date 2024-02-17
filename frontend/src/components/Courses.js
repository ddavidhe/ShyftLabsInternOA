import "./tables.css";
import CoursesTable from "./CoursesTable";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Courses = () => {
  const [courseNameValue, setCourseNameValue] = useState("");
  const [dataFetched, setDataFetched] = useState(0);

  const handleCourseNameChange = (e) => {
    setCourseNameValue(e.target.value);
  };

  async function addCourse(courseName) {
    const jsonData = JSON.stringify({ courseName });

    try {
      const response = await fetch("http://localhost:3000/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: jsonData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await fetchCourseData();
      toast.success("Course added successfully!");
    } catch (error) {
      console.error("Error in addCourse: ", error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!courseNameValue) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    addCourse(courseNameValue);
    setCourseNameValue("");
  };

  const fetchCourseData = async () => {
    console.log("Calling fetchCourseData");
    try {
      const response = await fetch("http://localhost:3000/courses");
      const courses = await response.json();

      setDataFetched(dataFetched + 1);
      console.log(courses);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ marginLeft: "300px" }}>
      <h2>Courses</h2>
      <ToastContainer position="top-right" autoClose={1500} />
      <form onSubmit={handleSubmit}>
        <label>
          Course Name:
          <input
            type="text"
            value={courseNameValue}
            onChange={handleCourseNameChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <CoursesTable dataFetched={dataFetched} />
    </div>
  );
};

export default Courses;
