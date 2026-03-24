import React from 'react';
import {useState , useEffect} from 'react';
import axios from './axios'

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title , fetchUrl , isLargeRow}){
  const[movies,setmovies]=useState([]);
//snippet of code which runs on a specific condition , it runs everytme the value of the variale present in the array changes
//anytime if a variable is used inside the async function inside the array , then it should always be inside the array , because it is dependent on the variable
useEffect(()=> {
async function fetchData(){
const request= await axios.get(fetchUrl);
setmovies(request.data.results);
return request;
} 

fetchData();

}, [fetchUrl]);
//everytime the row loads , we want the information from the endpoint
//useEffect takes two arguments a function and an array
    return(
        
    <div className="row">
     <h2>{title}</h2>
     <div className="row__posters" >
      {/* several row__posters */}

      {movies.map(movie =>(
        <img 
        key={movie.id}
        /*giving each movie a unique idenity so that if anything changes in the row , react doesnt render the entire row, but only what is needs to re-render*/
        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
        src={`${base_url}${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name } />
      ))}


     </div>
    </div>
    


      );
}

export default Row;