import React from 'react';
import Logo from '../../../components/logo/logo';
import MenuItems from '../menuItems/menuItems';
import Button from '../../../components/ui/button/button';
import './sideDrawer.css';

function SideDrawer() {
    return (
        <div className="sideDrawer">
            <Logo />
            <nav>
                <MenuItems />
            </nav>
            <Button>ورود یا ثبت نام</Button>
        </div>
    );
}

export default React.memo(SideDrawer);
