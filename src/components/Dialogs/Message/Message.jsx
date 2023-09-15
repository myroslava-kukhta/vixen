import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
  let addText = () => {
    alert('hi')
  };

  let newMessageElement = React.createRef();
  return (
    <div className={s.dialog}>
      <textarea кref={newMessageElement}></textarea>
      <button onClick={addText}>add message</button>
      {props.message}
    </div>
  )
}

export default Message;
