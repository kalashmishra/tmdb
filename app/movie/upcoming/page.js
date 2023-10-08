"use client"
import axios from "@/utils/axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
const page = () => {
  const [posts, setPosts] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const getPosts = async () => {
    
    try {

      const { data } = await axios.get(`movie/upcoming?api_key=ae62e0e1e676b510dc1c7f7b9a1d9b34&_start=${posts.length}&page=${page}`);


      
     if(data.results.length === 0 ){

       sethasMore(false);
       return;
    } 

      setPosts( [...posts ,...data.results]);
 


    



    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    console.log("Api called!");
    getPosts();
    return (
      console.log('delete api')
    )
  }, [page]);

  const loadMore = ()=>{
   setpage(page + 1);
   // console.log(setpage(page + 1))
  }
  return (
    <div className='container2 mt-8'>
        <h1>Upcoming</h1>
      
        <div className='cards mt-5 mx-20'>
          <div className='card '>
           <InfiniteScroll className="flex flex-wrap gap-5"
                           dataLength={posts.length}
                           next={loadMore}
                           hasMore={hasMore}
                           loader={<p style={{ textAlign: "center" }}>Loading...</p>}
                           endMessage={
                               <p style={{ textAlign: "center" }}>
                                   <b>Yay! You have seen it all</b>
                               </p>
                           }
           
           >
            {
            posts.length !== 0
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
              </InfiniteScroll>
          </div>

        </div>

      </div>

  

  )
}

export default page