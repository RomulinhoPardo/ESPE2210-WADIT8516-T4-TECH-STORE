import React, { useState, useEffect } from 'react';

export const UserPage = () => {
  const [posts, setPosts] = useState([]);
   useEffect(() => {
      fetch('http://ec2-52-23-176-81.compute-1.amazonaws.com:3004/api/users')
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
       <h1>Administradores</h1>
       <br></br>
       <br></br>
       {posts.map((post) => {
          return (
            <div key={post._id}>
              <h2>{post.name}$</h2>
              <p>{post.age} Años</p>
              <p>{post.email}</p>
            </div>
          );
       })}
    </div>
    );
}
