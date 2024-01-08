// AlgorithmVisualizerInfo.jsx

import React from 'react';
import './about.css';
import Navbar from "../SortComponent/navbar"
const About = () => {
  return (
    <div className="algorithm-visualizer-info">
      <Navbar/>
      <header>
        <h1>AlgorithmViz</h1>
        <p>Explore the Beauty of Algorithms</p>
      </header>
      <div className="content">
        <p>
          Welcome to AlgorithmViz, a visually stunning tool designed to help you understand and appreciate various algorithms through interactive visualizations.
        </p>
        <p>
          🎨 Created with passion by Prakhar Sahu
        </p>
        <div className="supported-algorithms">
          <h2>Supported Algorithms</h2>
          <ul>
            <li>Dijkstra's Algorithm</li>
            <li>Depth-First Search (DFS)</li>
            <li>Breadth-First Search (BFS)</li>
            <li>A* Algorithm</li>
            <li>Quick Sort</li>
            <li>Merge Sort</li>
            <li>Bubble Sort</li>
            <li>Selection sort</li>
            <li>Insertion sort</li>
            <li>N Queens</li>
            <li>Sieve Prime</li>
            <li>And More.........</li>
            
            {/* Add more algorithms as needed */}
          </ul>
        </div>
        <p>
          Visualize, learn, and enjoy the fascinating world of algorithms with AlgorithmViz!
        </p>
      </div>
    </div>
  );
};

export default About;
