import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from 'react-transition-group'
import './mask.css'
interface Iprops {
    onCancel?: () => void;
    visible: boolean;
    children: React.ReactNode
}

const Mask: React.FC<Iprops> = (props) => {
  const [state, setstate] = useState(true)
  const {visible} = props
  const onClose = () => {
    setstate(true)
    props.onCancel?.()
  }
  if (!visible) {
    return null
  } else {
    return ReactDOM.createPortal(
      <div className="mask" onClick={() => setstate(false)}>
        <CSSTransition 
         in={state}
         timeout={2000}
         classNames="card"
         unmountOnExit
         onExited={onClose}
         appear
        >
        {props.children}
        </CSSTransition>
        </div>,
      document.body as Element
    )
  }
  
  
}

Mask.defaultProps = {
  visible: false
}

export default Mask