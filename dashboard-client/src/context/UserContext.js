import React, { createContext, useReducer, useEffect } from 'react';
import {UserReducer} from '../reducer/UserReducer';

import {getUserDetails} from '../api/user';

const initialState = {
    authenticated: false,
    data: {}
};

export const UserContext = createContext(initialState);

export const UserProvider = ({children}) => {

    const [ state, dispatch ] = useReducer(UserReducer, initialState)

    useEffect( () => {
        (async () => {
            let authenticated = false;
            let data = {};
            try {
                const response = await getUserDetails();
                authenticated = response.status === 200;
                if(authenticated) {
                    data = await response.json();
                }
            } catch (err) {}
            dispatch({
                type: 'INITIAL',
                payload: {
                    authenticated, data
                }
            })
        })();
    }, []);

    function login(payload = {}) {
        dispatch({
            type: 'LOGIN',
            payload: payload
        });
    }

    function logout() {
        dispatch({
            type: 'LOGOUT',
            payload: {}
        });
    }

    function isAuthenticated() {
        return state.authenticated;
    }

    return (
        <UserContext.Provider value={{state, login, logout, isAuthenticated}}>
            {children}
        </UserContext.Provider>
    );
}

