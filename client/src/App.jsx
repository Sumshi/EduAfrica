import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import BrowserRouter
import Login from './componets/Login/Login'
import Home from "./componets/main_componet/Home/Home"
import Scholar from "./componets/main_componet/scholarship_type/Scholar"
import About_us from "./componets/main_componet/About_us/About_us"
import Contact from "./componets/main_componet/contact_us/ContactUs"
import Dashboard from "./componets/main_componet/Dashboard/Dashboard"; // Import your Dashboard component
import './index.css'
 
const App = () => {
  return (
      <>
       <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} /> 
        <Route path="/Scholarship" element={<Scholar/>} />
        <Route path="/About" element={<About_us/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Route for the Dashboard component */}
        <Route path="/" element={<Home/>} />
       </Routes>
    </>
  )
}

export default App
