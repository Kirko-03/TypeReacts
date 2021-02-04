import React from 'react';
import b from './MyPost.module.css';
import Post from './Post/Post'
const MyPost = () =>{
    let postData = [{ message:"Hi",like:1},
        { message:"Whats up?",like:1},
        { message:"Learn Pituhon(((",like:-13},
        {message:"LOSEEER",like:187}]

    return(
        <div className={b.postsBlock}>
 <div className={b.item}>
   <a>My post</a> 
    </div>
    <textarea></textarea>
  <button>add post</button>
 <Post message={postData[0].message} like={postData[0].like}/>
            <Post message={postData[1].message} like={postData[1].like}/>
            <Post message={postData[2].message} like={postData[2].like}/>
            <Post message={postData[3].message} like={postData[3].like}/>
</div>
    )
}
export default MyPost;