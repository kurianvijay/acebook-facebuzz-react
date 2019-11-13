import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Navbar.styles';

class Navbar extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Navbar will mount');
  }

  componentDidMount = () => {
    console.log('Navbar mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Navbar will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Navbar will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Navbar did update');
  }

  componentWillUnmount = () => {
    console.log('Navbar will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="NavbarWrapper">
        Test content
      </div>
    );
  }
}

Navbar.propTypes = {
  // bla: PropTypes.string,
};

Navbar.defaultProps = {
  // bla: 'test',
};

export default Navbar;
