import React, { useCallback } from 'react';
import { useUser } from '../../hooks/UserHook';

export function MenuPage ( { history } ) {
    
    const errorCallback = useCallback( error => history.push('/'), [history]);
    const [user, setUser, loading] = useUser( errorCallback );

    return (
        <>
            { loading && <span>Loading</span>}
            { !loading && <h1>Menu Page</h1> }
        </>
    )
}