import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import GlobalStyles from "../assets/styles/global";
import defaultTheme from "../assets/styles/themes/default";

import { Container } from "./styles";

import Header from "../components/Header";
import Routes from "../Routes";

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Container>
          <Header toggleTheme={toggleTheme} />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
