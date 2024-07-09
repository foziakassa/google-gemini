import './Card.css'
// import laptop from '../../Assets/laptop.png'
export default function Card({imag , title , des}:any){

    return (
        <div className="Card">
            <img src={imag} alt="" />
            <h3>{title}</h3>
            <p>{des}</p>
            <button>learn more</button>
        </div>
    )
}