import React from 'react';
import b from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileItem from "./ProfileItem/ProfileItem";
const Profile = () =>{
    return(
<div className={b.body}>
  <ProfileItem/>
  <MyPosts />
</div>
    )
}
export default Profile;