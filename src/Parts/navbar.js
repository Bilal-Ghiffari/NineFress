import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);


    return (
        <>
            <nav className="navbar font-big">
                <div className="nav-container">
                    <NavLink to="/" className="nav-logo">
                        <img src="images/content/fr9sh.png" alt="Fresh9" title="FreshNine Home" width="220px"/>
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                            exact
                            to="/"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                            title="Home"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                            to="/categories"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                            title="Categories"
                            >
                                Categories
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                            to="/blog"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                            title="Blog"
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                            to="/contact"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                            title="Contact Us"
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                    <div className="md:hidden flex-none nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    )
}
