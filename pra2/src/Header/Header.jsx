import "./Header.css";
import Modals from "../Modals/Modals";
import { useState } from "react";
export default function Header({count}) {
  const [visible , setVisible]=useState(false)
  function showModals(){
    setVisible(true)
  }
  function handleOks(){
    setVisible(false)
  }
  function handleCancels(){
    setVisible(false)
  }
   

  return (
    <div className="Header">
      <div className="">
        <h1>ReactMeals</h1>
      </div>

      <div className="cartButton">
        <button  onClick={showModals}><p>your Cart<span>{count}</span></p></button>
        
      </div>
      <Modals 
      visibles={visible}
      showModal={showModals}
      handleCancel={handleCancels}
      handleOk={handleOks}
      
      />
      <div>
     
      
    </div>
    </div>
    

  );
}
