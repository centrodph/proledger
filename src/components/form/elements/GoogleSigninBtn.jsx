import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import {
  authenticateUser,
  unAuthenticateUser,
  loginGoogleRequest,
} from '../../../actions/HomeActions';

import svg from '../../../assets/images/icon-google.svg';

export class GoogleSigninBtn extends Component {
  componentWillMount() {
    window.onSignIn = this.onSignIn; // bind component with google signin
  }

  onSignIn = (user) => {
    console.log('onSignin', user);
    if (!this.flagSignin) this.props.loginGoogleRequest(user);
    // this.props.authenticateUser(user);
    // console.error(user);
  };
  flagSignin = false;

  renderLoginBtn = () => {
    const { loginGoogleRequest: callGoogle } = this.props;
    return (
      <button onClick={callGoogle}>
        {svg}
        <span>Sign In</span>
      </button>
    );
  };
  renderLogoutBtn = () => {
    const { unAuthenticateUser: callLogout } = this.props;

    return (
      <button onClick={callLogout}>
        {svg}
        <span>Sign out</span>
      </button>
    );
  };

  render() {
    const { className, islogged } = this.props;
    const cssClass = `component-google-signin ${className}`;
    return (
      <div className={cssClass}>
        {!islogged && <div className="g-signin2" data-onsuccess="onSignIn" />}
        {islogged && this.renderLogoutBtn()}
      </div>
    );
  }
}

GoogleSigninBtn.propTypes = {
  // authenticateUser: PropTypes.func.isRequired,
  unAuthenticateUser: PropTypes.func.isRequired,
  loginGoogleRequest: PropTypes.func.isRequired,
  islogged: PropTypes.bool,
  className: PropTypes.string,
};

GoogleSigninBtn.defaultProps = {
  islogged: false,
  className: '',
};

export default GoogleSigninBtn;
