import "./Card.css";
import Button from "../Button/Button";
import { useState } from "react";
import Header from "../Header/Header"

export default function Card() {
  const foods = [
    {
      id: 1,
      name: "sushi",
      ingredient: ["fish", "vegies", "gbhg"],
      price: 200

    },
    {
      id: 2,
      name: "sushi",
      ingredient: ["fish", "vegies", "gbhg"],
      price: 200

    },
    {
      id: 3,
      name: "sushi",
      ingredient: ["fish", "vegies", "gbhg"],
      price: 200

    },
    {
      id: 4,
      name: "sushi",
      ingredient: ["fish", "vegies", "gbhg"],
      price: 200

    },
    {
      id: 5,
      name: "sushi",
      ingredient: ["fish", "vegies", "gbhg"],
      price: 200
    },
  ];
  // const [counts, setCounts] = useState(Array(foods.length).fill(0));
  const [counts, setCounts] = useState(0);

  const [num , setNum]=useState(1);
   function onClickHandler(){
    setCounts((counts +1)* num )
    document.title='mieieiei'

  }

  return (
    <div className="">
       <Header count={counts}/>

       <div className="Card" >
      <section>
       
        <div>
          {foods.map((food, index) => (
            <div key={food.id}>
              <div className="space">
                <div className="foodname">
                  <h3>{food.name}</h3>
                  
                  <ul>
                    {food.ingredient.map((ing, index) => (
                      <li key={index}>{ing}, </li>
                    ))}
                  </ul>
                  <p className="price">${food.price}</p>
                </div>
                <div className="foodbutton">
                  <div className="left">
                    <div className="left-top">
                      <h3>Amount</h3>
                      <input placeholder='0'
                      value={num}
                      onChange={(e)=>{
                        setNum(e.target.value)
                      }}
                      />
                    </div>
                    <Button onClick={() => onClickHandler()} />
                  </div>
                </div>
              </div>
              {food.id !== foods.length && <hr className="breaking-line" />}
            </div>
          ))}
        </div>
      </section>
    </div>

    </div>
   
  );
}