import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/home" element={<p>Meu deus meu senhor me ajude por favor</p>}/>
            <Route path="*" element={<Navigate to="/home"/>}/>
        </Routes>
    );
}