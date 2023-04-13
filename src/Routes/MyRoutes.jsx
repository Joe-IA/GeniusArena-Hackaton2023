import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import React from "react";
import { MainPage } from "../Pages/MainPage";
import { Login } from "../Pages/Login";
import { History } from "../Pages/History";
import { Dashboard } from "../Pages/Dashboard";
import { Settings } from "../Pages/Settings";


export function MyRoutes({user}){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={user ? <MainPage />: <Navigate to="/login"/> } />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/history" element={user ? <History />: <Navigate to="/login"/> } />
                <Route exact path="/dashboard" element={user ? <Dashboard />: <Navigate to="/login"/> } />
                <Route exact path="/settings" element={user ? <Settings />: <Navigate to="/login"/> } />
            </Routes>
        </Router>
    )
}