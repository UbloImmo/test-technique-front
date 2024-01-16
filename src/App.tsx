import styled from "styled-components";
import "./index.css";
import { Units } from "./feature";

/**
 * Renders the main application component.
 *
 * @return {JSX.Element} The rendered application component.
 */
export function App() {
  return (
    <Container>
     <Units />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

