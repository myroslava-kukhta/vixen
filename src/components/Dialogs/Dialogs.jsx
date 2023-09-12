import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog + ' ' + s.active}>
    <NavLink to={path}>
      {props.name}
    </NavLink>
  </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.dialog}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  
  let dialogs = [
    {id: 1, name: 'Iryna'},
    {id: 2, name: 'Yanka'}, 
    {id: 3, name: 'Vlad'}, 
    {id: 4, name: 'Sanya'},
    {id: 5, name: 'Natka'}
  ];

  let messages = [
    {id: 1, message: 'Hello, how are you?'},
    {id: 2, message: 'Glad to see you'},
    {id: 3, message: 'What do you do?'},
    {id: 4, message: 'Cool'},
  ];

  let dialogsElements = dialogs
  .map( d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = messages
  .map( m => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElements }
      </div>

      <div className={s.messages}>
        { messagesElements }
      </div>
    </div>
  )
}

export default Dialogs;
