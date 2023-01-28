import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img alt='' src='https://www.hicom.fr/wp-content/uploads/2017/09/Logo_TV_2015.png' />
            <div className={s.loginBlock}>
                {props.isAuth 
                ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div> 
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;