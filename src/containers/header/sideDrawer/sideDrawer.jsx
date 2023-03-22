import React from 'react';
import Logo from '../../../components/logo/logo';
import MenuItems from '../menuItems/menuItems';
import Button from '../../../components/ui/button/button';
import './sideDrawer.css';

function SideDrawer() {
    return (
        <div className="sideDrawer">
            <Logo height='10%' />
            <nav>
                <MenuItems />
            </nav>
            <div className="boxButton">
                <Button btnType='violet'>ورود یا ثبت نام</Button>
            </div>
        </div>
    );
}

export default React.memo(SideDrawer);
