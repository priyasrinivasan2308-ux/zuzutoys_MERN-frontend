import React from "react";
import { Routes } from "react-router-dom";
import Homepage from "../Pages/Home";

function AppRoutes(){
return(
<Routes>
<Route path="/" element={<Homepage name="Priya"/>}>
<Route path="/about" element={<Aboutpage/>}>
</Routes>
)
};
export default AppRoutes;           