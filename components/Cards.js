// "use client"
// import React from 'react'
// import Link from 'next/link'
// import { useState , useEffect } from 'react';
// import axios from "@/utils/axios";
// const Cards = () => {
//   const [All, setAll] = useState([]);
  
//   const getPosts = async () => {
//       try {
//           const { data } = await axios.get("/day?api_key=ae62e0e1e676b510dc1c7f7b9a1d9b34 ");
        
//           setAll(data)
//           console.log(setall)
//       } catch (error) {
//           console.log(error);
//       }
//   };

//   useEffect(() => {
//     console.log("Api called!");
//     getPosts();
// }, []);


//   return (
//     <section className='cards'>
// <h1>Tranding</h1>
// <div className='card'>

//   {All.length !== 0
//                 ? All.map((p,i) => 
//                     console.log(p)
//                   )
//                 : ""}
   
//     {/* <div className='card-list'>
//         <div className='poster-img'><img src="" alt="" /></div>
//         <div className='content'>
//           <h2>Meg 2: The Trench</h2>
//           <p>Aug 02, 2023</p>
//         </div>
        
//     </div>
//      */}
    
// </div>
//     </section>
//   )
// }

// export default Cards
"use client";
// import Show from "@/components/Show";
import axios from "@/utils/axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";


const Cards = () => {
    const [posts, setPosts] = useState([]);
   // const [hasMore, sethasMore] = useState(true);

 
  

    // const [show, setShow] = useState(false);

    const getPosts = async () => {
        try {
          
            const { data } = await axios.get(`trending/all/day?api_key=ae62e0e1e676b510dc1c7f7b9a1d9b34 `);
            
          
            
           // console.log(result)
           setPosts(data.results);
           

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log("Api called!");
        getPosts();
        return(
            console.log('delete api')
        )
    }, []);
    

    return (
      <section className='cards mt-48'>
       <h1>Tranding</h1>
      <div className='card card1'>
      
     
      {posts.length !== 0
                    ? posts.map((p) => 
                    <Link href={`/movie/${p.id}`}>  
                    <div className='card-list' key={p.id}>
                    <div className='poster-img'><img src={`https://image.tmdb.org/t/p/w500${p.poster_path}`} alt="" /></div>
                  <div className='content'>
                    <h2>{p.title}</h2>
                  <p>{p.release_date}</p>
                   </div>
                    
                </div>
                </Link>
                       )
                     : ""}
                

         
      </div>
          </section>
      
    );
};

export default Cards;
