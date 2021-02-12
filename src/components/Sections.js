import React from 'react';
import { makeStyles } from '@material-ui/core';
import Section from './Section';
import data from '../data/data';
import Divider from './Divider';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 32,
    flex: 2,
  },
});
const Sections = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section data={data.education} />
      <Divider margin />
      <Section data={data.work} />
      <Section data={data.other} />
    </div>
  );
};

export default Sections;
