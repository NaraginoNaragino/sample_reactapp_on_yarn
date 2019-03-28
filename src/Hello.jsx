import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

export default class Hello extends React.Component {
  render() {
    return (
      <Button variant="contained" color="primary">
        Hello {this.props.name}
      </Button>
    );
  }
}

ReactDOM.render(
  <Hello name="wada" />,
  document.getElementById('Hello')
);