import React, { useState } from 'react';
import Store from '../store'
import Mask from '../components/Mask'
interface IProps {}

const Home: React.FC<IProps> = () => {
  const [visible, setVisible] = useState(false)
  const {increment, setMydes, des} = Store.useContainer()
  const increament = () => {
    increment()
  }
  const setName = () => {
    des.name = 'xiaoming'
    setMydes(des)
  }
  const setDes = () => {
    des.addres.city='shenzheng'
    setMydes(des)
  }
  const onClose = () => {
    setVisible(false)
  }
  return <div><span>Home</span><button onClick={increament}>++</button>
   <div><button onClick={setName}>name</button>---<button onClick={setDes}>des</button><button onClick={() => setVisible(true)}>kaiguan</button></div>
  <Mask visible={visible} onCancel={onClose}>
    <div className='pop'></div>
  </Mask>
  </div>
}

export default Home