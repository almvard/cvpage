import React from 'react';
import { makeStyles } from '@material-ui/core';
import TopBar from '../components/TopBar';
import Section from '../components/Section';
import Divider from '../components/Divider';
import SkillSlider from '../components/SkillSlider';
import data from '../data/data';

const useStyles = makeStyles((theme) => ({
  main: {
    fontFamily: theme.typography.fontFamily,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <TopBar />
      <Section data={data.education} />
      <Divider />
      <Section data={data.work} />
      {data.skills.map((item) => <SkillSlider skill={item.skill} skillLevel={item.skillLevel} />)}
    </div>
  );
}

export default App;
