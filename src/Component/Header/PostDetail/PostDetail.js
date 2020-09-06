import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';






const PostDetail = () => {
    const { id } = useParams();
    const [postDetail, setPostDetail] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPostDetail(data))
    }, [])


    return (
        

 
        <div>
        <h1>This is details: {postDetail.title} </h1>
        <h2>Body:{postDetail.body} </h2>
        <h1>Name:{postDetail.name} </h1>
        <h2>E-mail:{postDetail.email} </h2>
        <br />
        <h2>comments section </h2>
        <Comments postId={postDetail.id} ><li>{postDetail.id} </li> </Comments>
         
        </div> 
    );
};

export default PostDetail;