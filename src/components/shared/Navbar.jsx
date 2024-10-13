import React from 'react';
import { navItems } from '../../assets/data/navItems';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className='flex'>
                {
                    navItems?.map((items, index) => {
                        return <div key={index}>
                            <Link to={items?.route}>
                                {items.name}
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Navbar;