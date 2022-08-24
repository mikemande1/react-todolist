import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const hook = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
if (typeof hook != 'undefined') {
  if (!hook.on) {
    hook.on = () => {}
  }
  if (!hook.off) {
    hook.off = () => {}
  }
}
