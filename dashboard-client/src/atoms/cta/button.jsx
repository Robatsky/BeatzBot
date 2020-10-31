import React from 'react';
import './button.scss';

export default function Button ( {title, onClick, type, className=""}) {
    return (
        <>
            {type == CALL_TO_ACTION && 
                <button className={`button button-cta ${className}`}>{title}</button>
            }
            {type == CALL_TO_ACTION_OUTLINE &&
                <button className={`button button-cta button-cta__outline ${className}`}>{title}</button>
            }
        </>
    );
}

const CALL_TO_ACTION = "call-to-action"
const CALL_TO_ACTION_OUTLINE = "call-to-action-outline";
export {
    CALL_TO_ACTION,
    CALL_TO_ACTION_OUTLINE,
}