import React, { Component } from 'react';
import Styles from"./NavBar.module.css";
import { Link } from 'react-router-dom';
export default class NavigationBar extends Component {
    render() {
        return (
            <React.Fragment>
               <header className={Styles.navigation_bar}>
				<h4><a href="/">ION</a></h4>
				<nav>
					<ul>
						<li><Link to="/" className={Styles.link1}>Home</Link></li>
						<li><Link to="/leftsidebar" className={Styles.link1}>Left Sidebar</Link></li>
						<li><Link to="/rightsidebar" className={Styles.link1}>Right Sidebar</Link></li>
						<li><Link to="/nosidebar" className={Styles.link1}>No Sidebar</Link></li>
						<li><a className={Styles.button} href="/">Sign Up</a></li>
					</ul>
				</nav>
			</header>
            </React.Fragment>
        )
    }
}
