import './Header.css'
import Main from '../Main/Main'
import logo from '../Assets/logo.jpg'
export default function Header(){
    return(
        <div className="Header">
            <div className="name">
                <img src={logo} alt="" />
                <h3>XX Electronics Maintainance</h3>
            </div>
            <div className="Button">
                <a href=""> Home</a>
                <a href=""> Product</a>
                <a href=""> service</a>
                <a href=""> Contact</a>

            </div>
        </div>
    )
}