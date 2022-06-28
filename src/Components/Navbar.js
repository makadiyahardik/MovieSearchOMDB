import React , {useState}from 'react'
import './Navbar.css'
function Navbar() {
  const [search,setSearch]=useState('')
  return (
    <>
        <div className='movie_header'>
            <div className='main'>
<h3>The Movie</h3>
            </div>
            <div className='text_area'>
                <input type="text" placeholder='search here' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            </div>
        </div>
    </>
  )
}

export default Navbar