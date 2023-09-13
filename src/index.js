import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import state from './redux/state';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 0, message: 'Hi, how do you do?', likecount: 10},
  {id: 1, message: 'It`s my first post', likecount: 5},
  {id: 2, message: 'My name is Fox', likecount: 8}
];

let dialogs = [
  {id: 1, name: 'Iryna'},
  {id: 2, name: 'Yanka'}, 
  {id: 3, name: 'Vlad'}, 
  {id: 4, name: 'Sanya'},
  {id: 5, name: 'Natka'},
];

let  messages = [
  {id: 1, message: 'Hello, how are you?'},
  {id: 2, message: 'Glad to see you'},
  {id: 3, message: 'What do you do?'},
  {id: 4, message: 'Cool'}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
