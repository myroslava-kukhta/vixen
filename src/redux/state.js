const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let store = {
  _state: {

    profilePage: {
      posts: [
        { id: 0, message: 'Hi, how do you do?', likecount: 10 },
        { id: 1, message: 'It`s my first post', likecount: 5 },
        { id: 2, message: 'My name is Fox', likecount: 8 }
      ],

      newPostText: 'it-vixen'
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Iryna' },
        { id: 2, name: 'Yanka' },
        { id: 3, name: 'Vlad' },
        { id: 4, name: 'Sanya' },
        { id: 5, name: 'Natka' }
      ],

      messages: [
        { id: 1, message: 'Hello, how are you?' },
        { id: 2, message: 'Glad to see you' },
        { id: 3, message: 'What do you do?' },
        { id: 4, message: 'Cool' }
      ],

      newMessageBody: ""
    },

    sidebarPage: {
      side: [
        { id: 1, friend: 'Asya', message: 'I like you' },
        { id: 2, friend: 'Maks', message: 'I like you' },
        { id: 3, friend: 'Leo', message: 'I like you' }
      ]
    }
  },
  _rerenderEntireTree() {
    console.log('State was changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likecount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
    }  else if (action.type === SEND_MESSAGE) {
        let body = this._state.dialogsPage.newMessageBody;
        this._state.dialogsPage.newMessageBody = '';
        this._state.dialogsPage.messages.push( { id: 5, message: body });
      this._callSubscriber(this._state);
    }
  }
}

export const addPostCreator = () => ({ type: ADD_POST });

export const updateNewPostTextCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT, newText: text
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY, body: body
});

export default store;
window.store = store;
