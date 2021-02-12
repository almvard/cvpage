import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, responsiveFontSizes } from '@material-ui/core';
import App from './containers/App';
import createTheme from './theme/theme';

const appTheme = responsiveFontSizes(createTheme());

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={appTheme}>
      <App theme={appTheme} />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
