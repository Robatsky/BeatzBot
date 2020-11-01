export function getUserDetails() {
    return fetch('http://localhost:3001/api/auth', { credentials: 'include'});
}

export function logoutUser() {
    return fetch('http://localhost:3001/api/auth/discord/logout', { credentials: 'include'});
}