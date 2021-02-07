import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    flexDirection: 'column',
  },

  text: {
    textTransform: 'uppercase',
    letterSpacing: 7,
    fontSize: 162,
    zIndex: 1,
    margin: 0,
  },

  lastName: {
    whiteSpace: 'pre',
    fontWeight: 'normal',
  },
}));

const HeaderName = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 className={classes.text}>Alma</h1>
      <h1 className={`${classes.lastName} ${classes.text}`}>Cederblad</h1>
    </div>
  );
};

export default HeaderName;
