import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';

// const AppBarExampleIcon = () => (
//   <AppBar
//     title="Title"
//     iconClassNameRight="muidocs-icon-navigation-expand-more"
//   />
// );

export default class Header extends React.Component {
  render() {
    return (
      <Header>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        ></AppBar>
      </Header>
    );
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('Header')
);