'use client';
import classes from './Header.module.css'
import Link from 'next/link';

export default function Header(){
    return(
        <div className={classes.Header}>
            <div className={classes.name}>
                {/* <img src={logo.src} alt="" /> */}
                <h1 className='text-2xl font-bold '>XX Electronics Maintainance</h1>
            </div>
            <div className={classes.Button}>
                <Link href='/'>Home</Link>
                <Link href="/Product"> Product</Link>
                <Link href='/Service'>service</Link>
                <Link href="/"> Contact</Link>

            </div>
        </div>
    )
}