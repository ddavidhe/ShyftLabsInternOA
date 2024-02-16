import "./Students.css"
import React, { useState } from 'react';

const Students = () => {
  const [FirstNameValue, setFirstNameValue] = useState('');
  const [FamilyNameValue, setFamilyNameValue] = useState('');
  const [dateValue, setDateValue] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstNameValue(e.target.value);
  };

  const handleFamilyNameChange = (e) => {
    setFamilyNameValue(e.target.value);
  };

  const handleDateChange = (e) => {
    setDateValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation check for other fields
    if (!FirstNameValue || !FamilyNameValue || !dateValue) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    // Check if the inputted date is at least 10 years in the past
    const currentDate = new Date();
    const minDate = new Date(currentDate.getFullYear() - 10, currentDate.getMonth(), currentDate.getDate());

    const inputDateObject = new Date(dateValue);

    // doesn't actually run since date's auto correct themsleves
    if ((inputDateObject.getMonth() + 1 > 12) || (inputDateObject.getDate() > 31)) {
      alert('dates are invalid');
      return;
    }

    // Check if the month is not over 12 and the day is not over 31
    if ( inputDateObject < minDate) {
      // Perform any actions with the input values as needed
      console.log('Submitted:', { FirstNameValue, FamilyNameValue, dateValue });

      // Clear the input fields
      setFirstNameValue('');
      setFamilyNameValue('');
      setDateValue('');
    } else {
      alert('The submitted date must be at least 10 years in the past');
    }
  };

  return (
    <div>
      <h2>Students</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={FirstNameValue} onChange={handleFirstNameChange} />
        </label>
        <label>
          Family Name:
          <input type="text" value={FamilyNameValue} onChange={handleFamilyNameChange} />
        </label>
        <label>
          Date of Birth:
          <input type="date" value={dateValue} onChange={handleDateChange} />
        </label>
        <button type="submit">Submit</button>
      </form>

      {/* Displaying the input values (optional) */}
      <p>First Name Value: {FirstNameValue}</p>
      <p>Family Name Value: {FamilyNameValue}</p>
      <p>Date Value: {dateValue}</p>
      <script src="indux.js"></script>
    </div>
  );
};

export default Students;
