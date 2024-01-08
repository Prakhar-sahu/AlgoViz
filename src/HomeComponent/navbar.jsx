import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src="https://th.bing.com/th/id/OIG.6_9HokRuX7nmM0KI38g_?w=1024&h=1024&rs=1&pid=ImgDetMain" 
        alt="Logo" className={styles.logo} />
        <span className={styles.brand}>AlgoViz</span>
      </div>
      <div className={styles.centerLinks}>
        <ul className={styles.navLinks}>
          <li><a href="/" className={styles.navLink}>Home</a></li>
          <li className={styles.dropdown}>
            <a href="/" className={styles.navLink}>Algos</a>
            <div className={styles.dropdownContent}>
              <a href="/sort" className={styles.dropdownLink}>Sorting Algos</a>
              <a href="/pathfinder" className={styles.dropdownLink}>Path Finding Algos</a>
              <a href="/nqueen" className={styles.dropdownLink}>N Queens</a>
              <a href="/recursivesort" className={styles.dropdownLink}>Recursive Sorting Algos</a>
              <a href="/graph" className={styles.dropdownLink}>Recursive Trees</a>
              <a href="/prime" className={styles.dropdownLink}>Prime Sieve</a>
            </div>
          </li>
          <li><a href="/About" className={styles.navLink}>About</a></li>
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
