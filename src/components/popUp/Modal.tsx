/*
 * @Author: your name
 * @Date: 2021-08-31 21:52:53
 * @LastEditTime: 2021-09-01 00:09:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-demo\src\components\popUp\Modal.tsx
 */
import React, {memo, useEffect, useState} from "react";
import ReactDOM from 'react-dom'
import {Mask} from './modalStyle'

interface IProps {
  onCancel: () => void;
  visible: Boolean;
  children: React.ReactNode
}

const Modal:React.FC<IProps> = (props) => {
  const [target, setTarget] = useState<null|HTMLElement>(null)
  useEffect(() => {
    let div: HTMLElement | null = null
    if (props.visible) {
      div =  document.createElement('div')
      div.setAttribute('id', 'mask')
      document.body.appendChild(div)
      setTarget(document.getElementById('mask'))
    } else {
      div && document.body.removeChild(div as unknown as HTMLElement)
    }
    return () => {
      div && document.body.removeChild(div as HTMLElement)
    }
  }, [props.visible])

  const onClose = () => {
    props.onCancel()
  }

  return target && ReactDOM.createPortal(
    <>
    <Mask onClick={onClose}>
      {/* <div className="mask" ></div> */} 
    </Mask>
    <div className="content">{props.children}</div>
    </>
    , target as Element)
}

Modal.defaultProps = {
  visible: false
}

export default memo(Modal)