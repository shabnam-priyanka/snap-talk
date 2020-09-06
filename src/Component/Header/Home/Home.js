import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';


const Home = () => {
    const [post, setPost] = useState([]);
   

    useEffect(() => {
      fetch ('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPost(data))
    },[])

  

    return (
        <div>
            <h1>Posts:{post.length} </h1>
            <div >
            {
                post.map(post => <Post  post={post} key={post.id} ></Post>)
            }
            </div>
            
        </div>
    );
};

export default Home;