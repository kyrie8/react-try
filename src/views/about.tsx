import React, {useState} from 'react';

import Store from '../store'

interface IProps {}

const About: React.FC<IProps> = () => {
  const [state, setstate] = useState(0)
  const { couter, des } = Store.useContainer()
  const handleItemClick = (item: number) => {
    console.log('item', item)
    setstate(item)
  }
  const renderConquer = () => {
    return <div className='wrapper'>
      <div className='scroll '>
      {[1,2,3,4,5,6,7,8].map(item => {
        return <div onClick={() => handleItemClick(item)} className='content' key={item}>{item}--{couter}</div>
      })}
    </div>
    </div>
  }
  return <div className={state === 1 ? 'about' : ''}>
    <div>
    <span>about</span>
    <span>{des.name}--{des.addres.province}--{des.addres.city}</span>
  {renderConquer()}
    </div>
  </div>
}

export default About