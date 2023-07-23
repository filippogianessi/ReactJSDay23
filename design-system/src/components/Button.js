import React from 'react';
import './button.css';
import '../foundations/sizes.css';


const Button = ({ label, onClick, type, size }) => {
  const buttonClass = `button ${type || 'primary'} ${size || 'default'}`; // Default to primary and default size if no type/size is provided

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
