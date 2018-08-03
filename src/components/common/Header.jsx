import React, { Component } from 'react';
import { PAGE_TITLE } from '../../utils/Constants';
import logo from '../../assets/images/logo.png';

export class Header extends Component {
  renderHeaderActions = () => <div className="component-header-actions">test</div>;
  render() {
    return (
      <div className="component-header">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-3">
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
