import { useEffect ,useState } from "react";
export default function(){
    const [count , setCount] = useState(0);
    const [name , setName]= useState('');
    useEffect(()=>{
        document.title={name}
        console.log("bjvnbjkgn");
    },
    
    [count])//array of values that the effect depand on 
    return (
        <>
         <input type="text" value={name} onChange={(e)=>{
            setName(e.target.value)
         }} />
         <button onClick={()=>{
            setCount(count+1)
         }}>increament </button>
        </>
    )

}