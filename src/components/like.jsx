/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
// import PropTypes from 'prop-types';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <h2><span role="img" aria-label="Bolt">⚡</span> {this.state.count} </h2>
      </div>
    );
  }
}
