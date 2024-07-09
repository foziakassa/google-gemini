import Card from './Card/Card'
import laptop from '../../Assets/laptop.png'
import desktop from '../../Assets/desktop.jpg'
import cctvcamera from '../../Assets/cctvcamera.jpg'
import printer from '../../Assets/printer.jpg'
import camera from '../../Assets/camera.jpg'
import logo from '../../Assets/logo.jpg'
import './Main.css'
import BB from './BB/page'
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
          title: 'Laptop repair',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
          imageUrl: ''
        },
        {
          id: 2,
          title: 'Desktop repair',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
          imageUrl: ''
        },
        {
          id: 3,
          title: 'CCTV Camera installation',
          description: 'Lor consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
          imageUrl: ''
        },
        {
          id:4,
          title:'Printer repair',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
          imageUrl:''
        },
        {
          id: 5,
          title: 'Laptop repair',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
          imageUrl: laptop
        },
        {
          id: 5,
          title: 'Laptop repair',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
          imageUrl: laptop
        },
        {
          id: 5,
          title: 'Laptop repair',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequuntur aperiam asperiores ab,.',
          imageUrl: laptop
        },
       
        
      ];
      
      return(
        <div className="xx">
        <div className="Service">
          <img src={logo.src} alt="" />
          <h1 className='text-3xl font-bold'>Our Services</h1>

        </div>
        <div className="CardList">
            {data.map((item)=>(
                <div className="Card" key={item.id}>
                    
                    <BB 
                    // imag={item.imageUrl}
                    title={item.title}
                    des={item.description}
                    />

                    </div>

            ))}
        </div>
        </div>
      )
}