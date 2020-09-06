import React, { useState, useEffect } from 'react';




    const Comments = (props) => {
    const id = props.postId;
    console.log(id);
    const [comments, setComments] = useState([]);
    
    // console.log(id);
    //const {name, email, body  } = comments;

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data => setComments(data))
            
            
            
    }, [id])
    console.log(comments);
    return (
        
       <div>

           {/* <h1>Name:{comments.name} </h1>
           <h1>Email:{id.email} </h1>
           <h3>body:{id.body} </h3> */}
        
           {
            comments.map(com => <h1>{com.name} {com.email} {com.body} {com.title}</h1>)
           }
            
         
        
        
       </div>
      
    );
};

export default Comments;