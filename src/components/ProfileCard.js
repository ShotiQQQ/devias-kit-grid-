import React from 'react';
import {cx, css} from '@emotion/css';
const profileBtn = css`font-weight: 500;
                font-size: 14px;
                line-height: 16px;
                text-transform: uppercase;
                color: #425A70;
                letter-spacing: 1px;`;

const ProfileCard = () => {
    return (
        <div className="profile__card">
            <div className="profile__card-top">
                <div className="profile__card-top--left">
                    <h2 className="profile__card-name">Adrian Stefan</h2>
                    <span className="profile__card-adress">Rm. Valcea, Romania</span>
                    <br></br>
                    <span className="profile__card-time">4:32PM (GMT-4)</span>
                </div>
                <div className="profile__card-top--right">
                    <img className="profile__card-photo" src="img/main__avatar.png"></img>
                </div>
            </div>
            <div className="profile__card-bottom">
                <button className={cx('btn-reset', profileBtn, 'profile__card-button--download')}>upload picture</button>
                <button className={cx('btn-reset', profileBtn)}>remove picture</button>
            </div>
        </div>
    )
}

export default ProfileCard;