

import Product from './Product/page';
import Service from './Service/page';
// import ProductCard from './Product/ProductCards';
import HomePage from './HomePage/page';
import Contact from './Contact/page';
import Homee from './Homee/page';
import About from './About/page.';
import ProductList from './Product/ProductList/page';

export default function Home(){
  return(
    <div className="">
      {/* <HomePage/> */}
      <Homee/>
      {/* <Product/> */}
      {/* <Contact/> */}
      <About/>
      <Product/>
      <Service/>

      {/* <ProductCard/> */}
      <Contact/>
     
     
      
     
    </div>
  )
}