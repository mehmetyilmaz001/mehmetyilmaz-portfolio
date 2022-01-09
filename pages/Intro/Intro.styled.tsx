import styled from "styled-components";
import theme from "../../style/theme";

const IntroContainer = styled.div`
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

const MainTitle = styled.h1`
  ${theme.fonts.adventPro};
  font-size: 3rem;
  color: white;
`;

const MessageTitle = styled.h2`
  font-size: 2rem;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;

  a {
    transition: all 0.2s ease-in-out;
    :hover {
      transform: scale(1.5);
    }
  }
`;


export {
    IntroContainer,
    MainTitle,
    MessageTitle,
    IconContainer
}
