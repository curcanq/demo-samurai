import React from 'react';
import s from './Friends.module.css'

const Friends = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img alt='' src="https://www.journaldugeek.com/content/uploads/2022/06/sans-titre19.jpg"/>
                <div className={s.friendsT}>{props.friends}</div>
            </div>

        </div>
    );
}

export default Friends;