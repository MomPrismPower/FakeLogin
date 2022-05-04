import React from 'react';
import ReactDOM from 'react-dom/client';
//import * as ReactDOM from 'react-dom';
//import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
//import NewsFeed from './components/wholeShebang';
import reportWebVitals from './reportWebVitals';
//import wholeShebang from './Components/wholeShebang';

const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.render(
  //React.createElement(wholeShebang, {}, null),
  //document.getElementById('root')
  <React.StrictMode>
    <App />
  </React.StrictMode>

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

