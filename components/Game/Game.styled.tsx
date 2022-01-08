import styled, { css, keyframes } from "styled-components";

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

const Ground = styled.div`
  position: absolute;
  bottom: 0;
  height: 5px;
  width: 100%;
  background: linear-gradient(90deg, blue 50%, transparent 50%),
    linear-gradient(90deg, blue 50%, transparent 50%),
    linear-gradient(0deg, blue 50%, transparent 50%),
    linear-gradient(0deg, blue 50%, transparent 50%);
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 15px 4px, 15px 4px, 4px 15px, 0px 15px;
  background-position: 0px 0px, 200px 100px, 0px 100px, 200px 0px;
  animation: ${borderRotate} 10s infinite linear;
`;


export { Container, Ground };
