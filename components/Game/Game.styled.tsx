import styled, { css, keyframes } from "styled-components";
import man from './assets/man.png'

const Container = styled.div`
  position: relative;
  height: 130px;
  width: 100%;
  bottom: 0;
  /* border: solid 1px red; */
`;

const borderRotate = keyframes`
 100% {
    background-position: 0px 0px, 300px 116px, 0px 150px, 216px 0px;
  }
  0% {
    background-position: 300px 0px, 0px 116px, 0px 0px, 216px 150px;
  }
`;


const jumpFrames = keyframes`
  0% { bottom: 0; }
  /* 30% { bottom: 100px; }
  70% { bottom: 100px; } */
  20% { bottom: 150px; }
  30% { bottom: 100px; }
  50% { bottom: 50px; }
  60% { bottom: 40px; }
`
const walkFrames = keyframes`
  0%{background-position: 0px;}
  100%{background-position: -405px;}
`

export const Character = styled.div.attrs<{x: number}>(props => ({
  style: {
    left: props.x + "px",
  }
}))<{
  jump: boolean,
  x: number
}>`
  /* border: solid 1px red; */
  background: url(${man.src}) no-repeat;
  width: 50px;
  height: 90px;
  position: absolute;
  bottom: 0;
  background-size: auto 90px;
  /* ${({jump}) => jump && css`animation: ${jumpFrames} 500ms ease-in-out infinite, ${walkFrames}  5s linear infinite;`}  */
  
  animation: ${({jump}) => jump && css`${jumpFrames} 500ms infinite,`}  ${walkFrames} 1.2s steps(${({jump}) => jump ? 1 : 8}) infinite; 
`;



const boxMoveFrames = keyframes`
  0% {left: 100%;}
  100% {left: -20%}
`

export const BoxContainer = styled.div`
  position: absolute;
  bottom: 0;
  animation: ${boxMoveFrames} 10s infinite;
`

export const Box = styled.div<{
  size: number,
  x?: number
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: absolute;
  bottom: 1px;
  left: ${({x}) => x ? `${x}px`: '100%'};
  width: ${({size}) => size * 2}px;
  height: ${({size}) => size * 2}px;
  border-radius: 20px;
  
`

const Ground = styled.div`
  position: absolute; 
  bottom: 0;
  height: 5px;
  width: 100%;
  background: linear-gradient(90deg, ${({theme}) => theme.text} 50%, transparent 50%),
    linear-gradient(90deg, ${({theme}) => theme.text} 50%, transparent 50%),
    linear-gradient(0deg, ${({theme}) => theme.text} 50%, transparent 50%),
    linear-gradient(0deg, ${({theme}) => theme.text} 50%, transparent 50%);
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 15px 4px, 15px 4px, 4px 15px, 0px 15px;
  background-position: 0px 0px, 200px 100px, 0px 100px, 200px 0px;
  animation: ${borderRotate} 11s infinite linear;
`;


export { Container, Ground };
