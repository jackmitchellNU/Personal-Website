// Import React and any additional dependencies
import React from 'react';
import './style.css'; // Make sure to import your CSS file

// Create a functional component for the entire application
function App() {
  return (
    <>
      <header>
        <h1>Jack Mitchell</h1>
        <p>Student at Northeastern University | Candidate For a Bachelors of Science in Computer Science (2026) | Khoury College of Computer Sciences</p>
      </header>
      <nav>
        <ul>
          <li className="large-text"><a href="#aboutMe">About Me</a></li>
          <li className="large-text"><a href="#skills">Skills</a></li>
          <li className="large-text"><a href="#projects">Projects</a></li>
          <li className="large-text"><a href="contact.php">Contact</a></li>
        </ul>
      </nav>
      <section id="about">
        <h2>About Me</h2>
        <p>Hello! My name is Jack Mitchell. I am majoring in Computer Science at Northeastern University and here are some of my interests.</p>
        <p>I am most skilled with Java but I also have experience in Typescript, C++, C, Python, Kotlin, CSS, Javascript, and HTML</p>
      </section>
      <section id="skills">
        <h2>My Skills</h2>
        <p className="large-text"><b>Languages</b></p>
        <ul>
          <li>Java</li>
          <li>Kotlin</li>
          <li>Python</li>
          <li>C++</li>
          <li>C</li>
          <li>JavaScript/Typescript</li>
          <li>HTML5</li>
          <li>CSS3</li>
        </ul>
        <p className="large-text"><b>Frameworks/Tools</b></p>
        <ul>
          <li>JUnit</li>
          <li>JavaFX</li>
          <li>Visual Studio</li>
          <li>JetBrains IDEs</li>
        </ul>
        <p className="large-text"><b>OS</b></p>
        <ul>
          <li>Mac OS - OSX</li>
          <li>Windows</li>
          <li>Ubuntu Linux</li>
        </ul>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li className="large-text"><b>Hex Game Artificial Intelligence</b></li>
          <li>
            <p>Developed an implementation of the Islands of Hex game, where players strive to form islands of their designated color on a hexagonal board. Implemented AI models using
              Alpha-Beta pruning and the Minimax algorithm to enable strategic competition between them.</p>
          </li>
          <li className="large-text"><b>Bullet Journal</b></li>
          <li>
            <p>Illustrated a map showcasing major cities across the United States, connected by edges. Employed Kruskal's Algorithm to determine a minimum spanning tree, utilizing
              the miles between cities as edge weights for optimal connectivity</p>
          </li>
          <li className="large-text"><b>Connecting US Cities Map</b></li>
          <li>
            <p>Utilized the JavaFX framework to craft a personalized weekly journal, designed for tracking events and tasks
              throughout the week. Integrated a secure password-locking system and incorporated customizable layouts and themes for an enhanced
              user experience.</p>
          </li>
        </ul>
      </section>
      <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:mitchell.jack@northeastern.edu?subject=Inquiry&body=Hello%20Jack,%0D%0A%0D%0AI%20am%20interested%20in%20learning%20more%20about%20you!">mitchell.jack@northeastern.edu</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/jack-mitchell-a340a6256/">linkedin.com/in/jack-mitchell</a></p>
      </section>
    </>
  );
}

export default App;
