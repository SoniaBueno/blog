import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CompletePost from "./pages/CompletePost";
import New from "./pages/New";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/post/:id" element={<CompletePost />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </Router>
  );
}

export default App;
