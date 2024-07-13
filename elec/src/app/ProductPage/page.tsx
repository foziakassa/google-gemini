import samsung from "../../Asset/Phone/samsung.jpg";
import sumsunga3 from '../../Asset/Phone/samsunga3.jpg'
import ProductList from "./PhoneList/page";
import techno from '../../Asset/Phone/tecnospark.jpg';
import nokia from '../../Asset/Phone/nokia.jpg'
import samsung2 from '../../Asset/Phone/samsung2.jpg'
import samsung3 from '../../Asset/Phone/samsung3.jpg'
import samsung0 from '../../Asset/Phone/samsung0.jpg'
export default function ProductPage() {
  interface phone {
    name: string;
    price: string;
    image: any;
    des: string;
  }

  const data: phone[] = [
    {
      name: "Samsung",
      price: "$34",
      image: samsung0,
      des: "",
    },
    {
      name: "Samsung",
      price: "$34",
      image: sumsunga3,
      des: "",
    },
    {
      name: "Samsung",
      price: "$34",
      image: techno,
      des: "",
    },
    {
        name: "Samsung",
        price: "$34",
        image: samsung2,
        des: "",
      },
      {
        name: "Samsung",
        price: "$34",
        image: nokia,
        des: "",
      },
      {
        name: "Samsung",
        price: "$34",
        image: samsung3,
        des: "",
      },
    //   {
    //     name: "Samsung",
    //     price: "$34",
    //     image: nokia,
    //     des: "",
    //   },
  ];

  return (
    <div className="grid grid-cols-4 gap-x-2 gap-y-8 p-24 ">
        
      {data.map((item) => (
        <div className="">
          <ProductList 
          name={item.name} 
          imag={item.image} 
          price={item.price} />
        </div>
      ))}
    </div>
  );
}
