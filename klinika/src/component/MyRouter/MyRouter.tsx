import React from "react";
import { Routes, Route } from "react-router-dom";

import LogIn from "pages/LogIn/LogIn";
import Admin from "pages/Admin/Admin";
import Doctor from "pages/Doctor/Doctor";

function MyRouter() {
  return (
 
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/admin" element={<Admin />} />
        <Route path='/doctor' element={<Doctor/>}/>
      </Routes>
  
  );
}
export default MyRouter;
