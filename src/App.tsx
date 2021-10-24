import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import theme from "./theme";
import Routes from "./routes";

const StoreContext = React.createContext(null);

function App() {
  return (
    <React.StrictMode>
      <StoreContext.Provider value={null}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </StoreContext.Provider>
    </React.StrictMode>
  );
}

export default App;
