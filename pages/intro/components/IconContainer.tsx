import styled from "styled-components";

export default styled.div`
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