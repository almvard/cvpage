import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    letterSpacing: 3,
    fontWeight: 'normal',
    marginTop: theme.spacing(3),
    fontSize: 18,
  },
  subtitle: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    marginTop: theme.spacing(2),
  },
  bodyText: {
    fontFamily: theme.typography.bodyFont,
  },
}));

const Section = (props) => {
  const { data } = props;
  const { header, merits } = data;

  const classes = useStyles();
  return (
    <>
      <Typography className={classes.header} variant="h6">
        {header}
      </Typography>
      {merits.map((merit, index) => {
        const {
          subtitle, employer, date, content,
        } = merit;

        return (
          // eslint-disable-next-line react/no-array-index-key
          <div key={`merit ${index}`}>
            <Typography className={`${classes.subtitle} ${classes.bodyText}`} variant="subtitle2">
              {subtitle}
            </Typography>
            <Typography className={classes.bodyText} variant="subtitle2">
              {employer && date && `${employer} | ${date}`}
            </Typography>
            <Typography className={classes.bodyText} variant="subtitle2">
              {content}
            </Typography>
          </div>
        );
      })}
    </>
  );
};

Section.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Section;
