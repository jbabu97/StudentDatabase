
class Student {
    constructor(name, id, subject, cgpa){
        this.name = name;
        this.id = id;
        this.subject = subject;
        this.cgpa = cgpa;

    };
};


const students = [];
console.log(students);

function addStudent(name, id, subject, cgpa){
    const student = new Student(name, id, subject, cgpa);
    students.push(student);
}

function deleteStudent(index){
    students.splice(index, 1);
    displayStudent()
}

const studentForm = document.getElementById('student_form');
studentForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const id = document.getElementById('id').value;
    const cgpa = document.getElementById('cgpa').value;
    console.log(name, id, cgpa, subject);
    addStudent(name, id, subject, cgpa);
    displayStudent()

    studentForm.reset();
});

function displayStudent(){
    const displayData = document.getElementById('table_body');

students.map((data, index) => {
    const studentData = document.createElement('tr');
    studentData.innerHTML = `
    <td>${data.name}</td>
    <td>${data.id}</td>
    <td>${data.subject}</td>
    <td>${data.cgpa}</td>
    <button onclick="deleteStudent(${index})">Del</button>
    `

    displayData.appendChild(studentData);
})

};








// function Student(name, id, subject, cgpa){
//     this.name = name;
//     this.id = id;
//     this.subject = subject;
//     this.cgpa = cgpa
// }

// const studentList = [];


// function addStudent(){
//     const name = document.getElementById('name').value;
//     const id = document.getElementById('id').value;
//     const subject = document.getElementById('subject').value;
//     const cgpa = document.getElementById('cgpa').value;

//     const student = new Student(name, id, subject, cgpa);

//     studentList.push(student);

//     displayStudent(student);

//     document.getElementById('student_form').reset();
// };

// function displayStudent(student){
//     const displayData =document.getElementById('dataDisplay')
//     displayData.innerHTML = `
//     <h2>Name: ${student.name}</h2>
//     <p>Subject: ${student.subject}</p>
//     <p>Student Id: ${student.id}</p>
//     <p>CGPA: ${student.cgpa}</p>
//     `
//     // studentList.map(student => {
//     //     console.log(student);
//     //     const studentInfo= document.createElement('div');
//     //     displayData.appendChild(studentInfo);
//     //     const sName = document.createElement('h1');
//     //     sName.innerText = student.name;
//     //     studentInfo.appendChild(sName)
//     // })
// }