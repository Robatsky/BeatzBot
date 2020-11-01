import React from 'react';

import './pagewrapper.scss';

export default function PageWrapper ({children}) {

    return (
        <div className="page-wrapper">
            {children}
        </div>
    );
}