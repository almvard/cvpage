import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, withStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 12,
    width: 80,
  },
  colorPrimary: {
    backgroundColor: theme.palette.primary.third,
  },
  bar: {
    backgroundColor: theme.palette.primary.main,
  },
}))(LinearProgress);

const SkillSlider = (props) => {
  const { skill, skillLevel } = props;

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {skill}
      <BorderLinearProgress variant="determinate" value={skillLevel} />
    </div>
  );
};

SkillSlider.propTypes = {
  skillLevel: PropTypes.number.isRequired,
  skill: PropTypes.string.isRequired,
};

export default SkillSlider;
