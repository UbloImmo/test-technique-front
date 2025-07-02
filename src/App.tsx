import styled from "styled-components";
import "./index.css";
import { Units } from "./feature";
import {
  DialogProvider,
  ThemeProvider,
  UikitTranslationProvider,
} from "@ubloimmo/uikit";

/**
 * Renders the main application component and wraps it in the uikit's providers.
 *
 * @return {JSX.Element} The rendered application component.
 */
export function App() {
  return (
    <Container>
      <ThemeProvider>
        <UikitTranslationProvider>
          <DialogProvider>
            <Units />
          </DialogProvider>
        </UikitTranslationProvider>
      </ThemeProvider>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
