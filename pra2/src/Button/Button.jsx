import './Button.css';
export default function Button({onClick}){
    return(
        <div className="button">
        <button onClick={onClick}>
          Add User
        </button>
        </div>
      )
}