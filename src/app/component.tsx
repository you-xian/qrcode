import { ThemeProvider } from "@material-ui/styles";
import React from "react";


import Header from "../component/header";
import { theme } from "../style";
import qrcode from "./qrcode.jpg";
import { GlobalStyle, style } from "./style";

const App: React.FC = () => {
  const classes = style();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <GlobalStyle />
        <Header />
        <img src={qrcode} className={classes.image} alt="qrcode" />
      </div>
    </ThemeProvider>
  );
};
export default App;
