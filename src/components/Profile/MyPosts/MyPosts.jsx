import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {

  let posts = [
    {id: 0, message: 'Hi, how do you do?', likecount: 10},
    {id: 1, message: 'It`s my first post', likecount: 5},
    {id: 2, message: 'My name is Fox', likecount: 8},
  ]

  let postsElements =
  posts.map( p => <Post message={p.message} likecount={p.likecount} />);

  return (
    <div className='postsBlock'>
      <h3>
         my posts
      </h3>
      
      <div>
        <div>
          <textarea></textarea>
          </div>
      </div>

      <div>
        <button>
          Add post
        </button>
      </div>

      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts;