import React, { useState, useEffect } from "react";
import "./Teacher.css"; // Create a Teacher.css file for teacher-specific styles
import axios from 'axios';

const Teacher = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    // Define a function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/teachers/");
        setTeachers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // The empty array as the second argument makes it run only once on mount
  console.log(teachers)

  const initialTeacher = {
    id: null,
    name: "",
    subject: "",
  };

  const [currentTeacher, setCurrentTeacher] = useState(initialTeacher);
  const [editing, setEditing] = useState(false);
  const [showCreateTeacherForm, setShowCreateTeacherForm] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentTeacher({ ...currentTeacher, [name]: value });
  };

  const addTeacher = () => {
    setTeachers([...teachers, { ...currentTeacher, id: teachers.length + 1 }]);
    setCurrentTeacher(initialTeacher);
    setShowCreateTeacherForm(false); // Close the form after adding
  };

  const editTeacher = (teacher) => {
    setEditing(true);
    setCurrentTeacher(teacher);
    setShowCreateTeacherForm(true); // Open the form for editing
  };

  const updateTeacher = () => {
    setTeachers(
      teachers.map((teacher) =>
        teacher.id === currentTeacher.id ? currentTeacher : teacher
      )
    );
    setEditing(false);
    setCurrentTeacher(initialTeacher);
    setShowCreateTeacherForm(false); // Close the form after updating
  };

  const deleteTeacher = (id) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== id));
  };

  const openCreateTeacherForm = () => {
    setShowCreateTeacherForm(true);
  };

  return (
    <div>
      <h1 className="header">
        <div className="left-end">Teacher Page</div>
        <div className="right-end">
          <button
            className="create-teacher-button"
            onClick={() => openCreateTeacherForm()}
          >
            Add Teacher
          </button>
        </div>
      </h1>
      <div className="teacher-list">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="teacher-card">
            <h3>{teacher.name}</h3>
            <p>Subject: {teacher.subject}</p>
            <div className="actions">
              <button
                className="edit-button"
                onClick={() => editTeacher(teacher)}
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => deleteTeacher(teacher.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        className="create-teacher-form-popup"
        style={{
          display: showCreateTeacherForm ? "block" : "none",
        }}
      >
        <div className="popup-content">
          <h2>{editing ? "Edit Teacher" : "Add Teacher"}</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={currentTeacher.name}
            onChange={handleInputChange}
          />
          <br />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={currentTeacher.subject}
            onChange={handleInputChange}
          />
          <br />
          <button onClick={editing ? updateTeacher : addTeacher}>
            {editing ? "Update" : "Add"}
          </button>
          <button onClick={() => setShowCreateTeacherForm(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
