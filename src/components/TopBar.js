import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.secondary,
    minHeight: theme.spacing(4),
    display: 'flex',
    width: '100%',
  },
}));

const TopBar = () => {
  const classes = useStyles();

  return <div className={classes.root} />;
};

export default TopBar;
