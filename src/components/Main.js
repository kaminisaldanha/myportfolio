import {Component} from 'react';

import Intro from './Intro';
import NavBar from './NavBar';

import '../style/Main.css';
import '../style/NavBar.css'

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <NavBar></NavBar>
        <Intro></Intro>
      </div>
    );
  }
}

export default Main;
