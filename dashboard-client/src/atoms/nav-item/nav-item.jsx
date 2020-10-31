import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../cta/button';

import './navItem.scss';

export default function NavItem ( { to, title, classes=[], type = "nav-item", ...props } ) {
    return (
        <>
            {type == NAV_ITEM &&
                <li className="nav-item">
                    <Link to={to} className={`nav-item${classes.join(" ")}`}>{title}</Link>
                </li>
            }
            {type != NAV_ITEM && 
                <Button title={title} type={type} {...props} />
            }
        </>
    );
};

const NAV_ITEM = "nav-item";

export {
    NAV_ITEM
};