import React,{useEffect} from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Outlet,
} from "react-router-dom";
import { FaUser, FaChalkboardTeacher, FaBook } from "react-icons/fa";
import Student from "./components/Student/Student";
import Teacher from "./components/Teacher/Teacher";
import Marks from "./components/Marks";
import "./App.css"; // Import your CSS file for styling
// import schoolLogo from './school-logo.png'; // Import your school logo
import { useDispatch } from "react-redux";
import { fetchTeachers } from './features/teachers/teachersSlice';



const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/004/297/596/small/education-logo-open-book-dictionary-textbook-or-notebook-with-sunrice-icon-modern-emblem-idea-concept-design-for-business-libraries-schools-universities-educational-courses-vector.jpg"
            alt="School Logo"
            className="school-logo"
          />
          <ul>
            <li>
              <Link to="/student">
                <FaUser />
                Student
              </Link>
            </li>
            <li>
              <Link to="/teacher">
                <FaChalkboardTeacher />
                Teacher
              </Link>
            </li>
            <li>
              <Link to="/marks">
                <FaBook />
                Marks
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/student" element={<Student />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/marks" element={<Marks />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
