import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={`${s.dialog + ' ' + s.active}`}>
            <img alt='' src="https://www.journaldugeek.com/content/uploads/2022/06/sans-titre19.jpg"/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;