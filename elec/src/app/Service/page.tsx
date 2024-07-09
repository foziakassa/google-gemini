// // import Card from './Card/Card'
// import laptop from '../../Assets/laptop.png'
// import desktop from '../../Assets/desktop.jpg'
// import cctvcamera from '../../Assets/cctvcamera.jpg'
// import printer from '../../Assets/printer.jpg'
// import camera from '../../Assets/camera.jpg'
// import logo from '../../Assets/logo.jpg'
import homeelec from '../../Asset/homeelec.jpg'
import laptop from '../../Asset/laptor.jpg'
import cctv from '../../Asset/cctv.jpg'
import phone from '../../Asset/phone.jpg'
import desktop from '../../Asset/desktop.jpg'
import './Service.css'
import Card from './Card/Card'
// import BB from './BB/page'
export default function Main(){
    interface DataItem {
        id: number;
        title: string;
        description: string;
        imageUrl: any;
      }
      
      const data: DataItem[] = [
        {
          id: 1,
          title: 'Laptop repair & sell',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
          imageUrl: laptop
        },
        {
          id: 2,
          title: 'Desktop repair & sell',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
          imageUrl: desktop
        },
        {
          id: 3,
          title: 'CCTV Camera installation & repair',
          description: 'Lor consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
          imageUrl: cctv
        },
        {
          id:4,
          title:'Phone sell & repair',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
          imageUrl:phone
        },
        {
          id: 5,
          title: 'Home electronics repair & sell',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
          imageUrl: homeelec
        },
        
       
        
      ];
      
      return(
        <div className="xx">
        <div className="Service">
          {/* <img src={logo.src} alt="" /> */}
          <h1 className='text-3xl font-bold'>Our Services</h1>

        </div>
        <div className="CardList">
            {data.map((item)=>(
                <div className="Card" key={item.id}>
                    
                    <Card 
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