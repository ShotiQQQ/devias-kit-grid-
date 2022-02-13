import React from 'react';
import {cx, css} from '@emotion/css';
const headerButton = css`width: 19px;height: 19px;background-position: center center;background-repeat: no-repeat;`;
const buttonReset = css`padding: 0;
border: none;
background-color: transparent;
cursor: pointer;`

const Header = () => {
    return (
    <header className="header">
        <div className="header__container">
            <div className="header__logo">
                <a className="header__link-logo" href="index.html"><img className="header__logo-svg" src="img/header__logo.svg" alt="Логотип Devias Kit" /><span className={css`
                color: #fff;
                font-weight: 500;
                line-height: 24px;
                font-size: 20px;`}>Devias Kit</span></a>
            </div>
            <span className="header__advertisment">See our PRO version for more design components & coded in React follow this link: <a className="header__link" href="#">https://devias.io/products/devias-kit-pro</a></span>
            <ul className="header__control list-reset">
                <li className="header__control-item"><button className={cx(buttonReset, headerButton, css`background-image: url("img/header__notifications.svg")`)}></button></li>
                <li className="header__control-item"><button className={cx(buttonReset, headerButton, css`background-image: url("img/header__exit.svg")`)}></button></li>
            </ul>
        </div>
    </header>
)       
}

export default Header;