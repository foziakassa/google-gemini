'use client';

import classes from './Header.module.css'
import Link from 'next/link';
import logo from '../../Assets/logo.jpg';
import { useEffect , useState } from "react";

export default function Header(){
   
    
    return(
        <div className={classes.Header}>
    

            <div className={classes.name}>
                <img src={logo.src} alt="" />
                <h1 className='text-2xl font-bold '>XX Electronics Maintainance</h1>
            </div>
            <div className={classes.Button}>
                <Link href='/'>Home</Link>
                
                <a href="/Gallery"> Product</a>
                
                <Link href='/Main/BB'>Card</Link>
                <Link href='/Main'>service</Link>
                <Link href='/HomePage'></Link>

                <a href="/"> Contact</a>

            </div>
        </div>
    )
}