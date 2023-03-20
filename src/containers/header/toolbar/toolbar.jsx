import React from 'react';
import './toolbar.css';
import Logo from '../../../components/logo/logo';
import MenuItems from '../menuItems/menuItems';
import Button from '../../../components/ui/button/button';
import Modal from '../../../components/ui/modal/modal';
import SignIn from '../../../components/user/signin/signin';

function Toolbar() {
    return (
        <header className="toolbar">
            <Logo />
            <nav>
                <MenuItems />
            </nav>
            <Button btnType='violet' clicked={() => alert('logIn')}>ورود یا ثبت نام</Button>
            <Modal>
                <SignIn />
            </Modal>
        </header>
    );
}

export default Toolbar;
