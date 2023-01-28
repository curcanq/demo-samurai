import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import yes from '../../../images/yes.png'
import not from '../../../images/not.png'
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img alt='' src={props.profile.photos.large} />
                <h2>{props.profile.fullName}</h2>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                <h4>{props.profile.aboutMe}</h4>
                <h3>Статус работы</h3>
                <img className={s.image} alt="" src={props.profile.lookingForAJob === true ? yes : not} />
                <h5>{props.profile.lookingForAJobDescription}</h5>
            </div>
        </div>
    );
}

export default ProfileInfo;