import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ConfigProvider } from 'antd'
import fa_IR from 'antd/lib/locale/fa_IR'
import { Provider as  ReduxProvider} from 'react-redux';
import  store  from '../src/redux/store/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ConfigProvider direction='rtl' locale={fa_IR}>
    <ReduxProvider store={store}>
    <Router>
    <App />
    </Router>
    </ReduxProvider>


  </ConfigProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

