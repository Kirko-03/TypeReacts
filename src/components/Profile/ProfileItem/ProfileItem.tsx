import React from 'react';
import b from './ProfileItem.module.css';


const Profile = () => {
    return (
        <div>
           <div>
               <img src="https://kaifolog.ru/uploads/posts/2017-07/1500266284_00_3.jpg"></img>
           </div>
            <div className={b.descriptionBlock}>
                <a>ava + description</a>
        </div>
        </div>
    )
}
export default Profile;