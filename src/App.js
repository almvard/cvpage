import React from 'react';
import {connect} from 'react-redux';
import * as PropTypes from 'prop-types';
import {getEmail, getName} from './reducers/data';
import {setEmail, setName} from './actions/data';
import TopBar from "./TopBar";
import {createTheme} from "./theme/theme";
import {MuiThemeProvider} from '@material-ui/core';
import Divider from "@material-ui/core/Divider";

function App(props) {
  const {
    email, name, setEmail, setName,
  } = props;

  const appTheme = createTheme();

  return (
    <MuiThemeProvider theme={appTheme}>
      <TopBar/>
      <Divider orientation={"vertical"}/>
    </MuiThemeProvider>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setName: (name) => dispatch(setName(name)),
  setEmail: (email) => dispatch(setEmail(email)),
});

const mapStateToProps = (state) => ({
  email: getEmail(state),
  name: getName(state),
});

App.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
