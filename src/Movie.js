import React,{useState} from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
function Movie() {
    const [text,setText]=useState("")

 const {data,isLoading,isError,error,status} =  useQuery("Title", getMovie)

function getMovie(){

 return axios.get(`https://www.omdbapi.com/?s=${text}&apikey=e1b7a53b`)




}
if(isLoading){
    return <h2>Loading....</h2>
}if(isError){
    return <h2>{error.message}</h2>
}
  return (
   <>
{/* navbar */}
<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <h1 className="navbar-brand">Navbar</h1>
    <form className="d-flex" action='' onSubmit={getMovie} >
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={text} onChange={(e)=>setText(e.target.value)}/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>


<div className='movie_data'>

{
    data?.data.Search.map((itemVal,index)=>{
        return(
            <>
            <div className='movie_area' key={index}>
            <img src={itemVal.Poster} alt={itemVal.Poster}/>
    <h1>{itemVal.Title}</h1>
    <p>{status}</p>
</div>
            </>
        )
    })
}

  </div>

   </>
  )
}

export default Movie