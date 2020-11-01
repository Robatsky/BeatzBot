import {useEffect, useState} from 'react';

export function useUserGuild() {
    const [guilds, setGuilds] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        (async () => {
            try {
                const result = await fetch('http://localhost:3001/api/discord/guilds', {credentials: 'include'});
                const loadedGuilds = await result.json();
                console.log(loadedGuilds);
                loadedGuilds.sort((x, y) => (x.hasBeatzBot == y.hasBeatzBot) ? 0 : x.hasBeatzBot ? -1 : 1);
                setGuilds(loadedGuilds);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        })();
    });
    
    return [guilds, error, loading];
}