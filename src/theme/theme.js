import { createMuiTheme } from '@material-ui/core/styles';

const defaultBranding = {
  main: '#404040',
  secondary: '#B1CFC6',
  third: '#D9D9D9',
};

const createTheme = () => createMuiTheme({
  palette: {
    primary: {
      ...defaultBranding,
    },
  },
  typography: {
    fontFamily: 'Helvetica, Calibri, sans-serif',
    headerFont: 'Helvetica',
    bodyFont: 'Calibri',
  },
});

export default createTheme;
