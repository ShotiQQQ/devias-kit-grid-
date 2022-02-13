import React from 'react';
import {cx, css} from '@emotion/css';
const tabsBtn = css`color: #3A3B3F;
font-weight: 500;
font-size: 16px;
line-height: 20px;`

const Tabs = () => {
    return (
    <div className="tabs">
        <ul className="content__tabs list-reset">
        <li className="content__tabs-item content__tabs-item--active">
            <button className={cx('btn-reset', tabsBtn)}>Profile</button>
        </li>
        <li className="content__tabs-item">
            <button className={cx('btn-reset', tabsBtn)}>Account</button>
        </li>
        <li className="content__tabs-item">
            <button className={cx('btn-reset', tabsBtn)}>Price Plans</button>
        </li>
        <li className="content__tabs-burger content__tabs-burger--active">
            <button className="burger btn-reset">
                <div className="burger__line burger__line--1"></div>
                <div className="burger__line burger__line--2"></div>
                <div className="burger__line burger__line--3"></div>
            </button>
        </li>
    </ul>
    <div className="tabs__line" />
    </div>
)       
}

export default Tabs;