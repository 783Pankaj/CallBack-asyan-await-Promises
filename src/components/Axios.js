import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

const Axios = () => {
  const[myData, setMyData] = useState([]);
  const[isError, setIsError]= useState("");

  //Note: using Promises
  // useEffect(()=>{
  //  axios.get("https://jsonplaceholder.typicode.com/posts")
  // //  .then((res)=>console.log(res))
  //  .then((res)=>setMyData(res.data))
  //  .catch((err)=>setIsError(err.message));
  // },[]);



  //Note: useing Asyan await

  let url = "https://jsonplaceholder.typicode.com/posts";

const getApiData= async()=>{
  try{
    const res = await axios.get(url);
    setMyData(res.data);
    
  }catch(error){
    setIsError(error.message);
  }
}
  useEffect(()=>{
      getApiData();
  },[])
console.log(myData)
  return (
    <> 
    <h2>hello axios</h2>
    {isError==="" && <h2>{isError}</h2>}
    <div className='grid'>
       {myData.slice(0,20).map((post)=>{
        const {id, title,body } = post
        return <div className='card' key={id}>
          <h1>{id}</h1>
         <h2> {title.slice(0,15).toUpperCase()}</h2>
         <h2>{body.slice(0, 100).toLowerCase()}</h2>
        </div>
       })}
    </div>
    </>
  )
}

export default Axios
