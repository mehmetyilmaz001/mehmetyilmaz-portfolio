import { FunctionComponent } from "react";
import styled from "styled-components";

interface FigureProps {
    x: number;
    y: number;
}


const StyledFigure = styled.figure.attrs<FigureProps>(({ x  = 10, y }) => ({
    style: {
        top: y,
        left: x,
    }
}))`
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #fff;
`
 
const Figure: FunctionComponent<FigureProps> = (props) => {
    return ( 
        <StyledFigure {...props} />
     );
}
 
export default Figure;