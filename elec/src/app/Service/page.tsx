'use client'
import useSwr from 'swr'
import fetcher from '@/shared/utils/fetcher'
import homeelec from '../../Asset/homeelec.jpg'
import laptop from '../../Asset/laptor.jpg'
import cctv from '../../Asset/cctv.jpg'
import phone from '../../Asset/phone.jpg'
import desktop from '../../Asset/desktop.jpg'
import delivery from '../../Asset/delivery.jpg'
import electronics from '../../Asset/electronics.jpg'
import electronicsrepair from '../../Asset/electronics-repair.jpg'
import './Service.css'
import Card from './Card/Card'
// import BB from './BB/page'
export default function Main(){
    // interface DataItem {
    //     id: number;
    //     title: string;
    //     description: string;
    //     imageUrl: any;
    //   }
      const { data, isLoading, error } = useSwr(
        "/portal-product-and-services/get-services",
        fetcher
      );
    
      if (isLoading) return 
      (
      <div>Loading...</div>
      )
      if (error) return (
      <div>Error</div>
    )
      if(data){
        return(
          <div className="">
             <div className="xx">
        <div className="Service">
          {/* <img src={logo.src} alt="" /> */}
          <h1 className='text-3xl font-bold'>Our Services</h1>

        </div>
        <div className="CardList">
            {data.data.map((item:any, index:number)=>(
                <div className="Card" key={item.id}>
                    
                    <Card 
                    key={index}
                    serviceData={item}
                    />

                    </div>

            ))}
        </div>
        </div>
            
          </div>
        )
      }
      
      // const data1: DataItem[] = [
      //          {
      //     id: 1,
      //     title: 'Laptop repair & sales',
      //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
      //     imageUrl: laptop
      //   },
      //   {
      //     id: 2,
      //     title: 'Desktop repair & sales',
      //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
      //     imageUrl: desktop
      //   },
      //   {
      //     id: 3,
      //     title: 'CCTV Camera installation & repair',
      //     description: 'Lor consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
      //     imageUrl: cctv
      //   },
      //   {
      //     id:4,
      //     title:'Phone sales & repair',
      //     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
      //     imageUrl:phone
      //   },
      //   {
      //     id: 5,
      //     title: 'Home electronics repair & sales',
      //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
      //     imageUrl: homeelec
      //   },
      //   {
      //     id: 6,
      //     title: 'Delivery',
      //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
      //     imageUrl: delivery
      //   },
        
       
        
      // ];
      
      // return(
      //   <div className="xx">
      //   <div className="Service">
      //     {/* <img src={logo.src} alt="" /> */}
      //     <h1 className='text-3xl font-bold'>Our Services</h1>

      //   </div>
      //   <div className="CardList">
      //       {data1.map((item)=>(
      //           <div className="Card" key={item.id}>
                    
      //               <Card 
      //               imag={item.imageUrl}
      //               title={item.title}
      //               des={item.description}
      //               />

      //               </div>

      //       ))}
      //   </div>
      //   </div>
      // )
}