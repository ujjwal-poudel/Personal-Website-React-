import React from "react";
import {NavItems} from "../Navbar/NavItems";
import Crossbars from "../../assets/Crossbars";
import "./MobileNavbar.css";

const MobileNavbar = () => {
    return (
        <nav className="mobile__navbar">
            <div className="crossbar">
                <Crossbars />
            </div>

            <ul className="mobile__navbar-menu">
                {NavItems.map((item, index) => {
                    return (
                        <li className={item.cName} key={index}>
                            <a href={item.url} className={item.urlClass}>{item.title}</a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default MobileNavbar;