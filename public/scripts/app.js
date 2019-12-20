'use strict';

console.log('App.js is running');

// JSX - JavaScript XML

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Adoniram'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Adoniram Vargas'
  ),
  React.createElement(
    'p',
    null,
    'age: 46'
  ),
  React.createElement(
    'p',
    null,
    'location: Miami'
  )
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
