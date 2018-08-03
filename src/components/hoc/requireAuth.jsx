import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { unAuthenticateUser } from '../../actions/HomeActions';
import Spinner from '../common/Spinner';

export default (ProtectedRoute) => {
  class RequireAuth extends Component {
    componentDidMount() {
      console.info('RequireAuth');
    }
    render() {
      const { islogged, unAuthenticateUser: unAuthenticateUserAction } = this.props;
      // Return a Loading component while the isLoading function is 'true'
      if (islogged !== true) {
        unAuthenticateUserAction();
        return <Spinner />;
      }
      // Pass the received 'props' and created functions to the ProtectedRoute component
      return <ProtectedRoute {...this.props} />;
    }
  }

  RequireAuth.propTypes = {
    islogged: PropTypes.bool.isRequired,
    unAuthenticateUser: PropTypes.func.isRequired,
  };

  const mapStateToProps = ({ auth }) => {
    const { islogged } = auth;
    return { islogged };
  };

  return connect(
    mapStateToProps,
    { unAuthenticateUser },
  )(RequireAuth);
};
