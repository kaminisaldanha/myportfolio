import {Component} from 'react';

import '../style/Intro.css';

import headshot from '../headshot_square.jpg';

const IMAGE_NOT_FOUND = "Could not find photo";
const INTRO = "Hello, I'm Kamini!";

class Intro extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="intro">
                <img alt={IMAGE_NOT_FOUND} src={headshot} className="image"/>
                {INTRO}
            </div>
        )
    }
}

export default Intro;