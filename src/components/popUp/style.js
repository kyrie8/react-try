
import styled from 'styled-components';

export const PopupWrappers = styled.div`
  /* display: block; */
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: #eee;
  overflow: hidden;
`

export const PopupContain = styled.div`
  position: relative;
  width: ${props => props.width ?? "50%"};
  height: ${props => props.height ?? "50%"};
  transform: translate(50%, 45%);
  background-color: #fff;

  .btn {
    position: absolute;
    bottom: -20px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .btn button {
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
`