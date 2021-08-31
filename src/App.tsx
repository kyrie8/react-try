/*
 * @Author: your name
 * @Date: 2021-08-24 22:33:30
 * @LastEditTime: 2021-09-01 00:14:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-demo\src\App.tsx
 */
import React, {useState, useEffect} from 'react';
import './App.css';
import SvgComponent from './components/svg/Index';
import Modal from './components/popUp/Modal';

function App() {
  const [isVisible, setVisible] = useState(false);
  const onClose = () => {
    console.log(1111111)
    setVisible(!isVisible)
  }

  useEffect(() => {
    console.log(isVisible)
  });

  return (
    <div className="App">
      {/* <SvgComponent/> */}
      <Modal onCancel={onClose} visible={isVisible}>
        <div style={{height: '115px', width: '100%'}}>
          <h3>45666666666</h3>
          <div>hhhhhhhhhhh</div>
          <span>kkkkkk</span>
        </div>
      </Modal>
      <button onClick={onClose}>kkkkkkkkkkkkkkkkkkkkk</button>
    </div>
  );
}

export default App;
