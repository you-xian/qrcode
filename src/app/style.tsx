import {
  createStyles,
  makeStyles,
} from "@material-ui/core";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

export const style = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: "transparent"
    },
    image: {
      margin: "auto",
      display: "block",
      marginTop: "24px",
      marginLeft: "auto",
      marginRight: "auto",
      width: "25%"
    }
  }),
);
