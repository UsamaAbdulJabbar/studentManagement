import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Signup from "../../pages/signup";
import Login from "../../pages/login";
import Dashboard from "../../pages/dashboard";
import Update from "../../pages/update";
import About from "../../pages/about";
import View from "../../pages/view";
import Add from "../../pages/add";
function AppRouting() {


    return (
        <>
            <Router>
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/add" element={<Add/>} />
                    <Route path="/update" element={<Update />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/view" element={<View />} />
                </Routes>
            </Router>




        </>
    )
};

export default AppRouting;