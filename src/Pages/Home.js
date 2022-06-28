import React, { useEffect, useState } from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'
function Home() {
    const [text,setText]=useState("")
    const [item,setItem]=useState([])
 

function getData  (e)  {
    e.preventDefault()
const res = axios.get(`https://www.omdbapi.com/?s=${text}&apikey=e1b7a53b`)
.then((res)=>{
    console.log(res.data.Search);
    setItem(res.data.Search)

  
})



}

  return (
    <>
     

     <nav className="navbar navbar-dark bg-dark px-4" >
  <div className="container-fluid head">
    <a className="navbar-brand ">The Movie</a>
    <form className="d-flex mx-2" onSubmit={getData}>
      <input className="form-control mx-1"  type="search" placeholder="Search here" aria-label="Search" value={text} onChange={(e)=>setText(e.target.value)}/>
      <button className="btn btn-outline-success mx-1" type="submit">Search</button>
    </form>
  </div>
</nav>


  <div className='movie_data'>

{
    item.filter((val)=>{
     if(val===""){
return val
     }else if(val.Title.toLowerCase().includes(text)){
      return val
     }
    }).map((itemVal,index)=>{
        return(
            <>
            <div className='movie_area' key={index}>
            <img src={itemVal.Poster} alt={itemVal.Poster}/>
    <h1>{itemVal.Title}</h1>
    <h4>Year : {itemVal.Year}</h4>

</div>
            </>
        )
    })
}

  </div>
    </>
  )
}

export default Home