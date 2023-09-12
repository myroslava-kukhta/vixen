import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://img.lovepik.com/photo/20211201/medium/lovepik-foxs-thoughts-picture_501314639.jpg' alt='img' 
        className={s.profileImage}></img>
      </div>

      <div className={s.descriptionBlock}>ava+description</div>
    </div>
  )
}

export default ProfileInfo;