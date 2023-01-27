import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from './App';
import {nombreCompleto as Name} from './components/nombreCompleto';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello/>
    <Name/>
    <Name/>
    <Name/>
  </React.StrictMode>
);

