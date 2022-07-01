import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import About from './About';
import Ourcollections from './Ourcollections';
import Regform from './Regform';
import DataFrontend from './DataFrontend';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    < Navbar/>
    < About/>
    < Ourcollections/>
    <DataFrontend/>
    < Regform/>
  </>
);
