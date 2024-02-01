import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="container my-5">
      <h2 className="text-center mb-4">Skills</h2>
      
      <div className="mb-4">
        <h3 className="h5 mb-3"><b>Languages</b></h3>
        <div className="mb-3">
          <h4 className="h6 mb-2">Proficient</h4>
          <ul className="list-group">
            <li className="list-group-item">Java</li>
            <li className="list-group-item">C++</li>
            <li className="list-group-item">Kotlin</li>
          </ul>
        </div>

        <div className="mb-3">
          <h4 className="h6 mb-2">Familiar With</h4>
          <ul className="list-group">
            <li className="list-group-item">Python</li>
            <li className="list-group-item">C</li>
            <li className="list-group-item">JavaScript/Typescript</li>
            <li className="list-group-item">HTML5</li>
            <li className="list-group-item">CSS3</li>
          </ul>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="h5 mb-3"><b>Frameworks/Tools</b></h3>
        <ul className="list-group">
          <li className="list-group-item">JUnit</li>
          <li className="list-group-item">JavaFX</li>
          <li className="list-group-item">Visual Studio</li>
          <li className="list-group-item">JetBrains IDEs</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="h5 mb-3"><b>OS</b></h3>
        <ul className="list-group">
          <li className="list-group-item">Mac OS - OSX</li>
          <li className="list-group-item">Windows</li>
          <li className="list-group-item">Ubuntu Linux</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
