import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Sidebar.module.css';

const Sidebar = (props) => {
  let path = "/sidebar/" + props.id;

  return (
    <div className={s.side}>
      <div className={s.title}>
        <h3>Friends</h3>
      </div>

      <div className={s.sideItems}> 
      <div className={s.item}>
       <NavLink to={path} className = { navData => navData.isActive ? s.active : s.item }> Asya </NavLink>
      </div>

      <div className={s.item}>
       <NavLink to={path} className = { navData => navData.isActive ? s.active : s.item }> Maks </NavLink>
      </div>

      <div className={s.item}>
      <NavLink to={path} className = { navData => navData.isActive ? s.active : s.item }> Leo </NavLink>
      </div>
      </div>
     </div>
  )
}

export default Sidebar;