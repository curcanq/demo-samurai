import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img alt='' src="https://www.journaldugeek.com/content/uploads/2022/06/sans-titre19.jpg" />
            { props.message }
            <div>
                <span>like {props.like}</span>
            </div>
        </div>
    );
}

export default Post;