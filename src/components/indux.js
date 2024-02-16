function fetchData(){
    console.log("Calling fetchData")

    fetchStudentData()
    fetchCourseData()
}

function fetchStudentData() {
    console.log("Calling fetchStudentData")
    let tableBody = document.getElementById('student-table-body')
    tableBody.innerHTML = ''
    return fetch("http://localhost:3000/student")
        .then(response => response.json())
        .then(students => {
            students.forEach(student => {
                let tableRow = document.createElement('tr')
                const tableData = `
                <td>${student.firstName}</td>
                <td>${student.familyName}</td>
                <td>${student.DOB}</td>
                <td><button type="button" onclick="deleteStudent(event)" data-id="${student.id}">Delete</button></td>
                `
                tableRow.insertAdjacentHTML('beforeend', tableData)// append td to tr
                tableBody.appendChild(tableRow) // append tr to tbody
            });
            return students;
        })
        .then(data => console.log(data))
        .catch(err => {
            console.error(err)
        })
}

// Deleting the student
function deleteStudent(event) {
    console.log("Calling deleteStudent")
    event.preventDefault();
    const id = event.target.dataset.id;
    return fetch(`http://localhost:3000/student/${id}`, {method: 'DELETE'})
    .then(res=> fetchStudentData())
    .catch(err => {
        console.error(err)
    })
}

function addStudent(event) {
    console.log("Calling addStudent")
    const form = event.target
    const formData = new FormData(form)
    const formObj = Object.fromEntries(formData.entries());
    const json = JSON.stringify(formObj)

    return fetch('http://localhost:3000/student', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: json
    })
    .then(res => res.json())
    .then(res => {return fetchStudentData();})
    .then(data => {console.log("Success: ", data)})
    .catch(err => {
        console.error(err)
    })
}

function fetchCourseData() {
    console.log("Calling fetchCourseData")
    let tableBody = document.getElementById('course-table-body')
    return fetch("http://localhost:3000/courses")
        .then(response => response.json())
        .then(courses => {
            courses.forEach(course => {
                let tableRow = document.createElement('tr')
                const tableData = `
                <td>${course.courseName}</td>
                `
                tableRow.insertAdjacentHTML('beforeend', tableData)// append td to tr
                tableBody.appendChild(tableRow) // append tr to tbody
            });
            return courses;
        })
        .then(data => console.log(data))
        .catch(err => {
            console.error(err)
        })
}