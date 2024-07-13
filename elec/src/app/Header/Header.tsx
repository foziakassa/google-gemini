"use client";
import { useState } from "react";
// import Button from "../Button/page";
import classes from "./Header.module.css";
import Link from "next/link";
import Modals from "../Modals/page";
import { FaQuestion } from "react-icons/fa6";

export default function Header({count}:any) {
  function kk(){

  }
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
    <div className="">
      <div className={classes.Header}>
      <div className={classes.name}>
        {/* <img src={logo.src} alt="" /> */}
        <h1 className="text-2xl font-bold ">XX Electronics Maintainance & Sales</h1>
      </div>
      <div className={classes.Button}>
        {/* <Link href="/HomePage">Home</Link> */}
        <Link href='/'>HOME</Link>

        <Link href="/Product"> Product</Link>
        <Link href="/Service">service</Link>
        <Link href="/Contact"> Contact</Link>
        <Link href='/FAQ'>F.A.Q</Link>
        {/* <Link href='/Feedback'>Feedback</Link> */}
        {/* <FaQuestion/> */}
        {/* <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <FaQuestion />
      </a>? */}
       

      </div>
      {/* <div className={classes.cartButton}>
      <Button onClick={kk}  count={10}/>

      </div> */}
      <Modals 
      visibles={visible}
      showModal={showModals}
      handleCancel={handleCancels}
      handleOk={handleOks}
      
      />
      
    </div>
    

    </div>
    
  );
}
