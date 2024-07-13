import { Modal, Button } from 'antd';
import Cart from '../Cart/page';
import Feedback from '../Feedback/page';
import Link from 'next/link';
import { FaQuestion } from 'react-icons/fa6';
export  default function Modals({visibles  , showModal , handleOk, handleCancel}:any) {
    return (
      <div>
        <button  onClick={showModal}>
          
        
        <Link href="/" rel="noopener noreferrer">
        <FaQuestion className="animate-spin text-5xl text-blue-500 font-bold" />
      </Link>
      </button>
        <Modal
          title="Basic Modal"
          open={visibles}
          onOk={handleOk}
          onCancel={handleCancel}
        >
         
         <Feedback/>
        </Modal>
      </div>
    );
  }


