import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../cta/button';

import './navItem.scss';

export default function NavItem ( { to, title, className="", type = "nav-item", ...props } ) {
    return (
        <li className={`nav-item ${className}`}>
            {type === NAV_ITEM &&
                    <Link to={to} className={`nav-item`}>{title}</Link>
            }
            {type !== NAV_ITEM && 
                <Button title={title} type={type} {...props} />
            }
        </li>
    );
};

const NAV_ITEM = "nav-item";

export {
    NAV_ITEM
};