import React from 'react';
import './modal.css';

function Modal(props) {
    return(
        <div className="modal" style={{
            transform: props.show ? 'translateX(0)' : 'translateX(-100vw)',
            opacity: props.show ? '1' : '0'
        }}>{props.children}</div>
    );
}

export default React.memo(Modal);
