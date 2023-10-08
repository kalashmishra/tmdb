"use client"
import React from 'react'
import Cards from './Cards'

import { useRouter } from 'next/navigation';
import { useState } from 'react'






const Feed = () => {
  const [query, setquery] = useState('');
  const router = useRouter();
  
 const handleSearch = (e) => {

  e.preventDefault()
     router.push(`/search?query=${query}`);
  
  };





  return (
    <section className='feed'>
  
  <form className='form' onSubmit={ handleSearch}>
      <input
      onChange={(e)=>{
        setquery(e.target.value)
      }}
        type='text'
        value={query}
        placeholder='Search for a movie or a TV show........'
        className='search_input peer'
      />
      

  

   <button type='submit' >Search</button>
 
   
    
   
   
    </form>
     <div>
      
      
   </div>
<Cards/>
  </section>

  )
}

export default Feed
