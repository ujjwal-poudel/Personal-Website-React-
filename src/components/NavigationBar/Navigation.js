import React from 'react';
import { Link } from 'react-router-dom';
import navItems from './Navitems';

export default function Navigation() {
    return (
        <nav className='flex'>
            <h1><strong><Link to={'/'}>Ujjwal</Link></strong></h1>
            <ul className='flex'>
                {navItems.map(item => {
                    return (
                        <li key={item.name}>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}