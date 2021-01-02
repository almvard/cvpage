import React from 'react';
import MuiDivider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';

const Divider = ({ margin }) => <MuiDivider style={{ marginTop: margin ? 24 : 0 }} />;

Divider.propTypes = {
  margin: PropTypes.bool,
};

export default Divider;
