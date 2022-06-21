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
import IdCard from "../../pages/idCard";
import Edit from "../../pages/edit";
function AppRouting() {


    return (
        <>
            <Router>
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/add" element={<Add/>} />
                    <Route path="/update" element={<Update />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/view" element={<View />} />
                    <Route path="/idCard" element={<IdCard />} />
                    <Route path="/edit" element={<Edit />} />
                </Routes>
            </Router>




        </>
    )
};

export default AppRouting;