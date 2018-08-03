import React from 'react';
import { PropTypes } from 'prop-types';

const CButton = ({
  type, value, onClick, label, children, className,
}) => (
  <div className={`component-c-button ${className}`}>
    <button type={type} onClick={onClick} value={value}>
      {label}
      {children}
    </button>
  </div>
);

CButton.defaultProps = {
  className: '',
  type: 'button',
  label: '',
  value: '',
  onClick: () => null,
  children: null,
};
CButton.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
  children: PropTypes.element,
};

export { CButton as default };
