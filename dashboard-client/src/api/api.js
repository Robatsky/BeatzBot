export function getUserDetails() {
    return fetch('http://localhost:3001/api/auth', { credentials: 'include'});
}