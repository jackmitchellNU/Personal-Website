import React from 'react';

const Projects = () => {
  return (
    <section id="Projects" className="container my-5">
      <h2 className="text-center mb-4">Projects</h2>
      <ul className="list-unstyled">
        <li className="mb-3">
          <h3 className="h4 mb-2"><b>Bullet Journal</b> - June 2023</h3>
          <p>Illustrated a map showcasing major cities across the United States, connected by edges. Employed Kruskal's Algorithm to 
          determine a minimum spanning tree, utilizing the miles between cities as edge weights for optimal connectivity.</p>
        </li>
        <li className="mb-3">
          <h3 className="h4 mb-2"><b>Battlesalvo Game</b> - June 2023</h3>
          <p>Designed and developed a battleship type game with customizable settings that could be played locally or
            connected to a server to play against another machine via JSONs and sockets. Designed an AI player to play against locally or play against another machine via the server.</p>
        </li>
        <li className="mb-3">
          <h3 className="h4 mb-2"><b>Hex Game Artificial Intelligence</b> - April 2023</h3>
          <p>Developed an implementation of the Islands of Hex game, where players strive to form islands of their designated color on a hexagonal board. Implemented AI models using
            Alpha-Beta pruning and the Minimax algorithm to enable strategic competition between them.</p>
        </li>          
      </ul>
    </section>
  );
}

export default Projects;
