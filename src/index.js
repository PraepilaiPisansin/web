import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
//import 'react-tabs/style/react-tabs.css';
//import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import './index.css';
import './App.css';
import './style/Navbar.css';
import './style/icon.css';
import './style/index.css';
import './style/chart.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

//import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
