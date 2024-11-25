import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Help from "./pages/Help";
import Experience from "./pages/Experience";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Students from "./pages/Students";
import QandA from "./pages/QandA";
import Logout from "./pages/Logout";
import Mentor from "./pages/Mentors";
import NewCourses from "./pages/NewCourses";
import StudentDash from "./pages/StudentDash";
import StudentChat from "./pages/StudentChat";
import Progress from "./pages/Progress";
import Relaxation from "./pages/Relaxation";
import Completed from "./pages/Completed";
import StudentSettings from "./pages/StudentSettings";
import MentorDash from "./pages/MentorDash";
import NotFound from "./pages/NotFound"; 
import MentorCourses from "./pages/MentorCourses";
import MentorStudents from "./pages/MentorStudents";
import Feedback from "./pages/Feedback";

const App = () => {
  const userinfo =JSON.parse(localStorage.getItem("userinfo"))

  const getDashboardComponent = () => {
    if (!userinfo) return <Login />;
    switch (userinfo?.user_info?.role) {
      case "admin":
        return <Dashboard />;
      case "mentor":
        return <MentorDash />;
      case "student":
        return <StudentDash />;
      default:
        return <Login />;
    }
  };

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              background: "#4CAF50",
              color: "white",
            },
          },
          error: {
            style: {
              background: "#EF4444",
              color: "white",
            },
          },
          duration: 3000,
        }}
      />
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
          <Route path="/help" element={<Help />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/register" element={!userinfo ? <Register /> : getDashboardComponent()} />
          <Route path="/login" element={!userinfo ? <Login /> : getDashboardComponent()} />

          {/* Role-Based Routes */}
          <Route path="/admin-dashboard" element={userinfo?.user_info?.role === "admin" ? <Dashboard /> : <Login/>} />
          <Route path="/mentor-dashboard" element={userinfo?.user_info?.role === "mentor" ? <MentorDash /> : <Login/>} />
          <Route path="/student-dashboard" element={userinfo?.user_info?.role === "student" ? <StudentDash /> : <Login/>} />

          {/* Shared or Protected Routes */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/students" element={<Students />} />
          <Route path="/admin-questions" element={<QandA />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/mentors" element={<Mentor />} />
          <Route path="/new-courses" element={<NewCourses />} />
          <Route path="/student-chat" element={<StudentChat />} />
          <Route path="/progress-courses" element={<Progress />} />
          <Route path="/completed-courses" element={<Completed />} />
          <Route path="/gamming" element={<Relaxation />} />
          <Route path="/all-students" element={<MentorStudents />} />
          <Route path="/settings" element={<StudentSettings />} />
          <Route path="/mentor-courses" element={<MentorCourses />} />
          <Route path="/feedback" element={<Feedback />} />
          {/* 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
