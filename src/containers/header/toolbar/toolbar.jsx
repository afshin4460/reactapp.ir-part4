import React from 'react';
import './toolbar.css';
import Logo from '../../../components/logo/logo';

function Toolbar() {
    return (
        <header className="toolbar">
            <Logo />
            <nav>navbar</nav>
            <button>login</button>
        </header>
    );
}

export default Toolbar;
