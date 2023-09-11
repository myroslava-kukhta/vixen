import React from 'react';
// import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div>
    <div>
      <img src='https://img.lovepik.com/photo/20211201/medium/lovepik-foxs-thoughts-picture_501314639.jpg' alt='img'></img>
    </div>

    <div>ava+description</div>
    <MyPosts />
    </div>
  )
}

export default Profile;