import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './style.css';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import HomePage from './components/HomePage.js';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Jack Mitchell</h1>
          <p>Student at Northeastern University | Candidate For a Bachelors of Science in Computer Science (2026) | Khoury College of Computer Sciences</p>
        </header>
        <nav>
          <ul>
            <li className="large-text"><Link to="/">Home</Link></li>
            <li className="large-text"><Link to="/about">About Me</Link></li>
            <li className="large-text"><Link to="/skills">Skills</Link></li>
            <li className="large-text"><Link to="/projects">Projects</Link></li>
            <li className="large-text"><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
