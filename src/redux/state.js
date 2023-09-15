let state = {
  profilePage: {
    posts: [
      { id: 0, message: 'Hi, how do you do?', likecount: 10 },
      { id: 1, message: 'It`s my first post', likecount: 5 },
      { id: 2, message: 'My name is Fox', likecount: 8 }
    ]
  },

  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Iryna', avatar: <img src='https://oir.mobi/uploads/posts/2021-05/1620166348_21-oir_mobi-p-smeshnie-zverushki-zhivotnie-krasivo-foto-23.jpg' alt='ava'></img> },
      { id: 2, name: 'Yanka', avatar: <img src='https://oir.mobi/uploads/posts/2021-05/1620166290_28-oir_mobi-p-smeshnie-zverushki-zhivotnie-krasivo-foto-30.jpg' alt='ava'></img> },
      { id: 3, name: 'Vlad', avatar: <img src='https://oir.mobi/uploads/posts/2021-05/thumbs/1620166314_23-oir_mobi-p-smeshnie-zverushki-zhivotnie-krasivo-foto-25.jpg' alt='ava'></img>},
      { id: 4, name: 'Sanya', avatar: <img src='https://oir.mobi/uploads/posts/2021-05/1620166331_31-oir_mobi-p-smeshnie-zverushki-zhivotnie-krasivo-foto-33.jpg' alt='ava'></img>},
      { id: 5, name: 'Natka', avatar: <img src='https://oir.mobi/uploads/posts/2021-05/1620166351_10-oir_mobi-p-smeshnie-zverushki-zhivotnie-krasivo-foto-11.jpg' alt='ava'></img>}
    ],

    messages: [
      { id: 1, message: 'Hello, how are you?' },
      { id: 2, message: 'Glad to see you' },
      { id: 3, message: 'What do you do?' },
      { id: 4, message: 'Cool' }
    ],
  },

  sidebarPage: {
    side: [
      { id: 1, friend: 'Asya', message: 'I like you' },
      { id: 2, friend: 'Maks', message: 'I like you' },
      { id: 3, friend: 'Leo', message: 'I like you' }
    ]
  }
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likecount: 0
  };

  state.profilePage.posts.push(newPost);
}

export default state;