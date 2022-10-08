import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Templates/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Details } from './Templates/Details';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path=":name" element={<Details />} />
    </Routes>
  </Router>,
);
