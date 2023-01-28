import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Firends/Friends";

const Sidebar = (props) => {
    let friendsElements = props.friends.map(f => <Friends friends={f.name}/>)

    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/profile" className={items => items.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={items => items.isActive ? s.active : s.item}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={items => items.isActive ? s.active : s.item}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={items => items.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={items => items.isActive ? s.active : s.item}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={items => items.isActive ? s.active : s.item}>Settings</NavLink>
            </div>
            <div className={s.item}>
                    <h3>Friends</h3>
                    { friendsElements }
            </div>
        </nav>
    );
}

export default Sidebar;