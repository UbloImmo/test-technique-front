import styled from "styled-components";
import "./index.css";
import { Lots } from "./feature";

/**
 * Renders the main application component.
 *
 * @return {JSX.Element} The rendered application component.
 */
export function App() {
  return (
    <Container>
     <Lots />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

