import React from 'react';
import ReactDOM from 'react-dom/client';
import { HeroesApp } from './HeroesApp';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <HeroesApp />
  </>
);

reportWebVitals();
