import './Header.css'
import Link from 'next/link';
export default function Header(){
    return(
        <div className="Header">
            <div className="name">
                <img src='' alt="" />
                <h1>XX Electronics Maintainance</h1>
            </div>
            <div className="Button">
                <Link href='/HomePage'>Home</Link>
                
                <a href=""> Product</a>
                
                <Link href='/mm'>mmm</Link>
                <Link href='/Main'>service</Link>

                <a href=""> Contact</a>

            </div>
        </div>
    )
}