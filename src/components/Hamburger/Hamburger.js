import {Crossbars as CrossbarsIcon, Hamburger as HamburgerIcon} from "assets";
import React from "react";

export const Hamburger = ({isOpened, handleClick}) => {
    return (
        <button className="navbar-hamburger" onClick={handleClick}>
            {isOpened ? <CrossbarsIcon/> : <HamburgerIcon/>}
        </button>
    )
};
