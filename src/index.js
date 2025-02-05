import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 1.Render Menu Items:
const Sidebar = ({ initialMenuItems }) => {
  return (
    <div className="sidebar">
      <ul>
        {initialMenuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

//2. Maintain Menu State
// Sidebar.js
import React, { useState } from 'react';

const Sidebar = ({ initialMenuItems }) => {
  // TODO: Maintain the state for menu items using useState
  const [menuItems, setMenuItems] = useState(initialMenuItems);

  return (
    <div className="sidebar">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
