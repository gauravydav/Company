import React, { useState } from "react";
import "./Student.css";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const Student = () => {
  const initialStudent = {
    id: null,
    name: "",
    grade: "",
  };

  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", grade: "A", roll: "18" },
    { id: 2, name: "Alice Smith", grade: "B", roll: "18" },
    { id: 3, name: "Bob Johnson", grade: "C" },
  ]);

  const [currentStudent, setCurrentStudent] = useState(initialStudent);
  const [editing, setEditing] = useState(false);
  const [showCreateStudentForm, setShowCreateStudentForm] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentStudent({ ...currentStudent, [name]: value });
  };

  const addStudent = () => {
    setStudents([...students, { ...currentStudent, id: students.length + 1 }]);
    setCurrentStudent(initialStudent);
    setShowCreateStudentForm(false); // Close the form after adding
  };

  const editStudent = (student) => {
    setEditing(true);
    setCurrentStudent(student);
    setShowCreateStudentForm(true); // Open the form for editing
  };

  const updateStudent = () => {
    setStudents(
      students.map((student) =>
        student.id === currentStudent.id ? currentStudent : student
      )
    );
    setEditing(false);
    setCurrentStudent(initialStudent);
    setShowCreateStudentForm(false); // Close the form after updating
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const openCreateStudentForm = () => {
    setShowCreateStudentForm(true);
  };

  return (
    <div>
      <h1 className="header_student">
        <div className="left-end">Student Page</div>
        <div className="right-end">
          <button
            className="create-student-button"
            onClick={() => openCreateStudentForm()}
          >
            <FaPlus />
          </button>
        </div>
      </h1>
      <div className="student-list">
        {students.map((student) => (
          <div key={student.id} className="student-card">
            <h3>{student.name}</h3>
            <p>Grade: {student.grade}</p>
            <div className="actions">
              <button
                className="edit-button"
                onClick={() => editStudent(student)}
              >
                <FaEdit />
              </button>
              <button
                className="delete-button"
                onClick={() => deleteStudent(student.id)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        className="create-student-form-popup"
        style={{
          display: showCreateStudentForm ? "block" : "none",
        }}
      >
        <div className="popup-content">
          <h2>{editing ? "Edit Student" : "Create Student"}</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={currentStudent.name}
            onChange={handleInputChange}
          />
            <br />
          <input
            type="text"
            name="grade"
            placeholder="Grade"
            value={currentStudent.grade}
            onChange={handleInputChange}
          />
          <br /> 
          <button
            onClick={editing ? updateStudent : addStudent}
          >
            {editing ? "Update" : "Add"}
          </button>
          <button onClick={() => setShowCreateStudentForm(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Student;
