import React from 'react';
import { Link } from 'react-router-dom';
import { COPYRIGHT, LINK_HOME, LINK_FAQ } from '../../utils/Constants';

const Footer = () => (
  <div className="component-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="d-flex">
            <nav className="mr-auto">
              <ul>
                <li>
                  <Link to={LINK_HOME}>About</Link>
                </li>
                <li>
                  <Link to={LINK_FAQ}>Terms of Use</Link>
                </li>
                <li>
                  <Link to={LINK_FAQ}>Privacy Policy</Link>
                </li>
                <li>
                  <Link to={LINK_FAQ}>Disclamer</Link>
                </li>
                <li>
                  <Link to={LINK_FAQ}>Contact Us</Link>
                </li>
              </ul>
            </nav>
            <div className="copyright">{COPYRIGHT}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
