import React, {useContext} from 'react';

import NavItem from '../../atoms/nav-item/nav-item';
import {CALL_TO_ACTION, CALL_TO_ACTION_OUTLINE} from '../../atoms/cta/button';

import './navigation.scss';

export function Navigation(props) {

    return (
        <nav style={{backgroundColor: '#383c41'}}>
            <a href="#" className="navbar-brand">
                <img src="logo.png" alt="logo" />
            </a>
            <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse">
                <ul className="navbar-nav">
                    <NavItem title="Beatz Bot" to="/" />
                    <NavItem title="Public Servers" to="/" />
                    <NavItem title="Commands" to="/" />
                    <NavItem title="Help" to="/" />
                    <NavItem title="Status" to="/" />
                    <NavItem title="Get Premium" to="/" type={CALL_TO_ACTION_OUTLINE}/>
                    <NavItem className="push-right" title={false ? "Logout" : "Login with Discord"} 
                        onClick={ () => console.log("adadad")} type={CALL_TO_ACTION} />
                </ul>
            </div>
        </nav>
    );
}