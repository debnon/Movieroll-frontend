import React,{ useState} from 'react';
import './Blocker.css';

const Blocker = ({ isShowRegister }) => {

    console.log(isShowRegister);
    return (
    <div className={`${isShowRegister ? "active" : ""} show`}>
    <div className="blocker"> </div>
    </div>
    )
}

export default Blocker;