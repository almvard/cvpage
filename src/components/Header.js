import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },

  text: {
    textTransform: 'uppercase',
    letterSpacing: 7,
  },

  firstName: {
    whiteSpace: 'pre',
    fontWeight: 'bold',
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" className={`${classes.firstName} ${classes.text}`}>Alma </Typography>
      <Typography variant="h2" className={classes.text}>Cederblad</Typography>
    </div>
  );
};

export default Header;
