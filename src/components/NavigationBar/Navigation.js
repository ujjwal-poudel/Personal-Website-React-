import React from 'react';
import { Link } from 'react-router-dom';
import navItems from './Navitems';

export default function Navigation() {
    return (
        <nav className='flex justify-between'>
            <h1><strong><Link to={'/'}>Ujjwal</Link></strong></h1>

            <div className='block sm:hidden'>
                <h3>Nab</h3>
            </div>
            
            <ul className='hidden sm:flex'>
                {navItems.map(item => {
                    return (
                        <li key={item.name} className='ps-10'>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}