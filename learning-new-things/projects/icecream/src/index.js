import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import MainMenu from './frontend/MainMenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {PlaceOrder, ConfirmOrder} from './frontend/PlaceOrder';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu/>} />
        <Route path="/order" element={<PlaceOrder/>} />
        <Route path="/confirm-order" element={<ConfirmOrder/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
