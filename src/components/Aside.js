import React from 'react';
import {cx, css} from '@emotion/css';
import buttonReset from './Header';


const Aside = () => {
    return (
    <aside className="aside">
        <button className="burger__close btn-reset">
            <div className="burger__close-line burger__close-line--1"></div>
            <div className="burger__close-line burger__close-line--2"></div>
        </button>
        <div className="aside__user">
            <img className="aside__user-img" src="img/aside__avatar.png" alt=""></img>
            <h3 className="aside__user-name">Roman Kutepov</h3>
            <span className="aside__user-position">Brain Director</span>
        </div>
        <div className="line"></div>
        <nav className="navbar">
            <ul className="aside__list list-reset">
                <li className="aside__list-item"><a className="aside__item-link aside__item-link--dashboard" href="#">Dashboard</a></li>
                <li className="aside__list-item"><a className="aside__item-link aside__item-link--users" href="#">Users</a></li>
                <li className="aside__list-item"><a className="aside__item-link aside__item-link--products" href="#">Products</a></li>
                <li className="aside__list-item"><a className="aside__item-link aside__item-link--auth" href="#">Authentication</a></li>
                <li className="aside__list-item"><a className="aside__item-link aside__item-link--typ" href="#">Typography</a></li>
                <li className="aside__list-item"><a className="aside__item-link aside__item-link--icons" href="#">Icons & Images</a></li>
            </ul>
        </nav>
        <div className="line"></div>
        <div className="aside__support">
            <span className="aside__category">Support</span>
            <button className={cx('btn-reset', css`width: 82px;
    color: var(--menu);
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    background-image: url("img/aside__support.svg");
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: left center;
    padding-left: 26px;`)}>Support</button>
        </div>
    </aside>
)     
}

export default Aside;