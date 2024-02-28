// import HomePage from './HomePage';
// import AboutPage from './AboutPage';
// import ContactPage from './ContactPage';
// import NotFoundPage from './NotFoundPage';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SearchAndFilter from "./components/SearchAndFilter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/search" element={<SearchAndFilter />} />
      </Routes>
    </Router>
  );
}

export default App;
