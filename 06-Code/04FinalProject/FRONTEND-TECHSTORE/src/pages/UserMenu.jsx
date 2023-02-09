import React, { useState, useEffect } from 'react';

export const UserMenu = () => {
  const [posts, setPosts] = useState([]);
   useEffect(() => {
      fetch('http://ec2-52-23-176-81.compute-1.amazonaws.com:3004/api/products')
         .then((response) => 
            response.json()
         )
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);
   return (
    <div>
       <h1>Productos</h1>
       <br></br>
       <br></br>
       {posts.map((post) => {
          return (
            <div key={post.id}>
              <h2>{post.name}: {post.price}$</h2>
              <p>{post.description}</p>
              <p>{post.quantity} disponibles.</p>
            </div>
          );
       })}
    </div>
    );
}
