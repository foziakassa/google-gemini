import { useEffect , useState } from "react";
export default function Effect3(){
    const [x , setX]=useState(0)
    const [y , setY]=useState(0)
    function mouseEvent(e){
        console.log('hhhh')
        setX(e.clientX)
        setY(e.clientX)

    }
    useEffect(()=>{
        window.addEventListener('mousemove', mouseEvent)
    })
return(
    <>
    X-{x} Y-{y}
    </>
)
}