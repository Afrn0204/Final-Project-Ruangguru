import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import App from "./App";

function AppWrapper() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/app" element={<App />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppWrapper;
