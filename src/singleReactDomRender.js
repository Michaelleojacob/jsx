//! this version overwrites the first ReactDom.render with the one after it.
//! potential fixes: use one at a time, or compile everything into one
//! component =>  ReactDom.render(< App />, document.getElById('root'));
// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const element = <h1>Hello, world!</h1>;

const formatName = (user) => `${user.firstName} ${user.lastName}`;

const user = {
  firstName: 'Miggels',
  lastName: 'Dev',
};

const nameElement = <h1>Hello, {formatName(user)}</h1>;

ReactDOM.render(element, document.getElementById('root'));
ReactDOM.render(nameElement, document.getElementById('root'));

// ========================================

// ReactDOM.render(<Game />, document.getElementById('root'));
