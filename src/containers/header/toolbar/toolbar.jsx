import React from 'react';
import './toolbar.css';
import Logo from '../../../components/logo/logo';
import MenuItems from '../menuItems/menuItems';

function Toolbar() {
    return (
        <header className="toolbar">
            <Logo />
            <nav>
                <MenuItems />
            </nav>
            <button>login</button>
        </header>
    );
}

export default Toolbar;
