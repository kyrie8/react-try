/*
 * @Author: your name
 * @Date: 2021-08-31 22:00:57
 * @LastEditTime: 2021-09-01 00:39:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-demo\src\components\popUp\modal.js
 */
import styled from 'styled-components';

export const Mask = styled.div`
  position: absolute;
    background-color: #eee;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 1;


  & + .content {
    position: absolute;
    top: 120%;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 9;
    background-image: url(${require("../../logo512.png").default});
    background-repeat: no-repeat;
    background-size: cover;
    animation: myMove 2s;
    animation-fill-mode:forwards;
    transition: top 2s, left 2s;
  }

  @keyframes myMove {
    from {
      top: 120%;
      left: 50%;
      transform: translate(-50%, 0%);
    }
    to {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

`