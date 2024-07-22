import React, {Component} from 'react';
import Typewriter from "typewriter-effect";
import './bouncy.css'
class Bouncy extends Component {
    state = {

    }
    render() {
        return (
            <div className="type display-3">
                <span className="badge badge-dark">
                <Typewriter
                    options={{
                        strings: ['Graph Algorithms', 'Sorting Algorithms',"N Queens"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </span>
            </div>
        );
    }
}

export default Bouncy;