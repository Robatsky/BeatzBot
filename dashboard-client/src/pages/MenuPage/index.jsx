import React, { useCallback } from 'react';

export function MenuPage ( { history } ) {
    
    const loading = false;
    
    return (
        <>
            { loading && <span>Loading</span>}
            { !loading && <h1>Menu Page</h1> }
        </>
    )
}