import React from 'react';
import { makeStyles } from '@material-ui/core';
import Divider from '../components/Divider';
import Header from '../components/Header';
import Sections from '../components/Sections';
import headerImage from '../assets/headerimagenew.jpg';
import HeaderName from '../components/HeaderName';
import Section from '../components/Section';
import data from '../data/data';
import SkillSlider from '../components/SkillSlider';
import TopBar from '../components/TopBar';

const useStyles = makeStyles((theme) => ({
  container: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    maxWidth: 1600,
  },
  parallax: {
    backgroundImage: `url(${headerImage})`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
  },
  left: {
    padding: 32,
    flex: 1,
  },
  main: {
    display: 'flex',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.parallax}>
        <HeaderName />
      </div>
      <TopBar />

      <div className={classes.content}>
        <Header />
        <Divider />
        <div className={classes.main}>
          <div className={classes.left}>
            <Section data={data.profile} />
            {data.skills.map((item) => (
              <SkillSlider
                skill={item.skill}
                skillLevel={item.skillLevel}
              />
            ))}
          </div>
          <Sections />
        </div>
      </div>
    </div>
  );
}

export default App;
