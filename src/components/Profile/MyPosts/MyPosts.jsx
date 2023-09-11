import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div>
      <textarea></textarea>
      <button>Add post</button>
      <div>my posts
        <div className={s.posts}>new post
        <Post message='Hi, how do you do?' likecount=' 15' />
        <Post message='Hi, my name is Fox' likecount=' 20' />
        </div>
      </div>
    </div>
  )
}

export default MyPosts;