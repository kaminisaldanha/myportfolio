import {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Intro from './Intro';
import Contact from './Contact';
import Work from './Work';

const items = [
    {
        title: "About",
        path: "/about",
        element: <Intro />,
    },
    {
        title: "Work Experience",
        path: "/work",
        element: <Work />,
    },
    {
        title: "Contact me",
        path: "/contact",
        element: <Contact />
    },
];

class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar-container">
                        <ul className="navbar-list">
                            {items.map((item) => {
                                return(
                                    <li className="navbar-item">
                                        <Link to={item.path} className="navbar-title">{item.title}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/about">
                            <Intro />
                        </Route>
                        <Route path="/work">
                            <Work />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default NavBar;