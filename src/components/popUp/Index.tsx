

import React, { memo } from "react";

import {PopupWrappers, PopupContain} from './style'

type Close = (event?: HTMLElement) => void

interface IProps {
  width?: string,
  height?: string,
  onClose: Close,
  close: boolean,
  children: React.ReactNode,
}

const Popup:React.FC<IProps> = (props) => {
  console.log(props)
  const isClose = () => {
    props.onClose()
  }
  return (
    <div style={{display: props.close? 'block' : 'none'}}>
    <PopupWrappers>
      <PopupContain>
        {props.children}
       <div className="btn">
         <button onClick={isClose}>x</button>
       </div>
      </PopupContain>
    </PopupWrappers>
    </div>
  )
}

export default memo(Popup)

