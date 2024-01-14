import React from 'react';

const Projects = () => {
  return (
    <section id="Projects">
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
  );
}

export default Projects;