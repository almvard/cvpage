import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import './SkillSlider.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 'bold',
  },

  track: {
    height: 12,
    backgroundColor: theme.palette.primary.third,
    width: 100,
  },

  span: {
    display: 'block',
    height: '100%',
  },

  progress: {
    backgroundColor: theme.palette.primary.main,
    '-webkit-animation': 'progressBar 1s ease-in-out',
  },
}));

const SkillSlider = (props) => {
  const { skill, skillLevel } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {skill}
      <div className={classes.track}>
        <span className={classes.span} style={{ width: `${skillLevel}%` }}>
          <span className={`${classes.progress} ${classes.span}`} />
        </span>
      </div>
    </div>
  );
};

SkillSlider.propTypes = {
  skillLevel: PropTypes.number.isRequired,
  skill: PropTypes.string.isRequired,
};

export default SkillSlider;
