import React from 'react';

export function LandingPage ( props ) {
    const login = () => window.location.href = 'http://localhost:3001/api/auth/discord';

    return (
        <>
            <h1>Landing Page</h1>
            <button onClick={login}>Login</button>
        </>
    )
}