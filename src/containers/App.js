import React from 'react';
import { makeStyles } from '@material-ui/core';
import Divider from '../components/Divider';
import Header from '../components/Header';
import Sections from '../components/Sections';
import headerImage from '../assets/headerimagenew.jpg';
import HeaderName from '../components/HeaderName';

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
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.parallax}>
        <HeaderName />
      </div>
      <div className={classes.content}>
        <Header />
        <Divider />
        <Sections />
      </div>
    </div>
  );
}

export default App;
