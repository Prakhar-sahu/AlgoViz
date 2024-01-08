import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './HomeComponent/home'
import About from './HomeComponent/about';
import Sort from './SortComponent/sort';

import Queen from './queenComponents/queen';
import RecursiveSort from './recursiveSortComponents/recursiveSort';
import Graph from './Graph/graph';
import Seive from './primeComponents/seive';
import Pathfinder from './pathfinderComponents/pathfinder';
// import PathVisualizer from "../src/pathfinderComponent/components/PathVisualizer/PathVisualizer"

class App extends Component{
  constructor(){
    super();
  }
  componentDidMount(){

  }
  render(){
    return(
      <Router basename='/'>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/sort' element={<Sort />} />
       
        <Route path='/pathfinder' element={<Pathfinder/>} />
        <Route path='/nqueen' element={<Queen/>} />
        <Route path='/recursivesort' element={<RecursiveSort/>} />
        <Route path='/graph' element={<Graph/>} />
        <Route path='/prime' element={<Seive/>} />
        {/* <Route path='/binarysearch' element={<BinarySearch/>} /> */}
        </Routes>
      </Router>
    )
  }
}
export default App;