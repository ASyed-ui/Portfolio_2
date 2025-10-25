// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css' // Global styles including Tailwind
// import { BrowserRouter } from "react-router-dom"; // Enables React Router

// // Create root and render the app
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* Wrap the entire app with BrowserRouter for SPA routing */}
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);


