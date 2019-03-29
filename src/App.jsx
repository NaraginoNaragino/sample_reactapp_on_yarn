import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Icon from './icon';
import Avatar from './avatars';
// import AutocompleteSelect from './autocomplete-select';
import AutocompleteDownshift from './autocomplete-downshift';

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({ typography: { useNextVariants: true } });

ReactDOM.render(<Header />, document.querySelector('#root'));
ReactDOM.render(<Icon />, document.querySelector('#icon'));
ReactDOM.render(<Avatar />, document.querySelector('#avatar'));

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AutocompleteDownshift />
  </ThemeProvider>,
  document.querySelector("#autocomplete-downshift")
);
    