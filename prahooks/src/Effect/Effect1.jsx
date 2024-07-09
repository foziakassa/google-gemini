import { useEffect , useState } from "react"
export default function Effect1(){
    const [count , setCount]=useState(0)
    useEffect(()=>{
        document.title=` ${count}`
    })
    return(
        <>
       
            <button onClick={()=>{
                setCount(pre=>pre+1)
            }}><h1>I am hear</h1></button>
       
        </>
    )
}