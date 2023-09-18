import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {
  let postsElements =
  props.posts.map( p => <Post message={p.message} likecount={p.likecount} />);

let newPostElement = React.createRef();

let addPost = () => {
  let text = newPostElement.current.value;
  props.addPost(text);
}

let onPostChange = () => {
  let text = newPostElement.current.value;
  props.updateNewPostText(text);
}

  return (
    <div className='postsBlock'>
      <h3>
         my posts
      </h3>
      
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
          </div>
      </div>

      <div>
        <button onClick={ addPost }>
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