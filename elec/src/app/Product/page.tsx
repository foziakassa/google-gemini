
import laptops from '../../Asset/Product/laptops.jpg'
import classes from './Product.module.css'
import ProductList from './ProductList/page';
import mobaile from '../../Asset/Product/mobaile.jpg'
import desktop from '../../Asset/Product/desktop.jpg'
import cctvcamera from '../../Asset/Product/cctvcamera.jpg'
import printers from '../../Asset/Product/printers.jpg'
import mobaileaccessory from '../../Asset/Product/mobaileaccessory.jpg'
export default function Product(){
    interface DataItem {
        id: number;
        title: string;
        description: string;
        imageUrl: any;
      }
      
      const data: DataItem[] = [
        {
          id: 1,
          title: 'Mobailes',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
          imageUrl: mobaile
        },
        {
          id: 2,
          title: 'Laptops',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
          imageUrl: laptops
        },
        {
          id: 3,
          title: 'Desktops',
          description: 'Lor consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
          imageUrl: desktop
        },
        {
          id:4,
          title:'CCTV Camera',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
          imageUrl:cctvcamera
        },
        {
          id: 5,
          title: 'Printers',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
          imageUrl: printers
        },
        {
          id: 5,
          title: 'Mobaile Accessory',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
          imageUrl: mobaileaccessory
        },    
      ];
      
      return(
        <div className={classes.xx}>
        <div className={classes.Service}>
          {/* <img src={logo.src} alt="" /> */}
          <h1 className='text-3xl font-bold'>Product Catagories</h1>

        </div>
        <div className={classes.CardList
        }>
            {data.map((item)=>(
                <div className={classes.Card} key={item.id}>
                    
                    <ProductList
                    imag={item.imageUrl}
                    title={item.title}
                    des={item.description}
                    />
                    

                    </div>

            ))}
        </div>
        </div>
      )
}