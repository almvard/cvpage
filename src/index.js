import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MuiThemeProvider } from '@material-ui/core';
import reducers from './reducers/index';
import App from './containers/App';
import { createTheme } from './theme/theme';

const store = createStore(reducers);
const appTheme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiThemeProvider theme={appTheme}>
        <App theme={appTheme} />
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
