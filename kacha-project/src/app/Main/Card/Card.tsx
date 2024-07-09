import './Card.css'
import BB from '../BB/page'
// import laptop from '../../Assets/laptop.png'
export default function Card({imag , title , des}:any){

    return (
        <div className="Card">
            <img src={imag.src} alt="" />
            <h1 className="text-2xl font-bold ">{title}</h1>
            <p>{des}</p>
            
            {/* <button>learn more</button> */}
            <button className="button2">Learn more</button>

        </div>
    )
}