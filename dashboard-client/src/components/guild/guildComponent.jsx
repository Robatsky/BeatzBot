import React from 'react';
import Button, {CALL_TO_ACTION, CALL_TO_ACTION_OUTLINE} from '../../atoms/cta/button';

import './guildComponent.scss';

export default function GuildComponent( { id, name, icon, hasBeatzBot }) {

    return (
        <div className="guild-group">
            <img src={ icon ? `https://cdn.discordapp.com/icons/${id}/${icon}.png` : 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZp6q6SITUlOK8ZRSLAnGYhJ6NMREisfxhGw&usqp=CAU" } />
            <h3 className="guild-title">{name}</h3>
            <Button title={ hasBeatzBot ? "Go To Dashboard" : "Setup Beatz Bot"} 
                type={ hasBeatzBot ? CALL_TO_ACTION : CALL_TO_ACTION_OUTLINE} />
        </div>
    )
}