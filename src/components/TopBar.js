import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.secondary,
    minHeight: 24,
    display: 'flex',
  },
}));

const TopBar = () => {
  const classes = useStyles();

  return <div className={classes.root} />;
};

export default TopBar;
