import React from 'react';
import { PropTypes } from 'prop-types';

const CInput = ({
  type, value, onChange, placeholder, label, autoComplete,
}) => {
  const renderLabel = label ? <div className="c-label">{label}</div> : null;
  return (
    <div className="form-group component-input-row component-input-textfield">
      {renderLabel}
      <input
        className="form-control textfield-input"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </div>
  );
};
CInput.defaultProps = {
  type: 'text',
  autoComplete: 'off',
  label: null,
  placeholder: null,
  value: '',
  onChange: () => null,
};
CInput.propTypes = {
  type: PropTypes.oneOf(['text', 'email', 'password', 'number']),
  autoComplete: PropTypes.oneOf(['on', 'off']),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};
export { CInput as default };
