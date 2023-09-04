import React from "react";
import {NavItems} from "./NavItems";
import Hamburger from "../../assets/Hamburger";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

        return (
            <nav className="navbar">
                <h1 className="navbar-logo">Ujjwal</h1>

                <div className="navbar-hamburger" onClick={handleClick}>
                    {
                       clicked ? <MobileNavbar /> : <Hamburger />
                    }
                </div>

                <ul className="navbar-menu">
                    {NavItems.map((item, index) => {
                        return (
                            <li className={item.cName} key={index}>
                                <a href={item.url} className={item.urlClass}>{item.title}</a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        )
};

export default Navbar;