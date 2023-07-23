import React from 'react';


const Button = ({ label, onClick, type, size }) => {
  const cardClass = `card ${type || 'light'}`; // Default to primary and default size if no type/size is provided

  return (
    <div className={cardClass}>
      {label}
    </div>
  );
};

export default Button;
