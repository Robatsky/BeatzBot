import React, { createContext, useReducer } from 'react';
import {UserReducer} from '../reducer/UserReducer';

const initialState = {
    authenticated: false,
    data: {}
};

export const UserContext = createContext(initialState);

export const UserProvider = ({children}) => {

    const [ state, dispatch ] = useReducer(UserReducer, initialState)

    function login() {
        dispatch({
            type: 'LOGIN',
            payload: ""
        });
    }

    function logout() {
        dispatch({
            type: 'LOGOUT',
            payload: ""
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

