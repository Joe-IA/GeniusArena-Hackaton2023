import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { MainPage } from "../Pages/MainPage";
import { Login } from "../Pages/Login";

export function MyRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path="/home" element={<MainPage />} />
                <Route exact path="/" element={<Login />} />
            </Routes>
        </Router>
    )
}