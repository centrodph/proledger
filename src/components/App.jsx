import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/main.css';
/**
 * Wrapper component.
 * It should have a Header & Main content.
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  state = {
    checkLocal: false,
  };
  componentDidMount = () => {
    // Check localstore
    this.setState({ checkLocal: true });
  };
  render() {
    return (
      <div className="component-app">
        <div className="h-100 app-content">{this.props.children}</div>
        <div
          style={{ display: 'none' }}
          className="g-signin2"
          data-cookiepolicy="single_host_origin"
          data-onsuccess="onSignIn"
        />
      </div>
    );
  }
}

App.defaultProps = {
  children: null,
};
App.propTypes = {
  children: PropTypes.node,
};

export default App;
