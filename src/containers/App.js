import React from 'react';
import TopBar from "../components/TopBar";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  main: {
    fontFamily: theme.typography.fontFamily,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <TopBar />
      hejsan TESTAR HEjehj
    </div>
  );
}


export default App;
