import React from 'react';
import ReactDOM from 'react-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';
import customeTheme from './ui/theme';
import App from './components/App';

ReactDOM.render(
<MuiThemeProvider theme={customeTheme}>
  <App />
</MuiThemeProvider>,
  document.getElementById('root')
);
