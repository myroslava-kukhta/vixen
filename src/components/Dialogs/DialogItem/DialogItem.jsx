import React from 'react';
import { NavLink } from "react-router-dom";
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
<div className={s.item}>
    <div className={s.img}>
    {props.avatar}
  </div>
    <div className={s.dialog + ' ' + s.active}>
    <NavLink to={path}>
      {props.name}
    </NavLink>
  </div>
  </div>
  )
}


export default DialogItem;
