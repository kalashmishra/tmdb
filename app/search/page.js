"use client"


import { useEffect, useState } from 'react';
import axios from '@/utils/axios';

function Search(query) {
 // console.log(context.searchParams.query)
  const q =query.searchParams.query
  //console.log(q)
  const [data, setData] = useState([]);
 

 
  //Fetch data based on the search query
  useEffect(() => {
    const getPosts = async () => {
  
    
      try {
          const { data } = await axios.get(`/search/multi?api_key=ae62e0e1e676b510dc1c7f7b9a1d9b34&query=${q}`);
          
          console.log(data.results)
        setData(data.results);
         
  
      } catch (error) {
          console.log(error);
      }
  };
getPosts();  
     
    
  },[q]);

 

  return (
    <div className='search'>
      <h1>Search Results</h1>
      {/* <ul>
        {data.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul> */}
      <div className='data-show'>
        {data.map((p)=>(
   <div key={p.id} className='search-card'>
   <div className='img1'>
     <img src={`https://image.tmdb.org/t/p/w500${p.poster_path}`} alt="" />
   </div>
   <div className='dets'>
     <h2>{p.title}</h2>
     <h3>{p.release_date}</h3>
     <p>{p.overview}</p>
   </div>
 </div>
))
        }
     
      </div>
      
    </div>
  );

  // Render the fetched data
 }

export default Search;