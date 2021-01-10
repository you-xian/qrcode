import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import React from "react";

import { style } from "./style";

const Header: React.FC = () => {
  const classes = style();

  return (
    <AppBar position="static" >
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <IconButton color="inherit"><HomeIcon className={classes.icon} /></IconButton>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
