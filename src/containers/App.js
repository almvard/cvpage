import React from 'react';
import { makeStyles } from '@material-ui/core';
import TopBar from '../components/TopBar';
import Section from '../components/Section';
import Divider from '../components/Divider';
import SkillSlider from '../components/SkillSlider';
import data from '../data/data';
import Header from '../components/Header';

const useStyles = makeStyles((theme) => ({
  main: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.primary.main,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <TopBar />
      <Header />
      <Divider />
      <Section data={data.education} />
      <Divider margin />
      <Section data={data.work} />
      <Section data={data.other} />
      <Section data={data.profile} />
      {data.skills.map((item) => (
        <SkillSlider
          skill={item.skill}
          skillLevel={item.skillLevel}
        />
      ))}
    </div>
  );
}

export default App;
