// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import './foundations/colors.css';
import './foundations/text.css';
import './foundations/sizes.css';
import './foundations/corner-radius.css';
import './components/button.css'; // Import your styles, if needed
import './index.css'; // Import other global styles, if any
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="wrapper">
      <h1>Buttons</h1>
      <p className="body-fat">These are the buttons we defined so far. They have 3 different types and sizes.</p>
      <div className="container">
        <Button label="Big Primary Button" type="primary" size="big" onClick={() => alert('Default Size Button clicked!')} />
        <Button label="Big Secondary Button" type="secondary" size="big" onClick={() => alert('Small Size Button clicked!')} />
        <Button label="Big Tertiary Button" type="tertiary" size="big" onClick={() => alert('Big Size Button clicked!')} />
        <Button label="Primary Button" type="primary" size="default" onClick={() => alert('Default Size Button clicked!')} />
        <Button label="Secondary Button" type="secondary" size="default" onClick={() => alert('Small Size Button clicked!')} />
        <Button label="Tertiary Button" type="tertiary" size="default" onClick={() => alert('Big Size Button clicked!')} />
        <Button label="Small Primary Button" type="primary" size="small" onClick={() => alert('Default Size Button clicked!')} />
        <Button label="Small Secondary Button" type="secondary" size="small" onClick={() => alert('Small Size Button clicked!')} />
        <Button label="Small Tertiary Button" type="tertiary" size="small" onClick={() => alert('Big Size Button clicked!')} />
      </div>
    </div>
  </React.StrictMode>
);
