// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import './utilities/normalizer.css';
import './foundations/colors.css';
import './foundations/text.css';
import './foundations/sizes.css';
import './foundations/spacings.css';
import './foundations/corner-radius.css';
import './components/button.css'; // Import your styles, if needed
import './index.css'; // Import other global styles, if any
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="wrapper">
      <div>
        <h1>Buttons</h1>
        <p className="body-fat">These are the buttons we defined so far. They have 3 different types and sizes.</p>
      </div>
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
      <div>
        <h1>Typography</h1>
        <p className="body-fat">This is the font-setting of our brand.</p>
      </div>
      <div className="container--typography">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <p>Paragraph example: From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.</p>
        <p className="body-fat">Fat Paragraph example: From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.</p>
        <caption>caption example</caption>

      </div>
      <div>
        <h1>Cards</h1>
        <p className="body-fat">These are the cards we defined so far.</p>
      </div>

    </div>
  </React.StrictMode>
);
