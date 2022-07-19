import React from "react";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { CSInsightsPage } from "./pages";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CSInsightsPage />
      </Container>
    </ThemeProvider>
  );
}

export default App;
