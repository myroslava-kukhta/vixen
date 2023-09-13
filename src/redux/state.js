let state = {
  profilePage: {
    posts: [
      {id: 0, message: 'Hi, how do you do?', likecount: 10},
      {id: 1, message: 'It`s my first post', likecount: 5},
      {id: 2, message: 'My name is Fox', likecount: 8}
    ],
  },
 
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Iryna'},
      {id: 2, name: 'Yanka'}, 
      {id: 3, name: 'Vlad'}, 
      {id: 4, name: 'Sanya'},
      {id: 5, name: 'Natka'}
    ],

    messages: [
      {id: 1, message: 'Hello, how are you?'},
      {id: 2, message: 'Glad to see you'},
      {id: 3, message: 'What do you do?'},
      {id: 4, message: 'Cool'}
    ]
  }
}

export default state;