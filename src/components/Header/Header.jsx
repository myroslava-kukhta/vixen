import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
     <img className={s.logo} alt='logo'
       src='https://img.freepik.com/premium-vector/vixen-logo-illustration-vector-design_681672-225.jpg?w=360'></img>
     </header>
  )
}

export default Header;