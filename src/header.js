import React from 'react';
import logo from './freeLogo.png';
import './style.css';

function Header(){
    return (<div>
        <img src={logo} alt="logo"/>
        <h2 className="title">Free Classes</h2>
    </div>);
}

export default Header;