import "./Students.css";
import StudentsTable from "./StudentsTable";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Students = () => {
  const [FirstNameValue, setFirstNameValue] = useState("");
  const [FamilyNameValue, setFamilyNameValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [dataFetched, setDataFetched] = useState(0);

  const handleFirstNameChange = (e) => {
    setFirstNameValue(e.target.value);
  };

  const handleFamilyNameChange = (e) => {
    setFamilyNameValue(e.target.value);
  };

  const handleDateChange = (e) => {
    setDateValue(e.target.value);
  };

  async function addStudent(firstName, familyName, DOB) {
    console.log("Calling addStudent");
    console.log("Date of birth value: ", DOB);
    const jsonData = JSON.stringify({ firstName, familyName, DOB });

    try {
      console.log("Sending POST request to http://localhost:3000/students");
      const response = await fetch("http://localhost:3000/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: jsonData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("POST request successful, received response: ", data);
      console.log("Calling fetchStudentData");
      await fetchStudentData();
      toast.success("Student added successfully!");
    } catch (error) {
      console.error("Error in addStudent: ", error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation check for other fields
    if (!FirstNameValue || !FamilyNameValue || !dateValue) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    // Check if the inputted date is at least 10 years in the past
    const currentDate = new Date();
    const minDate = new Date(
      currentDate.getFullYear() - 10,
      currentDate.getMonth(),
      currentDate.getDate()
    );

    const inputDateObject = new Date(dateValue);

    // doesn't actually run since date's auto correct themsleves
    if (inputDateObject.getMonth() + 1 > 12 || inputDateObject.getDate() > 31) {
      toast.error("The submitted date is invalid.");
      return;
    }

    // Check if the month is not over 12 and the day is not over 31
    if (inputDateObject < minDate) {
      // Perform any actions with the input values as needed
      console.log("Submitted:", { FirstNameValue, FamilyNameValue, dateValue });

      // Clear the input fields
      setFirstNameValue("");
      setFamilyNameValue("");
      setDateValue("");
      addStudent(FirstNameValue, FamilyNameValue, dateValue);
    } else {
      toast.warning("The submitted date must be at least 10 years in the past");
    }
  };

  const fetchStudentData = async () => {
    console.log("Calling fetchStudentData");
    try {
      const response = await fetch("http://localhost:3000/students");
      const students = await response.json();

      setDataFetched(dataFetched + 1);

      console.log(students);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ marginLeft: "300px" }}>
      <h2>Students</h2>
      <ToastContainer position="top-right" autoClose={1500} />
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={FirstNameValue}
            onChange={handleFirstNameChange}
          />
        </label>
        <label>
          Family Name:
          <input
            type="text"
            value={FamilyNameValue}
            onChange={handleFamilyNameChange}
          />
        </label>
        <label>
          Date of Birth:
          <input type="date" value={dateValue} onChange={handleDateChange} />
        </label>
        <button type="submit">Submit</button>
      </form>

      <StudentsTable dataFetched={dataFetched} />
    </div>
  );
};

export default Students;
