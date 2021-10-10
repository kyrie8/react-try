/*
 * @Author: your name
 * @Date: 2021-08-24 22:33:30
 * @LastEditTime: 2021-09-01 00:14:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-demo\src\App.tsx
 */
import React from 'react';
import {Route, Switch, useHistory, withRouter} from 'react-router-dom'
import './App.css';
//import SvgComponent from './components/svg/Index';
//import Modal from './components/popUp/Modal';
import Home from './views/Home'
import About from './views/about';
import Profile from './views/Profile';

function App() {
  /* const [isVisible, setVisible] = useState(false);
  const onClose = () => {
    console.log(1111111)
    setVisible(!isVisible)
  }
  

  useEffect(() => {
    console.log(isVisible)
  }); */

  const history = useHistory()


  const goHome = () => {
    history.push('/')
  }

  const handleItemClick = (item: number) => {
    console.log('item', item)
  }

  const renderTabar = () => {
    return (
      <div className="tabar">
        <div onClick={goHome}>home</div>
        <div onClick={() => history.push('/about')}>about</div>
        <div onClick={() => history.push('/profile')}>profile</div>
      </div>
    )
  }

  /* const renderConquer = () => {
    return <div className='wrapper'>
      <div className='scroll '>
      {[1,2,3,4,5,6,7,8].map(item => {
        return <div onClick={() => handleItemClick(item)} className='content' key={item}>{item}</div>
      })}
    </div>
    </div>
  } */

  return (
    <>
      {/* <div className="App">
      <SvgComponent/>
      <Modal onCancel={onClose} visible={isVisible}>
        <div style={{height: '115px', width: '100%'}}>
          <h3>45666666666</h3>
          <div>hhhhhhhhhhh</div>
          <span>kkkkkk</span>
        </div>
      </Modal>
      <button onClick={onClose}>kkkkkkkkkkkkkkkkkkkkk</button>
    </div> */}
    <Switch>
      <Route path='/' component={Home} exact></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/profile' component={Profile}></Route>
    </Switch>
    {/* {renderConquer()} */}
    {renderTabar()}
    </>
  );
}

export default withRouter(App);
