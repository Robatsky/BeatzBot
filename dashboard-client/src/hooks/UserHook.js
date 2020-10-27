import { useState, useEffect } from 'react';
import { getUserDetails } from '../api/api';

export function useUser( errorCallback ) {
    const [user, setUser] = useState( null );
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        
        (async function fetchData() {
            const response = await getUserDetails();
            try {
                if(response.status !== 200) {
                    throw new Error(response.status);
                } else {
                    const data = await response.json();
                    setUser(data);
                    setLoading(false);
                }
            } catch ( error) {
                console.log(error);
                setLoading(false);
                errorCallback(error);
            }
        })();

    }, [errorCallback]);
    
    return [user, setUser, loading];
}