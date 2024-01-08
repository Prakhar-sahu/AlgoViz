import React,{Component} from "react";
import New_greet from "./new_greet";
import NavBar from "./navbar";
import Bouncy from "./bouncy";
import Cards from "./cards";

class Home extends Component{
    render(){
        return(
            <React.Fragment>
                {/* In React, a React.Fragment is a lightweight syntax for grouping multiple elements without introducing an additional DOM element */}
                <NavBar/>
                <New_greet/>
                <Bouncy/>
                <Cards/>
            </React.Fragment>
        )
    }
}
export default Home;