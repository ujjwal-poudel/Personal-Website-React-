import React, { Component } from "react";
import {NavItems} from "./NavItems";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <h1 className="navbar-logo">Ujjwal</h1>

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
    }
};

export default Navbar;