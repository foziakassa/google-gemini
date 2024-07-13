
'use client'
import laptops from '../../Asset/Product/laptops.jpg'
import laptop2 from '../../Asset/Product/laptop2.jpg'
import mobailes from '../../Asset/Product/mobailes.jpg'
import classes from './Product.module.css'
import ProductList from './ProductList/page';
import mobaile from '../../Asset/Product/mobaile.jpg'
import desktop from '../../Asset/Product/desktop.jpg'
import cctvcamera from '../../Asset/Product/cctvcamera.jpg'
import printers from '../../Asset/Product/printers.jpg'
import phone from '../../Asset/Product/phone.jpg'
import mobaileaccessory from '../../Asset/Product/mobaileaccessory.jpg'


import useSwr from 'swr'
import fetcher from '@/shared/utils/fetcher'
export default function Product(){

  const {data , isLoading , error}=useSwr(
    "portal-product-and-services/get-products",
    fetcher

  )
  if(isLoading) return (
  <div className="">
    Loading...
  </div>
  )
  if(error) return (
  <div className="">
    error
  </div>
  )
  console.log(error)
  
  if(data){
    return(
      <div className={classes.xx}>
        <div className={classes.Service}>
          {/* <img src={logo.src} alt="" /> */}
          <h1 className='text-3xl font-bold'>Product Catagories</h1>

        </div>
        <div className={classes.CardList
        }>
            {data.data.map((item:any , index:number)=>(
                <div className={classes.Card} key={item.id}>
                    
                    <ProductList
                   key={index}
                   productData={item}
                    />
                    

                    </div>

            ))}
        </div>
        </div>

    )
  }
    // interface DataItem {
    //     id: number;
    //     title: string;
    //     description: string;
    //     imageUrl: any;
    //   }
      
    //   const data1: DataItem[] = [
    //     {
    //       id: 1,
    //       title: 'Mobailes',
    //       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
    //       imageUrl: mobailes
    //     },
    //     {
    //       id: 2,
    //       title: 'Laptops',
    //       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
    //       imageUrl: laptops
    //     },
    //     {
    //       id: 3,
    //       title: 'Desktops',
    //       description: 'Lor consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
    //       imageUrl: desktop
    //     },
    //     {
    //       id:4,
    //       title:'CCTV Camera',
    //       description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
    //       imageUrl:cctvcamera
    //     },
    //     {
    //       id: 5,
    //       title: 'Printers',
    //       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
    //       imageUrl: printers
    //     },
    //     {
    //       id: 5,
    //       title: 'Mobaile Accessory',
    //       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
    //       imageUrl: mobaileaccessory
    //     },    
    //   ];
      
    //   return(
    //     <div className={classes.xx}>
    //     <div className={classes.Service}>
    //       {/* <img src={logo.src} alt="" /> */}
    //       <h1 className='text-3xl font-bold'>Product Catagories</h1>

    //     </div>
    //     <div className={classes.CardList
    //     }>
    //         {data1.map((item)=>(
    //             <div className={classes.Card} key={item.id}>
                    
    //                 <ProductList
    //                 imag={item.imageUrl}
    //                 title={item.title}
    //                 des={item.description}
    //                 />
                    

    //                 </div>

    //         ))}
    //     </div>
    //     </div>
    //   )
}