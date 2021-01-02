import React from 'react';
import { makeStyles } from '@material-ui/core';
import Divider from './Divider';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },

  text: {
    textTransform: 'uppercase',
    letterSpacing: 7,
    fontSize: 38,
  },

  lastName: {
    whiteSpace: 'pre',
    fontWeight: 'normal',
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.text}>Alma</h1>
      <h1 className={`${classes.lastName} ${classes.text}`}> Cederblad</h1>
    </div>
  );
};

export default Header;
