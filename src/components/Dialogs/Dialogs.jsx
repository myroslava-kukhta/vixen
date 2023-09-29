import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = props.state.messages.map(m => <Message message={m.message} />);
  let newMessageBody = props.state.newMessageBody;
  
  let onNewMessageChange = () => {};
  let onSendMessageClick = () => {};

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea value={newMessageBody} 
            onChange={onNewMessageChange}
            placeholder="enter your message"></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
