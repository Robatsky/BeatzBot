import React, {useCallback, useState} from 'react';
import {useUser} from '../../hooks/UserHook';
import {updatePrefix} from '../../api/api';

export function DashboardPage ( {history} ) {

    const errorCallback = useCallback( error => history.push('/'), [history]);

    const [user, setUser, loading] = useUser(errorCallback);
    const [prefix, setPrefix] = useState("");
    const [log, setLog] = useState([]);

    const submitPrefix = async (event) => {
        event.preventDefault();
        try {
            const result = await updatePrefix("478699121499308032", prefix);
            console.log(result);
            const {msg} = await result.json();
            setLog([msg]);
        } catch (err) {
            setLog([err]);
        }
    }

    return (
        <>
            { loading && <span>Loading</span>}
            { !loading && 
                <div className="dashboard-config">
                    <form onSubmit={submitPrefix}>
                        <input id="prefix" placeholder="?" onChange={ (event) => setPrefix(event.target.value)} />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            }
            { log.map(e => <div key={{e}}>{e}</div>)}
        </>
    )
}