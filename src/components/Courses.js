import "./Students.css"
import CoursesTable from "./CoursesTable";
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Courses = () => {


  return (
    <div>
      <h2>Courses</h2>
      <ToastContainer position="top-right" autoClose={1500} />
      <form onSubmit={handleSubmit}>
        <label>
          Course Name:
          <input type="text" value={courseNameValue} onChange={handleCourseNameChange} />
        </label>
        <button type="submit">Submit</button>
      </form>

      <CoursesTable dataFetched={dataFetched} />
    </div>
  );
}

export default Courses;


// return (
//   <div>
//     <h2>Students</h2>
//     <ToastContainer position="top-right" autoClose={1500}/>
//     <form onSubmit={handleSubmit}>
//       <label>
//         First Name:
//         <input type="text" value={FirstNameValue} onChange={handleFirstNameChange} />
//       </label>
//       <label>
//         Family Name:
//         <input type="text" value={FamilyNameValue} onChange={handleFamilyNameChange} />
//       </label>
//       <label>
//         Date of Birth:
//         <input type="date" value={dateValue} onChange={handleDateChange} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>

//     <StudentsTable dataFetched={dataFetched} />
//   </div>
// );
// };