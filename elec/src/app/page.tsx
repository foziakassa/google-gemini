import Product from './Product/page';
import Service from './Service/page';
// import ProductCard from './Product/ProductCards';
import HomePage from './HomePage/page';

export default function Home(){
  return(
    <div className="">
      <HomePage/>
      <Product/>
      <Service/>
      {/* <ProductCard/> */}
     
     
      
     
    </div>
  )
}