import React from 'react';
import {cx, css} from '@emotion/css';
const notifBtn = css`padding: 12px 42px;
text-transform: uppercase;
background-color: #fff;
border-radius: 4px;
font-weight: 500;
font-size: 14px;
line-height: 16px;
color: var(--buttonAndCheckboxes);
letter-spacing: 1.25px;
border: 1px solid rgba(0, 0, 0, 0.12);
transition: background-color .3s ease, color .3s ease;
&:hover {
    background-color: #109ef0;
    color: #fff;
}
&:active {
    background-color: #fff;
    color: var(--buttonAndCheckboxes);
}`;

const Notifications = () => {
    return (
        <div className="notifications">
            <div className="notifications__top">
                <h3 className="notifications__title">Notifications</h3>
                <span className="notifications__annotation">Mange the notifications emailing</span>
            </div>
            <form method="POST">
            <div className="notifications__main">
                <div className="notifications__main-left">
                <h3 className="notifications__title">Notifications</h3>
                    <label><input className="notifications__input" type="checkbox"></input>Email</label>
                    <label><input className="notifications__input" type="checkbox"></input>Push notifications</label>
                    <label><input className="notifications__input" type="checkbox"></input>Text Messages</label>
                    <label><input className="notifications__input" type="checkbox"></input>Phone Calls</label>
                </div>
                <div className="notifications__main-right">
                <h3 className="notifications__title">Messages</h3>
                    <label><input className="notifications__input" type="checkbox"></input>Email</label>
                    <label><input className="notifications__input" type="checkbox"></input>Push notifications</label>
                    <label><input className="notifications__input" type="checkbox"></input>Phone Calls</label>
                </div>
            </div>
            <div className="notifications__bottom">
                <button className={cx('btn-reset', notifBtn)} type="submit">save</button>
            </div>
            </form>
        </div>
    )
}

export default Notifications;