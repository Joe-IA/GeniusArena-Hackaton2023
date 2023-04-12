import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import React from "react";
import { MainPage } from "../Pages/MainPage";
import { Login } from "../Pages/Login";

export function MyRoutes({user}){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={user ? <MainPage />: <Navigate to="/login"/> } />    
                <Route exact path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}