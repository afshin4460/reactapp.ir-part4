import React from 'react';
import './modal.css';

function Modal(props) {

    const classes = ['modal'];
    switch (props.show) {
        case true:
            classes.push('showModal');
            break;
        case false:
            classes.push('hideModal');
            break;
        default:
            break;
    }

    return(
        <div className={classes.join(' ')}>{props.children}</div>
    );
}

export default React.memo(Modal);
