import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import homeImage from '../../assets/images/home-page-image.jpg';
import SignInForm from '../form/SignInForm';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { CButton } from '../form/elements';

export class HomePage extends Component {
  /**
   * I use this handler instead of a simple Link because request invite
   * can show a pop-up, made a navigation or another action
   * @memberof HomePage
   */
  handleRequestInvite = () => {
    this.props.history.push('/request-invite');
  };
  render() {
    return (
      <div className="component-page-homepage">
        <Header />
        <div className="home-layout">
          <div className="home-content">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-7">
                  <div className="home-description">
                    <h3 className="home-title">
                      Spend time with your<br />
                      customers, not invoices.<br />
                    </h3>
                    <div className="home-image">
                      <img src={homeImage} alt="Spend time with your customers, not invoices. " />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12  col-md-5">
                  <SignInForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(HomePage);
