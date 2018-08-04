import React, { Component } from 'react';
import { PAGE_TITLE } from '../../utils/Constants';
import logo from '../../assets/images/logo-hq.png';
import { CButton } from '../form/elements';

class Header extends Component {
  renderHeaderActions = () => (
    <div className="component-header-actions">
      <a href="#" className="component-header-actions__link">
        News & Blog
      </a>
      <a href="#" className="component-header-actions__link">
        Help
      </a>
      <a href="#" className="component-header-actions__link">
        Pricing
      </a>
      <CButton type="button" className="component-header-actions__btn">
        <span>SIGN-UP</span>
      </CButton>
    </div>
  );
  render() {
    return (
      <div className="component-header">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-3 logo-contener">
              <img id="logo" src={logo} alt={PAGE_TITLE} title={PAGE_TITLE} />
            </div>
            <div className="col-sm-12 col-md-9">{this.renderHeaderActions()}</div>
          </div>
        </div>
      </div>
    );
  }
}

Header.defaultProps = {};
Header.propTypes = {};

export default Header;
