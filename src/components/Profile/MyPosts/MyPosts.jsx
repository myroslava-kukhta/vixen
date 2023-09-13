import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {
  let postsElements =
  props.posts.map( p => <Post message={p.message} likecount={p.likecount} />);

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