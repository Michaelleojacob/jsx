import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//? < v1 >
// ===========================

// const formatName = (user) => `${user.firstName} ${user.lastName}`;

// const user = {
//   firstName: 'developer',
//   lastName: 'Miggels',
// };

// const element = <h1>Hello, {formatName(user)}</h1>;

// function getGreeting(user) {
//   if (user) {
//     return element;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }
// // ReactDOM.render(getGreeting(), document.getElementById('root'));

// ReactDOM.render(getGreeting(user), document.getElementById('root'));

// ===========================
//? </ v1 >

//? < v2 >
// ===========================

// const element = <a href="https://github.com/Michaelleojacob"> github</a>;
// // const element = <img src={user.avatarUrl}></img> /* this is just an example */

// ReactDOM.render(element, document.getElementById('root'));

// ===========================
//? </ v2 >

//? < v3 >
// ===========================

// const element = (
//   <div>
//     <h1>hello!</h1>
//     <h2>Good to see you here.</h2>
//   </div>
// );

// ReactDOM.render(element, document.getElementById('root'));

// ===========================
//? </ v3 >

//? </ v4 >
// ===========================

// const element = <h1 className="greeting">hello world</h1>;

// ReactDOM.render(element, document.getElementById('root'));

// ===========================
//? </ v4 >

//* v4 and v5 are the same, v5 just uses createElement

//? </ v5 >
// ===========================

const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'hello world!',
);

ReactDOM.render(element, document.getElementById('root'));

// ===========================
//? </ v5 >
