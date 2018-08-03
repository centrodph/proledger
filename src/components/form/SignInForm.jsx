import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginInputChange, loginFormRequest } from '../../actions/HomeActions';
import { CInput, CButton, GoogleSigninBtn } from './elements';
import Spinner from '../common/Spinner';
import { LINK_FORGOT_PASSWORD } from '../../utils/Constants';

export class SignInForm extends Component {
  /**
   * Handle submit event
   */
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, loginFormRequest } = this.props;
    // Check validation rules
    if (email && password) {
      loginFormRequest({ email, password });
    }
  };

  /**
   * Send change to Redux
   */
  handleChangeInput = (key, value) => {
    this.props.loginInputChange({ key, value });
  };

  /**
   * Render
   */
  render() {
    const {
      email, password, loading, islogged,
    } = this.props;

    if (loading) return <Spinner />;
    if (islogged) return null;
    return (
      <div className="component-signin-form component-form signin-form">
        <div className="form-title">Start here.</div>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <CInput
            type="email"
            value={email}
            onChange={e => this.handleChangeInput('email', e.target.value)}
            placeholder="Email"
          />
          <CInput
            type="password"
            name="current-password"
            value={password}
            onChange={e => this.handleChangeInput('password', e.target.value)}
            placeholder="Password"
          />
          <div className="d-flex form-actions">
            <Link className="forgot-link" to={LINK_FORGOT_PASSWORD}>
              Forgot Password
            </Link>
            <CButton type="submit" className="btn-login">
              <span>
                Login
                <span className="flaticon flaticon-065-right-arrow-1" />
              </span>
            </CButton>
          </div>
        </form>
        <div className="google-signin">
          <GoogleSigninBtn />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ home }) => {
  const {
    data: { email, password },
    loading,
  } = home;
  return {
    email,
    password,
    loading,
  };
};

export default connect(
  mapStateToProps,
  { loginInputChange, loginFormRequest },
)(SignInForm);
