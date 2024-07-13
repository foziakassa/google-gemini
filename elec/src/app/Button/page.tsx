import classes from './Button.module.css'
export default function Button({onClick , count}:any){

    return(
        <div className={classes.button}>
        <button onClick={onClick}>
        <p>your Cart<span>{count}</span></p>
        </button>
        </div>
      )
}