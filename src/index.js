import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Nav from './Nav';
import LoginForm from './LoginForm';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Nav />
    <LoginForm />
  </>
)

