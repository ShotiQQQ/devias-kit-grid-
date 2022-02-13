import React from 'react';
import {cx, css} from '@emotion/css';
const basicBtn = css`padding: 12px 16px;
text-transform: uppercase;
background-color: var(--buttonAndCheckboxes);
border-radius: 4px;
font-weight: 500;
font-size: 14px;
line-height: 16px;
color: #fff;
letter-spacing: 1.25px;
transition: background-color .3s ease;
&:hover {
    background-color: #109ef0;
}
&:active {
    background-color: var(--buttonAndCheckboxes);
}
`

const BasicProfile = () => {
    return (
        <div className="basic">
            <div className="basic__top">
                <h3 className="basic__title">Basic Profile</h3>
                <span className="basic__annotation">The information can be edited from yuor profile page</span>
            </div>
            <form method="POST">
            <div className="basic__main">
                <input className="basic__input" required placeholder="First Name" type="text" id="firstName"></input>
                <input className="basic__input" required placeholder="Last Name" type="text" id="lastName"></input>
                <input className="basic__input" required placeholder="Email" type="email" id="email"></input>
                <input className="basic__input" required placeholder="Telephone" type="tel" id="tel"></input>
                <input className="basic__input" required placeholder="Country" type="text" id="country"></input>
                <input className="basic__input" required placeholder="City" type="text" id="city"></input>
            </div>
            <div className="basic__bottom">
                <button className={cx('btn-reset', basicBtn)} type="submit">save settings</button>
            </div>
            </form>
        </div>
    )
}

export default BasicProfile;