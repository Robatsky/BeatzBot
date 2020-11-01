export function updatePrefix(guildId, prefix) {
    return fetch(`http://localhost:3001/api/discord/guilds/${guildId}/prefix`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: `prefix=${encodeURIComponent(prefix)}`,
        credentials: 'include'
    });
}