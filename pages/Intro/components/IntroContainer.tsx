import styled from "styled-components";
import theme from "../../../style/theme";

export default styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 1.5rem;
padding-top: 50px;

@media (max-width: ${theme.breakpoints.mobile}) {
  flex-direction: column;
  gap: 3.5rem;
}
`;