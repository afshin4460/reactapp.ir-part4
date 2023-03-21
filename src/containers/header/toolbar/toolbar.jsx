import React, {useState} from 'react';
import './toolbar.css';
import Logo from '../../../components/logo/logo';
import MenuItems from '../menuItems/menuItems';
import Button from '../../../components/ui/button/button';
import Modal from '../../../components/ui/modal/modal';
import SignIn from '../../../components/user/signin/signin';

function Toolbar() {
    
    const [showModal, setShowModal] = useState(false);
    const handleModal = () => {
        setShowModal(true);
    };
    const handleModalClosed = () => {
        setShowModal(false);
    };

    return (
        <header className="toolbar">
            <Logo />
            <nav>
                <MenuItems />
            </nav>
            <Button btnType='violet' clicked={handleModal}>ورود یا ثبت نام</Button>
            <Modal show={showModal} modalClosed={handleModalClosed}><SignIn /></Modal>
        </header>
    );
}

export default Toolbar;
