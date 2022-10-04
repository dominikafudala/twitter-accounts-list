import React from "react";
import { NavLink} from "react-router-dom";
import styles from './Nav.module.scss';


const Nav = () => (
    <nav>
        <ul className= {styles.wrapper}>
            <li className= {styles.navItem}>
                <NavLink className={(navData) => (navData.isActive ? styles.navItemLinkActive + " " + styles.navItemLink : styles.navItemLink)} end to = "/">Twitters</NavLink>
                <div className={styles.navItemBar}></div>
            </li>
            <li className= {styles.navItem}>
                <NavLink className={(navData) => (navData.isActive ? styles.navItemLinkActive + " " + styles.navItemLink : styles.navItemLink)} to = "/articles">Articles</NavLink>
                <div className={styles.navItemBar}></div>
            </li>
            <li className= {styles.navItem}>
                <NavLink className={(navData) => (navData.isActive ? styles.navItemLinkActive + " " + styles.navItemLink : styles.navItemLink)}to = "/notes">Notes</NavLink>
                <div className={styles.navItemBar}></div>
            </li>
        </ul>
    </nav>
)

export default Nav;