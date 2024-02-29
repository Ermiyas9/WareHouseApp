// import HomePage from './HomePage';
// import AboutPage from './AboutPage';
// import ContactPage from './ContactPage';
// import NotFoundPage from './NotFoundPage';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SearchAndFilter from "./components/SearchAndFilter";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import TestPage from "./Components/TestPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/search" element={<SearchAndFilter />} />
        <Route path="/testpage" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
