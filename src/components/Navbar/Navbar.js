import React from "react";
import {useState} from "react";
import "./Navbar.css";
import {menuItems} from "const";
import {Hamburger} from "components";

export const Navbar = () => {
    // Same problem with naming
    const [isHamburgerOpened, setIsHamburgerOpened] = useState(false);

    const handleHamburgerClick = () => {
        setIsHamburgerOpened((prevState) => !prevState);
    }

    return (
        // https://react.dev/reference/react/Fragment
        <>
            <Hamburger isOpened={isHamburgerOpened} setIsOpened={handleHamburgerClick}/>
            {/*Better to use only one component here with media queries. So, you don't need MobileNavbar component*/}
            <ul className={isHamburgerOpened ? 'navbar-menu' : 'navbar-menu-opened'}>
                {menuItems.map((item) => (// You don't use indexes as a key, that's a bad practice. You should use some unique id from your data. https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
                    <li className={item.cName} key={item.title}>
                        <a href={item.url} className={item.urlClass}>{item.title}</a>
                    </li>))}
            </ul>
        </>
    )
};
