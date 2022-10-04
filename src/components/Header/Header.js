import React from 'react';
import Nav from './Nav';
import styles from './Header.module.scss';
import Button from 'components/Button/Button';
import logo from 'assets/images/logo.svg';

const Header = ({openModalFn}) => (
    <header className={styles.wrapper}>
        <div className={styles.logoWrapper}>
            <img src={logo} alt="FavNote logo" />
        </div>
        <Nav/>
        <Button onClick = {openModalFn} secondary>Add new item</Button>
    </header>
);


export default Header;