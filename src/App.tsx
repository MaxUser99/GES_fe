import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import theme from "./theme";
import Routes from "./routes";
import { StoreContext, stores } from "./stores";


function App() {
  return (
    <React.StrictMode>
      <StoreContext.Provider value={stores}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </StoreContext.Provider>
    </React.StrictMode>
  );
}

export default App;
