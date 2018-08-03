import React from 'react';
import { PropTypes } from 'prop-types';

const CTextarea = ({
  value, onChange, placeholder, label, autoComplete,
}) => {
  const renderLabel = label ? <div className="c-label">{label}</div> : null;
  return (
    <div className="form-group component-input-row component-input-textarea">
      {renderLabel}
      <textarea
        className="form-control textarea-input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </div>
  );
};
CTextarea.defaultProps = {
  autoComplete: 'off',
  label: null,
  placeholder: 'Type your message',
  value: '',
  onChange: () => null,
};
CTextarea.propTypes = {
  autoComplete: PropTypes.oneOf(['on', 'off']),
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};
export { CTextarea as default };
