import React from 'react';
import reactLogo from '../../assets/images/reactapp-logo.png';
import './logo.css';

function Logo() {
    return (
        <div className="logo">
            <img src={reactLogo} alt="reactapp logo" />
        </div>
    );
}

export default React.memo(Logo);
