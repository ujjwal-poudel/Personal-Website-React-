import React from "react";
import './Header.css';
import {Navbar} from "components";

export const Header = () => {
    return (
        <nav className="header">
            {/*For logo, you should use an image. SVG in your case*/}
            <h1 className="logo">Ujjwal</h1>
            <Navbar/>
        </nav>
    )
};
