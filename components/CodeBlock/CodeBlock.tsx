import { CodeBlock, dracula } from "react-code-blocks";
import styled from "styled-components";

const code = `
    //Tech Stack
    const core = [ 'HTML', 'CSS', 'JavaScript']
    const candy = [ 'React', 'Redux', 'TypeScript', 'NextJS', 'Styled Components', 'Flutter']
    
`;

// const CodeImage = styled(Image)`
//   box-shadow: 0px 3.78551px 90.8522px -32.1768px rgba(0, 0, 0, 0.3);
// `;

const Container = styled.div`
  box-shadow: 0px 3.78551px 90.8522px -32.1768px rgba(0, 0, 0, 0.8);
`;

const Component = () => (
  <Container>
    <CodeBlock
      style={{ borderRadius: "50px" }}
      text={code}
      language={"javascript"}
      theme={dracula}
      showLineNumbers={false}
    />
  </Container>
);

export default Component;
