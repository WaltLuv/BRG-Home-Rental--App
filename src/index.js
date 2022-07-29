import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from 'web3uikit';



ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId="LmF33Ew2dRrL7gCwqRVhMsVKM6Yjky7R12IHR09C" serverUrl="https://du17d74u8na8.usemoralis.com:2053/server"
    //appId="1d7CmugNB33vl9LmwhPFauUVDR2jnOovemEulVhl" serverUrl="https://xt9pviuh4ptd.usemoralis.com:2053/server"
    >
      <NotificationProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </NotificationProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
