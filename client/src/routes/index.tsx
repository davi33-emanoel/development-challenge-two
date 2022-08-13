import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/home" element={<Navigate to="/home"/>}/>
            <Route path="*" element={<Navigate to="/home"/>}/>
        </Routes>
    );
}