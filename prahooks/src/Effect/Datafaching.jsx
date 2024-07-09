import { useState , useEffect } from "react";
import axios from 'axios'
export default function Axioses(){
    const [posts , setPost]=useState([])
    useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then((res)=>{
        setPost(res.data)
        
console.log(res)
       })
       .catch(err=>{
        console.log(err)
       }

       )

    },[])
    return(
        <div className="">
   <ul>
    {posts.filter(post=>
        <li key={post.id}>{post.title}</li>
    )}
</ul>
        </div>
    )
}