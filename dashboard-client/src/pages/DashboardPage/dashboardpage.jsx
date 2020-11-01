import React, {useState} from 'react';
import {updatePrefix} from '../../api/api';
import {useUserGuild} from '../../hooks/UseUserGuild';

import GuildComponent from '../../components/guild/guildComponent';
import PageWrapper from '../../components/pagewrapper/pagwrapper';

export function DashboardPage ( {history} ) {

    const [prefix, setPrefix] = useState("");

    const submitPrefix = async (event) => {
        event.preventDefault();
        try {
            const result = await updatePrefix("478699121499308032", prefix);
            const {msg} = await result.json();
        } catch (err) {
            console.log(err);
        }
    };

    const [ guilds, error, loading] = useUserGuild();

    return (
        <PageWrapper>
            { loading && 
                <h1>Loading...</h1>
            }
            { !loading && error &&
                <h1>error occured ... {error} </h1>
            }
            { !loading && !error && guilds &&
                guilds.map(guild => ( <GuildComponent key={guild.id} {...guild} />))
            }
        </PageWrapper>
    )
}