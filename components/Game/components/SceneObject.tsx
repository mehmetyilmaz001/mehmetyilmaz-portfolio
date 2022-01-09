import { FunctionComponent } from "react";
import styled, { css, keyframes } from "styled-components";

interface SceneObjectProps {
  x?: number;
  y?: number;
}
const leftScrolling = keyframes`
  0% {left: 100%;}
  100% {left: -50%;}`;

const leftScrollAnimation = css` animation: ${leftScrolling} 95s linear infinite`

export const SceneObjectListContainer = styled.div<{
    bottom?: number
  }>`
    width: 100%;
    height: auto;
    position: absolute;
    bottom: ${({ bottom }) => bottom! | 0}px;
    ${leftScrollAnimation}
  `;
  

const Container = styled.div<SceneObjectProps>`
  position: absolute;
  bottom: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
`;

const SceneObject: FunctionComponent<SceneObjectProps> = ({
  children,
  x = 0,
  y = 0,
}) => {
  return (
    <Container x={x} y={y}>
      {children}
    </Container>
  );
};

export default SceneObject;
