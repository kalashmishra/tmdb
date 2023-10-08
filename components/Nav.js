import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Nav = () => {
  return (
    <nav className='container1  '>
        <div className='left'>
            <Link href="/"> <Image src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'alt='logo'  width={150} height={150} className='object-contain' /> </Link>
            <div className='dropdown'>
                <h3>Movies</h3>
                <div className="dropdown-options ">
                <Link className='dropdown-link' href="/movie">Popular</Link>
                <Link className='dropdown-link' href="/movie/now-playing">Now Playing</Link>
                <Link className='dropdown-link' href="/movie/upcoming">Upcoming</Link>
               <Link className='dropdown-link' href="/movie/top-rated">Top Rated</Link>
             </div>
         </div>
         <div className='dropdown'>
                <h3>TV Shows</h3>
                <div className="dropdown-options ">
                <Link className='dropdown-link' href="/tv">Popular</Link>
                <Link className='dropdown-link' href="/tv/airing-today">Airing Today</Link>
                <Link className='dropdown-link' href="/tv/on-tv">On TV</Link>
               <Link className='dropdown-link' href="/tv/top-rated">Top Rated</Link>
             </div>
         </div>
                    </div>
        <div className='right '>
            <Link href=""><Image src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg" alt='icon' width={30} height={30} /></Link>
            
            <Link href="">Login</Link>
            <Link href="">Join TMDB</Link>

        </div>
    </nav>
  )
}

export default Nav