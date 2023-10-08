"use client"

import { useEffect, useState } from 'react';
import axios from '@/utils/axios';

const Page = ({params}) => {
  
  
  const [movieDetails, setMovieDetails] = useState(null);
  let genreList = null;
  const getPosts = async () => {
    try {
      
        const { data } = await axios.get(`tv/${params.id}?api_key=ae62e0e1e676b510dc1c7f7b9a1d9b34 `);
        
        console.log(data)
      
        
        setMovieDetails(data);
       

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


if(movieDetails){
  const genres = movieDetails.genres
   genreList=genres.map((p)=>(
    <span key={p.id} className='genre'>{p.name}</span>
  ))
  const backdropPath = movieDetails.backdrop_path;

  const backdropImage = document.querySelector('.back');
  if (backdropImage){
    backdropImage.style.background=`linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.3)),url(https://image.tmdb.org/t/p/original/${backdropPath})`
 backdropImage.style.backgroundSize='cover'
//  backdropImage.style.backgroundPosition='center'
 
  }
}

  if (!movieDetails) {
    return <div>Loading...</div>;
  }
if(movieDetails){
 
}
  // Render movie details here

  return (
   <>
   <div className='back' >

          
      <div className='partition z-50'>
     <div className='l' >
  <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt="" /> 
    </div>
    <div className='r  '>
<h1 className=''>{movieDetails.name}</h1>
<div className='span'>
  <span>{movieDetails.first_air_date}</span>
  {genreList}
</div>
<div className=' details'>
    <h3 className='text-2xl font-semibold mt-5'> {movieDetails.tagline}</h3>
    <h1 className='text-4xl font-semibold mt-5'>Overview</h1>
    <p className='text-xl font-semibold mt-5' >{movieDetails.overview}</p>
</div>
    </div> 
  
     </div> 
   </div>
   </>
  );
};

export default Page;