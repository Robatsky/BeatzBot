import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import {UserContext} from '../../context/UserContext';
import NavItem from '../../atoms/nav-item/nav-item';
import {CALL_TO_ACTION, CALL_TO_ACTION_OUTLINE} from '../../atoms/cta/button';

import './navigation.scss';

export function Navigation(props) {

    const { isAuthenticated } = useContext(UserContext);

    const handleClick = () => {
        if(isAuthenticated()) {
            window.location.href = "http://localhost:3001/api/auth/discord/logout";
        } else {
            window.location.href = "http://localhost:3001/api/auth/discord";
        }
    }

    return (
        <nav style={{backgroundColor: '#383c41'}}>
            <Link to="/#" className="navbar-brand">
                <img src="logo.png" alt="logo" />
            </Link>
            <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse">
                <ul className="navbar-nav">
                    <NavItem title="Beatz Bot" to="/menu" />
                    <NavItem title="Public Servers" to="/menu" />
                    <NavItem title="Commands" to="/menu" />
                    <NavItem title="Help" to="/menu" />
                    <NavItem title="Status" to="/menu" />
                    <NavItem title="Get Premium" to="/menu" type={CALL_TO_ACTION_OUTLINE}/>
                    <NavItem className="push-right" title={ isAuthenticated() ? "Logout" : "Login with Discord"} 
                        onClick={handleClick} type={CALL_TO_ACTION} />
                </ul>
            </div>
        </nav>
    );
}